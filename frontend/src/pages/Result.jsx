import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
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
  Divider,
  Grid,
  Paper,
  Avatar,
  Alert,
  Fade,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Stack,
} from '@mui/material';
import {
  Dashboard,
  CheckCircle,
  Cancel,
  Info,
  Replay,
  EmojiEvents,
  Star,
  ExpandMore,
  ArrowBack,
  Download,
  Share,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { blue, green, amber, red, grey } from '@mui/material/colors';

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
    error: {
      main: red[600],
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

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            p: 4,
          }}
        >
          <Card sx={{ p: 6, textAlign: 'center', maxWidth: 400 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80, mx: 'auto', mb: 3 }}>
              <Info />
            </Avatar>
            <Typography variant="h4" gutterBottom>
              No Results Found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              It seems you haven't completed a test recently. Redirecting you to safety.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/dashboard')}
              startIcon={<ArrowBack />}
            >
              Return to Dashboard
            </Button>
          </Card>
        </Box>
      </ThemeProvider>
    );
  }

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
      color: amber[600],
      bgColor: amber[50],
    };
    if (percentage >= 70) return {
      title: "Board Ready!",
      sub: "Solid performance. You are consistently scoring above the required benchmarks.",
      icon: EmojiEvents,
      color: blue[600],
      bgColor: blue[50],
    };
    if (percentage >= 50) return {
      title: "Passing Mark",
      sub: "Threshold achieved, but clinical precision requires more focused study sessions.",
      icon: CheckCircle,
      color: green[600],
      bgColor: green[50],
    };
    return {
      title: "In Review",
      sub: "Don't be discouraged. Professional growth is iterative. Review your rationales below.",
      icon: Replay,
      color: red[600],
      bgColor: red[50],
    };
  };

  const message = getPerformanceMessage();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Header */}
        <AppBar position="static" elevation={1} sx={{ bgcolor: 'white', color: 'text.primary' }}>
          <Toolbar>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate('/dashboard')}
              sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.75rem' }}
            >
              Dashboard Exit
            </Button>
            <Box sx={{ flex: 1 }} />
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Download />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} lg={8}>
              {/* Score Card */}
              <Fade in={true} timeout={1000}>
                <Card sx={{ p: { xs: 2, sm: 4 }, mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 2, md: 4 } }}>
                  <Box sx={{ width: { xs: 250, sm: 300 }, height: { xs: 250, sm: 300 }, position: 'relative' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={10}
                          dataKey="value"
                          startAngle={90}
                          endAngle={450}
                          stroke="none"
                        >
                          <Cell fill={percentage >= 50 ? blue[600] : red[600]} />
                          <Cell fill={grey[200]} />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '3rem' } }}>
                        {Math.round(percentage)}%
                      </Typography>
                      <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Precision
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Chip
                      icon={<message.icon />}
                      label={message.title}
                      sx={{
                        bgcolor: message.bgColor,
                        color: message.color,
                        mb: 3,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                      }}
                    />
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}>
                      Knowledge <span style={{ color: blue[600] }}>Verification</span> Complete
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                      {message.sub}
                    </Typography>

                    <Stack direction="row" spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                      <Paper sx={{ p: 2, textAlign: 'center', minWidth: 100 }}>
                        <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'text.secondary' }}>
                          Correct
                        </Typography>
                        <Typography variant="h4" sx={{ color: green[600], fontWeight: 'bold' }}>
                          {attempt.score}
                        </Typography>
                      </Paper>
                      <Paper sx={{ p: 2, textAlign: 'center', minWidth: 100 }}>
                        <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'text.secondary' }}>
                          Incorrect
                        </Typography>
                        <Typography variant="h4" sx={{ color: red[600], fontWeight: 'bold' }}>
                          {attempt.totalQuestions - attempt.score}
                        </Typography>
                      </Paper>
                    </Stack>
                  </Box>
                </Card>
              </Fade>

              {/* Question Analysis */}
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Rationale Analysis
              </Typography>

              {questions.map((q, idx) => {
                const resp = attempt.responses.find(r => r.questionId === q._id);
                const isCorrect = resp?.isCorrect;

                return (
                  <Accordion key={idx} sx={{ mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: isCorrect ? green[600] : red[600] }}>
                          {idx + 1}
                        </Avatar>
                        <Box>
                          <Chip
                            label={isCorrect ? "Valid Entry" : "Logic Failure"}
                            size="small"
                            sx={{
                              bgcolor: isCorrect ? green[50] : red[50],
                              color: isCorrect ? green[700] : red[700],
                              mr: 1,
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            Critical Question
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>
                            {q.question}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2} sx={{ mb: 3 }}>
                        {q.options.map((opt, i) => {
                          const isOptionCorrect = i === q.correct;
                          const isOptionSelected = i === resp?.selectedOption;

                          return (
                            <Grid item xs={12} sm={6} key={i}>
                              <Paper
                                sx={{
                                  p: 2,
                                  border: 2,
                                  borderColor: isOptionCorrect ? green[200] : isOptionSelected ? red[200] : grey[200],
                                  bgcolor: isOptionCorrect ? green[50] : isOptionSelected ? red[50] : grey[50],
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 2,
                                }}
                              >
                                <Avatar
                                  sx={{
                                    bgcolor: isOptionCorrect ? green[600] : isOptionSelected ? red[600] : grey[400],
                                    width: 32,
                                    height: 32,
                                  }}
                                >
                                  {String.fromCharCode(65 + i)}
                                </Avatar>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                  {opt}
                                </Typography>
                                {isOptionCorrect && <CheckCircle color="success" />}
                                {isOptionSelected && !isCorrect && <Cancel color="error" />}
                              </Paper>
                            </Grid>
                          );
                        })}
                      </Grid>

                      <Alert severity="success" sx={{ mb: 3 }}>
                        <Typography variant="body1">
                          <strong>Correct Answer:</strong> {String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}
                        </Typography>
                      </Alert>

                      <Paper sx={{ p: 3, bgcolor: blue[50], border: 1, borderColor: blue[200] }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Avatar sx={{ bgcolor: blue[600] }}>
                            <Info />
                          </Avatar>
                          <Box>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                              Clinical Rationale
                            </Typography>
                            <Typography variant="body1">
                              {q.explanation}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} lg={4}>
              <Card sx={{ p: 3, position: 'sticky', top: 20 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Phase Control
                </Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Replay />}
                    onClick={() => navigate(`/quiz/${attempt.exam}`)}
                  >
                    Restart Assessment
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Dashboard />}
                    onClick={() => navigate('/dashboard')}
                  >
                    Terminate Session
                  </Button>
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography variant="caption" sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'text.secondary', mb: 2, display: 'block' }}>
                  AI Career Insight
                </Typography>
                <Paper sx={{ p: 3, bgcolor: `linear-gradient(135deg, ${blue[600]}, ${blue[800]})`, color: 'white' }}>
                  <EmojiEvents sx={{ mb: 2, opacity: 0.8 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Specialization Path
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Analyzing your response patterns... You show high proficiency in Acute Care logic. Consider focusing on Cardiovascular modules.
                  </Typography>
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Result;
