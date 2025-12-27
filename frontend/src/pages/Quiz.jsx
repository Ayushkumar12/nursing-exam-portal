import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import {
  ThemeProvider,
  createTheme,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Box,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  Paper,
  Grid,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  CheckCircle,
  Timer,
  Error,
  Psychology,
  TrendingUp,
  PlayArrow,
  Pause,
  Close,
} from '@mui/icons-material';
import { green, blue, red, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: green[600],
    },
    error: {
      main: red[600],
    },
    warning: {
      main: orange[600],
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

const Quiz = () => {
  const { exam } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(3000);
  const [error, setError] = useState(null);
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await api.get(`/quiz/generate/${exam}`);
        if (!data || data.length === 0) {
          setError("No questions available for this exam yet.");
        } else {
          const shuffledQuestions = data.map(q => {
            const originalOptions = [...q.options];
            const shuffledOptions = [...q.options];
            const mapping = [];

            for (let i = shuffledOptions.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
            }

            shuffledOptions.forEach((option, idx) => {
              const originalIdx = originalOptions.indexOf(option);
              mapping[idx] = originalIdx;
            });

            const newCorrect = mapping.indexOf(q.correct);

            return {
              ...q,
              options: shuffledOptions,
              correct: newCorrect,
              mapping
            };
          });

          setQuestions(shuffledQuestions);
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
      selectedOption: questions[index].mapping[responses[index]]
    }));

    try {
      const { data } = await api.post('/quiz/submit', { exam, responses: formattedResponses });
      navigate('/result', { state: { attempt: data, questions } });
    } catch (err) {
      console.error(err);
    }
  };

  const handleExitClick = () => {
    setExitDialogOpen(true);
  };

  const handleExitConfirm = () => {
    setExitDialogOpen(false);
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
            p: 3,
          }}
        >
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Psychology sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />
              <Typography variant="h4" gutterBottom>
                Preparing Your Quiz
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Loading {exam} assessment questions...
              </Typography>
              <CircularProgress size={60} thickness={4} />
            </Box>
          </Fade>
        </Box>
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
            p: 3,
          }}
        >
          <Alert severity="error" sx={{ mb: 3, maxWidth: 400 }}>
            <Typography variant="h6" gutterBottom>
              Error Loading Quiz
            </Typography>
            <Typography variant="body2">{error}</Typography>
          </Alert>
          <Button variant="contained" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </Box>
      </ThemeProvider>
    );
  }

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isTimeLow = timeLeft < 60;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
        {/* Header */}
        <Paper
          elevation={2}
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            borderRadius: 0,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ py: { xs: 1, sm: 2 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 1, sm: 2 } }}>
                <IconButton
                  onClick={handleExitClick}
                  sx={{
                    bgcolor: 'grey.100',
                    '&:hover': { bgcolor: 'grey.200' },
                    p: { xs: 0.5, sm: 1 }
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <Chip
                  icon={<Timer />}
                  label={formatTime(timeLeft)}
                  color={isTimeLow ? 'error' : 'primary'}
                  variant="outlined"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1.1rem' },
                    px: { xs: 1, sm: 2 },
                    py: 1,
                  }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Question {currentIndex + 1} of {questions.length}
                  </Typography>
                  <Typography variant="body2" color="primary" fontWeight="bold">
                    {Math.round(progress)}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: 'primary.main',
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Paper>

        {/* Main Content */}
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Fade in={true} timeout={500}>
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      borderRadius: 2,
                    }}
                  >
                    {currentIndex + 1}
                  </Paper>
                  <Typography variant="h5" component="h2" sx={{ flex: 1, fontWeight: 600, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                    {currentQ.question}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {currentQ.options.map((option, idx) => {
                    const isSelected = responses[currentIndex] === idx;
                    const optionLetters = ['A', 'B', 'C', 'D'];

                    return (
                      <Button
                        key={idx}
                        variant={isSelected ? 'contained' : 'outlined'}
                        onClick={() => handleOptionSelect(idx)}
                        sx={{
                          justifyContent: 'flex-start',
                          p: { xs: 2, sm: 3 },
                          textAlign: 'left',
                          borderRadius: 3,
                          textTransform: 'none',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          fontWeight: 500,
                          minHeight: 60,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 3,
                          },
                          transition: 'all 0.2s ease-in-out',
                        }}
                        startIcon={
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: isSelected ? 'white' : 'transparent',
                              color: isSelected ? 'primary.main' : 'text.secondary',
                              fontWeight: 'bold',
                              fontSize: '0.9rem',
                              border: isSelected ? 0 : 1,
                              borderColor: 'divider',
                            }}
                          >
                            {isSelected ? <CheckCircle /> : optionLetters[idx]}
                          </Box>
                        }
                      >
                        {option}
                      </Button>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </Fade>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
              startIcon={<ArrowBack />}
              sx={{ flex: 1, py: 2 }}
            >
              Previous
            </Button>

            {currentIndex === questions.length - 1 ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                endIcon={<CheckCircle />}
                sx={{ flex: 1, py: 2 }}
              >
                Submit Quiz
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => setCurrentIndex(currentIndex + 1)}
                endIcon={<ArrowForward />}
                sx={{ flex: 1, py: 2 }}
              >
                Next
              </Button>
            )}
          </Box>
        </Container>

        {/* Exit Confirmation Dialog */}
        <Dialog open={exitDialogOpen} onClose={() => setExitDialogOpen(false)}>
          <DialogTitle>Exit Quiz?</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to exit? Your progress may be lost.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setExitDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleExitConfirm} color="error">
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default Quiz;
