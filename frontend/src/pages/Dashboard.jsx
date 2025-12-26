import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import {
  LogOut, LayoutDashboard, BookOpen, History, Target, TrendingUp, Award, Clock, ChevronRight, User as UserIcon, Bell, Search, Stethoscope
} from 'lucide-react';

import { motion } from 'framer-motion';

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const exams = ["ESIC", "RRB", "NORCET", "NHM", "CHO", "UPPSC", "KGMU", "SGPGI", "MNS"];

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await api.get('/quiz/history');
        setHistory(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, []);

  const chartData = history.slice().reverse().map(attempt => ({
    date: new Date(attempt.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    score: Math.round((attempt.score / attempt.totalQuestions) * 100)
  }));

  const stats = [
    { label: 'Total Quizzes', value: history.length, icon: BookOpen, color: 'var(--primary)', bg: 'rgba(79, 70, 229, 0.1)' },
    {
      label: 'Avg Score',
      value: (history.length > 0
        ? (history.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions), 0) / history.length * 100).toFixed(1)
        : 0) + '%',
      icon: Target,
      color: 'var(--accent)',
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
      label: 'Latest Score',
      value: (history.length > 0 ? ((history[0].score / history[0].totalQuestions) * 100).toFixed(1) : 0) + '%',
      icon: Award,
      color: 'var(--rose)',
      bg: 'rgba(244, 63, 94, 0.1)'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-80 bg-white border-r border-slate-200 hidden lg:flex flex-col p-10 sticky top-0 h-screen"
      >
        <div className="flex items-center gap-4 mb-12 px-2">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex-center text-white shadow-xl shadow-blue-100 rotate-3">
            <Stethoscope size={28} />
          </div>
          <div>
            <span className="font-bold text-2xl block tracking-tight text-slate-900">NurseHub</span>
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Premium Portal</span>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          <button className="sidebar-item active">
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button className="sidebar-item">
            <BookOpen size={20} />
            Study Material
          </button>
          <button className="sidebar-item">
            <History size={20} />
            My Performance
          </button>
          <button className="sidebar-item">
            <Award size={20} />
            Certificates
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-100">
          <div className="bg-slate-50 p-5 rounded-3xl flex items-center gap-4 mb-6 border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-white flex-center text-blue-600 shadow-sm border border-slate-100">
              <UserIcon size={22} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-bold text-sm text-slate-800 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="sidebar-item text-rose-600 hover:bg-rose-50 hover:text-rose-700 !rounded-2xl"
          >
            <LogOut size={18} />
            Logout Session
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-x-hidden">
        {/* Top Header */}
        <header className="h-24 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-12 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 lg:hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex-center text-white shadow-lg">
              <Stethoscope size={24} />
            </div>
          </div>

          <div className="relative max-w-lg w-full hidden md:block">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search for subjects, exams..."
              className="w-full bg-slate-50 border-1 border-slate-100 rounded-3xl py-3.5 pl-14 pr-6 focus:ring-4 focus:ring-blue-500/5 transition-all shadow-inner outline-none text-slate-600"
            />
          </div>

          <div className="flex items-center gap-5">
            <button className="w-12 h-12 rounded-2xl flex-center text-slate-500 hover:bg-slate-50 transition-all border border-slate-100 relative group">
              <Bell size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex-center text-blue-600 font-bold border border-blue-100 shadow-sm">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
        </header>

        <motion.div
          className="p-10 lg:p-16 space-y-14 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Welcome Header */}
          <motion.div variants={itemVariants}>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Student Dashboard</span>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{user?.name?.split(' ')[0] || 'User'}</span>!
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl">
              You've already completed {history.length} exams. Your performance is looking great! Ready for your next challenge?
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="glass-panel p-12 flex items-center gap-8 transition-all hover:border-blue-200">
                <div className="w-16 h-16 rounded-2xl flex-center shadow-lg" style={{ background: stat.bg, color: stat.color }}>
                  <stat.icon size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-4xl font-extrabold text-slate-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Analytics and Exams */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* Chart Section */}
            <motion.div variants={itemVariants} className="xl:col-span-2 space-y-12">
              <div className="glass-panel p-10">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Performance Analytics</h3>
                    <p className="text-slate-500">Visualization of your academic growth</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-200">Score Trend</button>
                    <button className="px-5 py-2.5 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold border border-slate-100">Monthly View</button>
                  </div>
                </div>
                <div className="h-[380px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                      <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                        dy={15}
                      />
                      <YAxis
                        domain={[0, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                        dx={-15}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: '24px',
                          border: '1px solid #f1f5f9',
                          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)',
                          padding: '16px 24px'
                        }}
                        itemStyle={{ fontWeight: 'bold', color: '#4f46e5' }}
                        cursor={{ stroke: '#4f46e5', strokeWidth: 2, strokeDasharray: '4 4' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#2563eb"
                        strokeWidth={5}
                        fillOpacity={1}
                        fill="url(#colorScore)"
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Exam Selection */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                    <Award className="text-blue-600" />
                    Available Examinations
                  </h2>
                  <button className="text-sm font-bold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline transition-all">Explore Categories</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6">
                  {exams.map((exam, idx) => (
                    <motion.button
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      key={exam}
                      onClick={() => navigate(`/quiz/${exam}`)}
                      className="glass-card p-8 text-center group bg-white border border-slate-100"
                    >
                      <div className="w-16 h-16 bg-slate-50 rounded-3xl flex-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-100 transition-all duration-500 relative z-10 border border-slate-100">
                        <Stethoscope size={28} />
                      </div>
                      <p className="font-extrabold text-xl text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{exam}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-100">
                        Exam Ready
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* History Sidebar */}
            <motion.div variants={itemVariants} className="h-full">
              <div className="glass-panel h-full flex flex-col min-h-[600px] border-blue-50 bg-white">
                <div className="p-10 border-b border-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Recent Progress</h3>
                    <TrendingUp className="text-blue-500" size={24} />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Activity from your recent attempts</p>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {history.length > 0 ? history.map((attempt, i) => (
                    <motion.div
                      whileHover={{ x: 8 }}
                      key={i}
                      className="flex items-center gap-5 p-5 rounded-3xl border border-slate-50 hover:bg-slate-50/50 hover:border-blue-100 transition-all group cursor-pointer"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex-center font-extrabold text-base shadow-sm ${(attempt.score / attempt.totalQuestions * 100) >= 70
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-rose-50 text-rose-600 border border-rose-100'
                        }`}>
                        {Math.round(attempt.score / attempt.totalQuestions * 100)}%
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-800 mb-1 truncate">{attempt.exam}</p>
                        <p className="text-xs text-slate-400 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                          <Clock size={12} />
                          {new Date(attempt.date).toLocaleDateString()}
                        </p>
                      </div>
                      <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </motion.div>
                  )) : (
                    <div className="h-full flex-center flex-col text-center p-10 space-y-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-full flex-center text-slate-200">
                        <History size={40} />
                      </div>
                      <p className="font-bold text-slate-400 text-lg">No attempts yet.<br /><span className="text-sm font-medium">Your journey starts today!</span></p>
                    </div>
                  )}
                </div>
                {history.length > 0 && (
                  <div className="p-8 bg-slate-50 border-t border-slate-100 mt-auto rounded-b-3xl">
                    <button className="w-full btn-primary !py-4 !text-sm !rounded-2xl shadow-blue-100">
                      View Comprehensive Report
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
