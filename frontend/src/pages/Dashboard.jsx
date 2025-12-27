import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  ThemeProvider,
  createTheme,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Chip,
  AppBar,
  Toolbar,
  Avatar,
  Grid,
  Paper,
  InputBase,
  Badge,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Logout,
  Dashboard as DashboardIcon,
  MenuBook,
  History,
  TrackChanges,
  TrendingUp,
  EmojiEvents,
  AccessTime,
  ChevronRight,
  Person,
  Notifications,
  Search,
  LocalHospital,
  Menu,
  Close,
} from '@mui/icons-material';
import { blue, green, amber, purple, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: green[600],
    },
    warning: {
      main: amber[600],
    },
    background: {
      default: grey[50],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});



const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const exams = ["ESIC", "RRB", "NORCET", "NHM", "CHO", "UPPSC", "KGMU", "SGPGI", "MNS"];

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await api.get('/quiz/history');
        setHistory(data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          logout();
          navigate('/login');
        } else {
          console.error(err);
          setError('Failed to load quiz history. Please try again later.');
        }
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
    {
      label: 'Total Quizzes',
      value: history.length,
      icon: MenuBook,
      color: blue[600],
    },
    {
      label: 'Avg Score',
      value: (history.length > 0
        ? (history.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions), 0) / history.length * 100).toFixed(1)
        : 0) + '%',
      icon: TrackChanges,
      color: green[600],
    },
    {
      label: 'Latest Score',
      value: (history.length > 0 ? ((history[0].score / history[0].totalQuestions) * 100).toFixed(1) : 0) + '%',
      icon: EmojiEvents,
      color: amber[600],
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Header */}
        <AppBar position="sticky" elevation={1} sx={{ bgcolor: 'white', color: 'text.primary' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 4 }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <LocalHospital />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  NurseHub
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', display: { xs: 'none', sm: 'block' } }}>
                  Premium Portal
                </Typography>
            </Box>
          </Box>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, mr: 2 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Close /> : <Menu />}
          </IconButton>

            <Tabs
              value={activeTab}
              onChange={(event, newValue) => setActiveTab(newValue)}
              sx={{
                flex: 1,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  minHeight: 48,
                  fontWeight: 500,
                },
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Tab icon={<DashboardIcon />} label="Dashboard" />
              <Tab icon={<MenuBook />} label="Study Material" />
              <Tab icon={<History />} label="My Performance" />
              <Tab icon={<EmojiEvents />} label="Certificates" />
            </Tabs>

            <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 400,
                  borderRadius: 3,
                  bgcolor: 'grey.50',
                }}
              >
                <IconButton sx={{ p: '10px' }}>
                  <Search />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for subjects, exams..."
                />
              </Paper>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <Badge badgeContent={3} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {user?.name?.charAt(0) || 'U'}
              </Avatar>
              <Button
                variant="outlined"
                color="error"
                startIcon={<Logout />}
                onClick={handleLogout}
                sx={{ ml: 2, display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <Box
            sx={{
              position: 'absolute',
              top: 64,
              left: 0,
              right: 0,
              bgcolor: 'white',
              boxShadow: 3,
              zIndex: 1000,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Button
                fullWidth
                startIcon={<DashboardIcon />}
                onClick={() => { setActiveTab(0); setMobileMenuOpen(false); }}
                sx={{ justifyContent: 'flex-start', mb: 1 }}
              >
                Dashboard
              </Button>
              <Button
                fullWidth
                startIcon={<MenuBook />}
                onClick={() => { setActiveTab(1); setMobileMenuOpen(false); }}
                sx={{ justifyContent: 'flex-start', mb: 1 }}
              >
                Study Material
              </Button>
              <Button
                fullWidth
                startIcon={<History />}
                onClick={() => { setActiveTab(2); setMobileMenuOpen(false); }}
                sx={{ justifyContent: 'flex-start', mb: 1 }}
              >
                My Performance
              </Button>
              <Button
                fullWidth
                startIcon={<EmojiEvents />}
                onClick={() => { setActiveTab(3); setMobileMenuOpen(false); }}
                sx={{ justifyContent: 'flex-start', mb: 1 }}
              >
                Certificates
              </Button>
              <Button
                fullWidth
                startIcon={<Logout />}
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                sx={{ justifyContent: 'flex-start', mb: 1, color: 'error.main' }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        )}

          {/* Content */}
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <Fade in={true} timeout={1000}>
              <Box>
                {/* Welcome Section */}
                <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: { xs: 'center', md: 'left' }, px: { xs: 2, md: 0 } }}>
                  <Chip label="Student Dashboard" color="primary" variant="outlined" sx={{ mb: 2 }} />
                  <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}>
                    Welcome back, {user?.name?.split(' ')[0] || 'User'}!
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1.1rem', md: '1.25rem' }, maxWidth: { xs: '100%', md: '80%' } }}>
                    You've completed {history.length} exams. Your performance is looking great!
                  </Typography>
                </Box>

                {/* Stats Grid */}
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 6 }}>
                  {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card
                        sx={{
                          p: { xs: 2, md: 3 },
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 2, md: 3 },
                          transition: 'transform 0.2s',
                          '&:hover': { transform: 'translateY(-4px)' },
                        }}
                      >
                        <Avatar sx={{ bgcolor: stat.color, width: { xs: 48, md: 56 }, height: { xs: 48, md: 56 } }}>
                          <stat.icon fontSize={isMobile ? "small" : "medium"} />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
                            {stat.label}
                          </Typography>
                          <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 0.5, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                            {stat.value}
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* Analytics and Quick Actions */}
                <Grid container spacing={{ xs: 3, md: 4 }}>
                  <Grid item xs={12} lg={8}>
                    {/* Performance Chart */}
                    <Card sx={{ p: { xs: 2, md: 3 }, mb: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 3 }}>
                        <Box>
                          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Performance Analytics
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            Track your academic growth over time
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, width: { xs: '100%', sm: 'auto' } }}>
                          <Button variant="contained" size="small" fullWidth={isMobile}>
                            Score Trend
                          </Button>
                          <Button variant="outlined" size="small" fullWidth={isMobile}>
                            Time Trend
                          </Button>
                        </Box>
                      </Box>
                      <Box sx={{ height: { xs: 250, sm: 300 }, minWidth: 0, minHeight: 0 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                            <YAxis stroke="#64748b" fontSize={12} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="score"
                              stroke={blue[600]}
                              strokeWidth={3}
                              dot={{ fill: blue[600], strokeWidth: 2, r: 6 }}
                              activeDot={{ r: 8, stroke: blue[600], strokeWidth: 2, fill: 'white' }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </Box>
                    </Card>

                    {/* Quick Actions */}
                    <Card sx={{ p: { xs: 2, md: 3 } }}>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Quick Actions
                      </Typography>
                      <Grid container spacing={2}>
                        {exams.map((exam, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                              <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => navigate(`/quiz/${exam}`)}
                                sx={{
                                  p: { xs: 2, md: 3 },
                                  justifyContent: 'flex-start',
                                  borderRadius: 2,
                                  textTransform: 'none',
                                  '&:hover': { bgcolor: 'primary.light', color: 'white' },
                                }}
                                startIcon={
                                  <Avatar sx={{ bgcolor: 'primary.main', width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 } }}>
                                    {exam.charAt(0)}
                                  </Avatar>
                                }
                              >
                                <Box sx={{ textAlign: 'left' }}>
                                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                    {exam}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                    Start Practice
                                  </Typography>
                                </Box>
                              </Button>
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={() => navigate(`/game-quiz/${exam}`)}
                                sx={{
                                  p: { xs: 1.5, md: 2.5 },
                                  justifyContent: 'flex-start',
                                  borderRadius: 2,
                                  textTransform: 'none',
                                  bgcolor: 'secondary.main',
                                  '&:hover': { bgcolor: 'secondary.dark' },
                                }}
                                startIcon={
                                  <Avatar sx={{ bgcolor: 'secondary.dark', width: { xs: 28, md: 36 }, height: { xs: 28, md: 36 } }}>
                                    <EmojiEvents fontSize="small" />
                                  </Avatar>
                                }
                              >
                                <Box sx={{ textAlign: 'left' }}>
                                  <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                    Game Mode
                                  </Typography>
                                  <Typography variant="caption" color="rgba(255,255,255,0.8)" sx={{ fontSize: { xs: '0.6rem', md: '0.7rem' } }}>
                                    Fun & Points
                                  </Typography>
                                </Box>
                              </Button>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Card>
                  </Grid>

                  {/* Sidebar Content Placeholder */}
                  <Grid item xs={12} lg={4}>
                    <Card sx={{ p: { xs: 2, md: 3 } }}>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Recent Activity
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                        Your recent quiz attempts and achievements will appear here.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Container>
        </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
