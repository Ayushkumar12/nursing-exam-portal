import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Loader2, ChevronLeft, ChevronRight, CheckCircle2, Flag, Timer, Info, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Quiz = () => {
  const { exam } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes default
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await api.get(`/quiz/generate/${exam}`);
        if (!data || data.length === 0) {
          setError("No questions available for this exam yet.");
        } else {
          setQuestions(data);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load questions. Please try again.");
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [exam]);

  useEffect(() => {
    if (loading || questions.length === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [loading, questions]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex) => {
    setResponses({ ...responses, [currentIndex]: optionIndex });
  };

  const handleSubmit = async () => {
    const formattedResponses = Object.keys(responses).map(index => ({
      questionId: questions[index]._id,
      selectedOption: responses[index]
    }));

    try {
      const { data } = await api.post('/quiz/submit', { exam, responses: formattedResponses });
      navigate('/result', { state: { attempt: data, questions } });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return (
    <div className="flex flex-col h-screen items-center justify-center bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl"></div>

      <div className="relative w-32 h-32 mb-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-[6px] border-indigo-100 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-[6px] border-indigo-600 rounded-full border-t-transparent"
        ></motion.div>
        <div className="absolute inset-0 flex-center">
          <Loader2 className="text-indigo-600 animate-pulse" size={40} />
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-3 text-slate-900"
      >
        Initializing Assessment
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 font-medium text-lg"
      >
        Curating specialized {exam} logic for you
      </motion.p>
    </div>
  );

  if (error) return (
    <div className="h-screen flex-center flex-col p-8 text-center bg-slate-50">
      <div className="w-24 h-24 bg-rose-50 text-rose-600 rounded-[2rem] flex-center mb-8 shadow-xl shadow-rose-100 mt-[-5vh]">
        <AlertCircle size={48} />
      </div>
      <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Selection Error</h2>
      <p className="text-slate-500 mb-10 max-w-sm text-lg font-medium">{error}</p>
      <button onClick={() => navigate('/dashboard')} className="btn-primary !px-10 !py-4 shadow-indigo-100">
        Return to Dashboard
      </button>
    </div>
  );

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isTimeLow = timeLeft < 60;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Quiz Header */}
      <header className="h-28 bg-white/70 backdrop-blur-2xl border-b border-slate-100 sticky top-0 z-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (window.confirm("Are you sure you want to exit? Your progress may be lost.")) {
                  navigate('/dashboard');
                }
              }}
              className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm"
            >
              <ChevronLeft size={28} />
            </motion.button>
            <div className="hidden lg:block">
              <h1 className="font-extrabold text-2xl text-slate-900">{exam} Performance Mode</h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                  <CheckCircle2 size={12} fill="currentColor" className="text-white" />
                  Live Assessment
                </span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Board Standard</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-black text-2xl border transition-all ${isTimeLow ? 'bg-rose-50 border-rose-100 text-rose-600 shadow-xl shadow-rose-100' : 'bg-white border-slate-100 text-slate-800 shadow-sm'
              }`}>
              <Timer size={26} className={isTimeLow ? 'animate-bounce' : 'text-indigo-500'} />
              <span className="tabular-nums tracking-tight">{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={handleSubmit}
              className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 shadow-emerald-100 px-8 py-4 hidden md:flex !rounded-2xl font-bold"
            >
              Submit Test
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-10 lg:px-14 mt-16">
        {/* Progress System */}
        <div className="mb-14">
          <div className="flex justify-between items-end mb-6 px-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-indigo-600 tracking-tighter">{(currentIndex + 1).toString().padStart(2, '0')}</span>
              <div className="h-10 w-[2px] bg-slate-200 rounded-full"></div>
              <div>
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Current Phase</span>
                <span className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">Question Segment</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-black text-indigo-600/60 uppercase tracking-widest">{Math.round(progress)}% COMPLETE</span>
            </div>
          </div>
          <div className="h-3 w-full bg-slate-200/50 rounded-full overflow-hidden p-1 border border-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
              style={{ boxShadow: '0 0 15px rgba(79, 70, 229, 0.4)' }}
            ></motion.div>
          </div>
        </div>

        {/* Question Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="glass-panel p-12 md:p-18 border-indigo-50 bg-white shadow-2xl shadow-indigo-100/20">
              <div className="absolute -left-1 top-10 w-2 h-20 bg-indigo-600 rounded-r-full shadow-lg shadow-indigo-200"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-[1.3] mb-14 tracking-tight">
                {currentQ.question}
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {currentQ.options.map((option, idx) => {
                  const isSelected = responses[currentIndex] === idx;
                  return (
                    <motion.button
                      whileHover={{ scale: 1.01, x: 10 }}
                      whileTap={{ scale: 0.99 }}
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`group relative w-full text-left p-8 rounded-3xl border-2 transition-all duration-500 ${isSelected
                        ? 'border-indigo-600 bg-indigo-50/40 shadow-2xl shadow-indigo-100/50'
                        : 'border-slate-50 bg-slate-50/50 hover:border-slate-200 hover:bg-white hover:shadow-xl'
                        }`}
                    >
                      <div className="flex items-center gap-8">
                        <div className={`w-14 h-14 rounded-2xl flex-center shrink-0 border-2 font-black text-xl transition-all duration-500 ${isSelected
                          ? 'bg-indigo-600 border-indigo-600 text-white rotate-6 scale-110 shadow-lg shadow-indigo-200'
                          : 'border-white bg-white text-slate-300 group-hover:border-slate-100 group-hover:text-slate-400 group-hover:rotate-3 shadow-sm'
                          }`}>
                          {String.fromCharCode(64 + (idx + 1))}
                        </div>
                        <span className={`text-2xl transition-all tracking-tight ${isSelected ? 'font-bold text-slate-900' : 'text-slate-600 font-medium'}`}>
                          {option}
                        </span>
                      </div>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-8 top-1/2 -translate-y-1/2 text-indigo-600"
                        >
                          <div className="bg-white rounded-full p-1.5 shadow-md border border-indigo-50">
                            <CheckCircle2 size={32} fill="currentColor" className="text-white" />
                          </div>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-8 pt-6 px-4">
              <motion.button
                whileHover={{ x: -5 }}
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-white border border-slate-100 font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
                Previous Step
              </motion.button>

              <div className="hidden lg:flex items-center gap-3 px-6 py-3 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Keyboard Sync</span>
                <span className="text-[10px] font-bold text-indigo-600 bg-white px-2 py-0.5 rounded shadow-sm border border-indigo-100">UP/DOWN</span>
              </div>

              {currentIndex === questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleSubmit}
                  className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 px-12 py-5 shadow-emerald-200 text-xl font-bold !rounded-[2rem]"
                >
                  Confirm & Finish
                  <CheckCircle2 size={24} />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  className="btn-primary px-12 py-5 shadow-indigo-200 text-xl font-bold !rounded-[2rem]"
                >
                  Next Logic
                  <ChevronRight size={24} />
                </motion.button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-indigo-100/20 flex gap-8 items-start relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-bl-[4rem]"></div>
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex-center shadow-inner shrink-0 text-indigo-600 rotate-6">
            <Info size={32} />
          </div>
          <div className="space-y-3 relative z-10">
            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Clinical Priority Insight</h4>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Maintain clinical focus on <span className="text-indigo-600 font-bold">ABCs (Airway, Breathing, Circulation)</span>. If multiple options address safety, select the one that prevents the most immediate risk to life.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
