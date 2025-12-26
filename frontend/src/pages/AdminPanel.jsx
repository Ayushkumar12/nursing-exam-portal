import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import AdminNavbar from '../components/AdminNavbar';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, PieChart, Pie, Cell
} from 'recharts';
import {
  Download, Users, BarChart3, ShieldCheck, Search, Activity, ExternalLink, MoreVertical, Target, Award, Zap, Home, FileText, PlusCircle, TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminPanel = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalQuestions: 0,
    totalAttempts: 0,
    averageScore: 0
  });
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    exam: '',
    topic: '',
    question: '',
    options: ['', '', '', ''],
    correct: 0,
    explanation: ''
  });

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const [statsRes, usersRes, questionsRes, attemptsRes] = await Promise.all([
        api.get('/admin/stats'),
        api.get('/admin/users'),
        api.get('/admin/questions'),
        api.get('/admin/attempts')
      ]);

      setStats(statsRes.data);
      setUsers(usersRes.data);
      setQuestions(questionsRes.data);
      setAttempts(attemptsRes.data);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportData = (data, filename) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/questions', newQuestion);
      alert('Question added successfully!');
      setNewQuestion({
        exam: '',
        topic: '',
        question: '',
        options: ['', '', '', ''],
        correct: 0,
        explanation: ''
      });
      fetchAdminData(); // Refresh data
    } catch (error) {
      console.error('Error adding question:', error);
      alert('Failed to add question.');
    }
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const navigationItems = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'questions', name: 'Questions', icon: FileText },
    { id: 'attempts', name: 'Attempts', icon: TrendingUp },
    { id: 'add-question', name: 'Add Question', icon: PlusCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <ShieldCheck className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-semibold text-gray-900">Admin Panel</span>
                </div>
                <nav className="mt-8 flex-1 px-2 space-y-1">
                  {navigationItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left ${
                        activeTab === item.id
                          ? 'bg-indigo-50 border-r-2 border-indigo-600 text-indigo-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon
                        className={`mr-3 h-5 w-5 ${
                          activeTab === item.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          <div className="py-4 sm:py-6">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border border-blue-200 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-full -mr-8 -mt-8 opacity-20"></div>
                    <div className="relative flex items-center">
                      <div className="p-3 bg-blue-500 rounded-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
                        <p className="text-xs text-blue-500 mt-1">Active learners</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg border border-green-200 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-500 rounded-full -mr-8 -mt-8 opacity-20"></div>
                    <div className="relative flex items-center">
                      <div className="p-3 bg-green-500 rounded-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-green-600">Total Questions</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalQuestions}</p>
                        <p className="text-xs text-green-500 mt-1">In database</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg border border-purple-200 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500 rounded-full -mr-8 -mt-8 opacity-20"></div>
                    <div className="relative flex items-center">
                      <div className="p-3 bg-purple-500 rounded-lg">
                        <Activity className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-purple-600">Total Attempts</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalAttempts}</p>
                        <p className="text-xs text-purple-500 mt-1">Quiz attempts</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg border border-yellow-200 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500 rounded-full -mr-8 -mt-8 opacity-20"></div>
                    <div className="relative flex items-center">
                      <div className="p-3 bg-yellow-500 rounded-lg">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-yellow-600">Average Score</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.averageScore}%</p>
                        <p className="text-xs text-yellow-500 mt-1">Performance</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Performance Chart */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-semibold text-gray-900">Performance Trends</h3>
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                          <AreaChart data={attempts.slice(-10)}>
                            <defs>
                              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                              dataKey="date"
                              stroke="#6b7280"
                              fontSize={12}
                              tickLine={false}
                            />
                            <YAxis
                              stroke="#6b7280"
                              fontSize={12}
                              tickLine={false}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="score"
                              stroke="#3B82F6"
                              strokeWidth={3}
                              fill="url(#colorScore)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </motion.div>

                      {/* Activity Distribution */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-semibold text-gray-900">Activity Overview</h3>
                          <Activity className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                            <div className="flex items-center">
                              <Users className="h-8 w-8 text-blue-600 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Active Users</p>
                                <p className="text-xs text-blue-600">Last 7 days</p>
                              </div>
                            </div>
                            <p className="text-2xl font-bold text-blue-600">{users.length}</p>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                            <div className="flex items-center">
                              <Target className="h-8 w-8 text-green-600 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Questions Added</p>
                                <p className="text-xs text-green-600">This month</p>
                              </div>
                            </div>
                            <p className="text-2xl font-bold text-green-600">{questions.length}</p>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                            <div className="flex items-center">
                              <Award className="h-8 w-8 text-purple-600 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Avg. Score</p>
                                <p className="text-xs text-purple-600">All attempts</p>
                              </div>
                            </div>
                            <p className="text-2xl font-bold text-purple-600">{stats.averageScore}%</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Recent Activity */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">Recent Quiz Attempts</h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Live updates
                          </div>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {attempts.slice(-8).map((attempt, index) => (
                          <motion.div
                            key={attempt._id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                  <span className="text-white font-semibold text-sm">
                                    {attempt.userName.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{attempt.userName}</p>
                                  <p className="text-xs text-gray-500">{new Date(attempt.date).toLocaleDateString()}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                  attempt.score >= 80 ? 'bg-green-100 text-green-800' :
                                  attempt.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  <Award className="h-3 w-3 mr-1" />
                                  {attempt.score}%
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{attempt.questionsAnswered} questions</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      {attempts.length === 0 && (
                        <div className="px-6 py-12 text-center">
                          <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500">No quiz attempts yet</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                )}

                {activeTab === 'users' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-6 w-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Users Management</h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-600">
                          Total: <span className="font-semibold text-blue-600">{users.length}</span>
                        </div>
                        <button
                          onClick={() => exportData(users, 'users.json')}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Joined</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {users.map((user, index) => (
                            <motion.tr
                              key={user._id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 * index }}
                              className="hover:bg-gray-50 transition-colors duration-150"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white font-semibold text-sm">
                                      {user.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                    <div className="text-xs text-gray-500">ID: {user._id.slice(-6)}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.email}</div>
                                <div className="text-xs text-gray-500">Verified</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  user.role === 'admin'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {user.role === 'admin' ? (
                                    <ShieldCheck className="h-3 w-3 mr-1" />
                                  ) : (
                                    <Users className="h-3 w-3 mr-1" />
                                  )}
                                  {user.role}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                  Active
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex flex-col">
                                  <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                                  <span className="text-xs text-gray-400">
                                    {new Date(user.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {users.length === 0 && (
                      <div className="px-6 py-12 text-center">
                        <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No users found</p>
                      </div>
                    )}
                  </motion.div>
                )}
                {activeTab === 'questions' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-green-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Questions Database</h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-600">
                          Total: <span className="font-semibold text-green-600">{questions.length}</span>
                        </div>
                        <button
                          onClick={() => exportData(questions, 'questions.json')}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-150"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Question</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Exam Type</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Topic</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Options</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {questions.map((question, index) => (
                            <motion.tr
                              key={question._id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 * index }}
                              className="hover:bg-gray-50 transition-colors duration-150"
                            >
                              <td className="px-6 py-4">
                                <div className="max-w-md">
                                  <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{question.question}</div>
                                  <div className="text-xs text-gray-500">ID: {question._id.slice(-6)}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  <Target className="h-3 w-3 mr-1" />
                                  {question.exam}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                  <FileText className="h-3 w-3 mr-1" />
                                  {question.topic}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-xs font-semibold text-green-600">{question.options.length}</span>
                                  </div>
                                  <span>options</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex flex-col">
                                  <span>{new Date(question.createdAt).toLocaleDateString()}</span>
                                  <span className="text-xs text-gray-400">
                                    {new Date(question.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {questions.length === 0 && (
                      <div className="px-6 py-12 text-center">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No questions found</p>
                        <p className="text-sm text-gray-400 mt-1">Add questions using the "Add Question" tab</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'attempts' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
                      <div className="flex items-center">
                        <TrendingUp className="h-6 w-6 text-purple-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Quiz Attempts</h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-600">
                          Total: <span className="font-semibold text-purple-600">{attempts.length}</span>
                        </div>
                        <button
                          onClick={() => exportData(attempts, 'attempts.json')}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-150"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Performance</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Questions</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time Taken</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {attempts.map((attempt, index) => (
                            <motion.tr
                              key={attempt._id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 * index }}
                              className="hover:bg-gray-50 transition-colors duration-150"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white font-semibold text-sm">
                                      {attempt.userName.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">{attempt.userName}</div>
                                    <div className="text-xs text-gray-500">ID: {attempt._id.slice(-6)}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                    attempt.score >= 80 ? 'bg-green-100 text-green-800' :
                                    attempt.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                  }`}>
                                    <Award className="h-3 w-3 mr-1" />
                                    {attempt.score}%
                                  </div>
                                  <span className="ml-2 text-xs text-gray-500">
                                    {attempt.score >= 80 ? 'Excellent' :
                                     attempt.score >= 60 ? 'Good' : 'Needs Improvement'}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Target className="h-4 w-4 text-blue-500 mr-2" />
                                  <span>{attempt.questionsAnswered} answered</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Activity className="h-4 w-4 text-green-500 mr-2" />
                                  <span>{attempt.timeTaken || 'N/A'}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex flex-col">
                                  <span>{new Date(attempt.date).toLocaleDateString()}</span>
                                  <span className="text-xs text-gray-400">
                                    {new Date(attempt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {attempts.length === 0 && (
                      <div className="px-6 py-12 text-center">
                        <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No quiz attempts yet</p>
                        <p className="text-sm text-gray-400 mt-1">Attempts will appear here once users start taking quizzes</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'add-question' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                      <div className="flex items-center">
                        <PlusCircle className="h-6 w-6 text-orange-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">Add New Question</h3>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <form onSubmit={handleSubmitQuestion} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 flex items-center">
                              <Target className="h-4 w-4 mr-2 text-blue-600" />
                              Exam Type
                            </label>
                            <input
                              type="text"
                              value={newQuestion.exam}
                              onChange={(e) => setNewQuestion({ ...newQuestion, exam: e.target.value })}
                              className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                              placeholder="e.g., ESIC, NORCET"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-green-600" />
                              Topic
                            </label>
                            <input
                              type="text"
                              value={newQuestion.topic}
                              onChange={(e) => setNewQuestion({ ...newQuestion, topic: e.target.value })}
                              className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                              placeholder="e.g., Anatomy, Nursing Fundamentals"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700 flex items-center">
                            <Activity className="h-4 w-4 mr-2 text-purple-600" />
                            Question
                          </label>
                          <textarea
                            value={newQuestion.question}
                            onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                            className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 resize-vertical"
                            rows="4"
                            placeholder="Enter your question here..."
                            required
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="block text-sm font-semibold text-gray-700 flex items-center">
                            <Award className="h-4 w-4 mr-2 text-yellow-600" />
                            Answer Options
                          </label>
                          <div className="space-y-3">
                            {newQuestion.options.map((option, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <input
                                  type="radio"
                                  name="correct"
                                  value={index}
                                  checked={newQuestion.correct === index}
                                  onChange={(e) => setNewQuestion({ ...newQuestion, correct: parseInt(e.target.value) })}
                                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <input
                                  type="text"
                                  value={option}
                                  onChange={(e) => handleOptionChange(index, e.target.value)}
                                  className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                                  placeholder={`Option ${index + 1}`}
                                  required
                                />
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                  newQuestion.correct === index
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {newQuestion.correct === index ? 'Correct' : 'Option'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700 flex items-center">
                            <Zap className="h-4 w-4 mr-2 text-indigo-600" />
                            Explanation
                          </label>
                          <textarea
                            value={newQuestion.explanation}
                            onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                            className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-vertical"
                            rows="4"
                            placeholder="Provide a detailed explanation for the correct answer..."
                            required
                          />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-3 space-y-3 sm:space-y-0 pt-6 border-t border-gray-200">
                          <button
                            type="button"
                            onClick={() => setNewQuestion({
                              exam: '',
                              topic: '',
                              question: '',
                              options: ['', '', '', ''],
                              correct: 0,
                              explanation: ''
                            })}
                            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                          >
                            Clear Form
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
                          >
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Question
                          </button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
