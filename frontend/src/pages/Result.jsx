import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckCircle2, XCircle, Info, RotateCcw, Award, Star, ListChecks, ArrowLeft, Download, Share2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) return (
    <div className="h-screen flex-center flex-col p-8 text-center bg-slate-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-[2.5rem] flex-center mb-8 shadow-xl shadow-indigo-100"
      >
        <Info size={48} />
      </motion.div>
      <h2 className="text-3xl font-extrabold mb-3 text-slate-900">No Results Found</h2>
      <p className="text-slate-500 mb-10 max-w-sm text-lg font-medium">It seems you haven't completed a test recently. Redirecting you to safety.</p>
      <button onClick={() => navigate('/dashboard')} className="btn-primary !px-10 !py-4 shadow-indigo-100">
        Return to Dashboard
      </button>
    </div>
  );

  const { attempt, questions } = state;
  const percentage = (attempt.score / attempt.totalQuestions) * 100;

  const chartData = [
    { name: 'Correct', value: attempt.score },
    { name: 'Incorrect', value: attempt.totalQuestions - attempt.score },
  ];

  const getPerformanceMessage = () => {
    if (percentage >= 90) return {
      title: "Clinical Perfection!",
      sub: "Exemplary performance! You've demonstrated superior mastery of nursing protocols.",
      icon: Star,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      shadow: 'shadow-amber-200/50'
    };
    if (percentage >= 70) return {
      title: "Board Ready!",
      sub: "Solid performance. You are consistently scoring above the required benchmarks.",
      icon: Award,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      shadow: 'shadow-indigo-200/50'
    };
    if (percentage >= 50) return {
      title: "Passing Mark",
      sub: "Threshold achieved, but clinical precision requires more focused study sessions.",
      icon: ListChecks,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      shadow: 'shadow-emerald-200/50'
    };
    return {
      title: "In Review",
      sub: "Don't be discouraged. Professional growth is iterative. Review your rationales below.",
      icon: RotateCcw,
      color: 'text-rose-500',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      shadow: 'shadow-rose-200/50'
    };
  };

  const message = getPerformanceMessage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent"></div>

      {/* Result Header Navigation */}
      <nav className="h-24 px-6 md:px-12 border-b border-white/80 bg-white/70 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <motion.button
            whileHover={{ x: -10 }}
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-4 font-black text-slate-400 hover:text-indigo-600 transition-all uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={20} strokeWidth={3} />
            Dashboard Exit
          </motion.button>
          <div className="flex items-center gap-4">
            <button className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm">
              <Download size={22} />
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm">
              <Share2 size={22} />
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 mt-16 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Score Card */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              variants={itemVariants}
              className={`glass-panel p-12 md:p-18 border-white bg-white/80 shadow-2xl ${message.shadow} overflow-visible`}
            >
              <div className="relative z-10 flex flex-col xl:flex-row items-center gap-16">
                <div className="w-72 h-72 relative shrink-0">
                  <div className="absolute inset-0 rounded-full border-[10px] border-slate-100/50"></div>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={135}
                        paddingAngle={10}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        stroke="none"
                        animationDuration={1500}
                        animationBegin={500}
                      >
                        <Cell fill={percentage >= 50 ? '#4f46e5' : '#f43f5e'} />
                        <Cell fill="#f1f5f9" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex-center flex-col">
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="text-7xl font-black text-slate-900 tracking-tighter"
                    >
                      {Math.round(percentage)}%
                    </motion.span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2 ml-1">Precision</span>
                  </div>
                </div>

                <div className="text-center xl:text-left space-y-8 flex-1">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full ${message.bg} ${message.color} ${message.border} border text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm`}
                    >
                      <message.icon size={18} fill="currentColor" className="opacity-30" />
                      {message.title}
                    </motion.div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                      Knowledge <span className="text-indigo-600">Verification</span> <br />Complete
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
                      {message.sub}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center xl:justify-start gap-6">
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl px-8 py-5 shadow-inner">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Affirmative</p>
                      <p className="text-3xl font-black text-emerald-600">{attempt.score}</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl px-8 py-5 shadow-inner">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Logic</p>
                      <p className="text-3xl font-black text-slate-800">{attempt.totalQuestions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex-center shadow-lg shadow-indigo-100">
                    <ListChecks size={28} />
                  </div>
                  Rationale Analysis
                </h3>
              </div>

              <div className="space-y-12">
                {questions.map((q, idx) => {
                  const resp = attempt.responses.find(r => r.questionId === q._id);
                  const isCorrect = resp?.isCorrect;

                  return (
                    <motion.div
                      variants={itemVariants}
                      key={idx}
                      className="glass-panel !bg-white border-slate-100 overflow-hidden shadow-xl"
                    >
                      <div className="p-10 md:p-14">
                        <div className="flex items-start gap-8 mb-12">
                          <div className={`w-16 h-16 rounded-3xl flex-center shrink-0 font-black text-2xl shadow-xl rotate-3 ${isCorrect ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-rose-600 text-white shadow-rose-100'
                            }`}>
                            {idx + 1}
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              {isCorrect ? (
                                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-widest">Valid Entry</span>
                              ) : (
                                <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 uppercase tracking-widest">Logic Failure</span>
                              )}
                              <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Critical Question</span>
                            </div>
                            <p className="text-2xl font-extrabold text-slate-900 leading-tight tracking-tight">{q.question}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                          {q.options.map((opt, i) => {
                            const isOptionCorrect = i === q.correct;
                            const isOptionSelected = i === resp?.selectedOption;

                            let stateClasses = "bg-slate-50 border-slate-50 text-slate-400 opacity-50";
                            if (isOptionCorrect) stateClasses = "bg-emerald-50 border-emerald-200 text-emerald-900 font-bold ring-[6px] ring-emerald-50/50 z-10 scale-[1.03] opacity-100 shadow-lg shadow-emerald-100/20";
                            if (isOptionSelected && !isCorrect) stateClasses = "bg-rose-50 border-rose-200 text-rose-900 font-bold ring-[6px] ring-rose-50/50 z-10 scale-[1.03] opacity-100 shadow-lg shadow-rose-100/20";

                            return (
                              <div key={i} className={`p-6 rounded-3xl border-2 flex items-center gap-6 transition-all duration-500 ${stateClasses}`}>
                                <div className={`w-12 h-12 rounded-2xl flex-center shrink-0 border-2 font-black text-base transition-all shadow-sm ${isOptionCorrect ? 'bg-emerald-600 border-emerald-600 text-white' :
                                  (isOptionSelected && !isCorrect ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-100 bg-white')
                                  }`}>
                                  {String.fromCharCode(65 + i)}
                                </div>
                                <span className="flex-1 text-lg leading-snug tracking-tight">{opt}</span>
                                {isOptionCorrect && <CheckCircle2 size={28} fill="currentColor" className="text-emerald-500/20" />}
                                {isOptionSelected && !isCorrect && <XCircle size={28} fill="currentColor" className="text-rose-500/20" />}
                              </div>
                            );
                          })}
                        </div>

                        <div className="mb-12 p-6 bg-emerald-50 border border-emerald-200 rounded-3xl">
                          <p className="text-lg font-bold text-emerald-900">
                            Correct Answer: {String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}
                          </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-indigo-50/30 border border-indigo-50 relative group transition-all hover:bg-indigo-50/50 overflow-hidden">
                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-all group-hover:scale-110">
                            <Info size={120} strokeWidth={1} />
                          </div>
                          <div className="flex gap-8 relative z-10">
                            <div className="w-16 h-16 bg-white rounded-[1.25rem] flex-center shadow-xl shadow-indigo-100 shrink-0 text-indigo-600 border border-white rotate-6">
                              <Info size={32} />
                            </div>
                            <div className="space-y-4">
                              <p className="font-black text-slate-900 text-xl uppercase tracking-tighter">Clinical Rationale</p>
                              <p className="text-slate-600 leading-relaxed text-xl font-medium tracking-tight border-l-4 border-indigo-200 pl-6 py-2">{q.explanation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="glass-panel p-10 sticky top-36 border-white bg-white/80 shadow-2xl shadow-indigo-100/30">
              <h4 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter border-b border-slate-50 pb-6">Phase Control</h4>
              <div className="space-y-4">
                <button
                  onClick={() => navigate(`/quiz/${attempt.exam}`)}
                  className="w-full btn-primary !py-5 font-black text-lg !rounded-2xl"
                >
                  <RotateCcw size={24} className="animate-spin-slow" />
                  Restart Assessment
                </button>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-all border-2 border-slate-50 shadow-sm"
                >
                  <LayoutDashboard size={24} />
                  Terminate Session
                </button>
              </div>

              <div className="mt-12 pt-10 border-t border-slate-50">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">AI Career Insight</p>
                <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                  <Award className="mb-4 opacity-50" size={32} />
                  <p className="text-lg font-black mb-2 tracking-tight">Specialization Path</p>
                  <p className="text-sm font-medium text-indigo-100 leading-relaxed">
                    Analyzing your response patterns... You show high proficiency in Acute Care logic. Consider focusing on Cardiovascular modules.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
