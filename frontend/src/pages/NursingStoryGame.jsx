import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
  Alert,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip,
  LinearProgress,
  IconButton,
  Fade,
  Grow,
} from '@mui/material';
import {
  LocalHospital,
  ArrowBack,
  Favorite,
  Timer,
  Assignment,
  HealthAndSafety,
  Mood,
  MoodBad,
} from '@mui/icons-material';

const NursingStoryGame = () => {
  const [gameState, setGameState] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const feedbackRef = useRef(null);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    setLoading(true);
    try {
      const { data } = await api.post('/game/start');
      setGameState(data);
      setHistory([data]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to start the game. Please try again.');
      setLoading(false);
    }
  };

  const handleAction = async (actionText) => {
    if (processing) return;
    setProcessing(true);
    
    // Create history for AI
    const gameHistory = history.map((h, index) => {
      return {
        scenario: h.scenario,
        actionTaken: index === history.length - 1 ? actionText : h.selectedAction
      };
    });

    try {
      const { data } = await api.post('/game/action', {
        history: gameHistory,
        lastAction: actionText,
      });

      // Update the last history item with the action taken
      const updatedHistory = [...history];
      updatedHistory[updatedHistory.length - 1].selectedAction = actionText;
      
      setGameState(data);
      setHistory([...updatedHistory, data]);
      setProcessing(false);
      // Scroll to feedback if it exists
      if (feedbackRef.current) {
        feedbackRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error(err);
      setError('Failed to process action. Please try again.');
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: 'center' }}>
        <CircularProgress size={60} />
        <Typography variant="h5" sx={{ mt: 3 }}>
          Preparing Clinical Scenario...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 10 }}>
        <Alert severity="error" action={
          <Button color="inherit" size="small" onClick={startGame}>
            RETRY
          </Button>
        }>
          {error}
        </Alert>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/dashboard')} sx={{ mt: 2 }}>
          Back to Dashboard
        </Button>
      </Container>
    );
  }

  const { scenario, options, patientStatus, feedback, gameOver, success, vitalSigns } = gameState;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/dashboard')}>
          Exit Game
        </Button>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Nursing Skills Simulation
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip 
            icon={<HealthAndSafety />} 
            label={`Status: ${patientStatus}`} 
            color={
              patientStatus === 'Stable' || patientStatus === 'Improving' 
                ? 'success' 
                : patientStatus === 'Deteriorating' || patientStatus === 'Critical' 
                ? 'error' 
                : 'warning'
            } 
          />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Vital Signs Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ height: '100%', bgcolor: 'background.paper', borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Assignment color="primary" /> Patient Vitals
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">Blood Pressure</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{vitalSigns?.bp || '--/--'}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Heart Rate</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{vitalSigns?.hr || '--'} bpm</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Respiration Rate</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{vitalSigns?.rr || '--'} /min</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">SpO2</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{vitalSigns?.spo2 || '--%'}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">Temperature</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{vitalSigns?.temp || '--'} °F</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Game Area */}
        <Grid size={{ xs: 12, md: 9 }}>
          {/* Step Progress */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                Step {gameState?.step || history.length} of 5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Math.round(((gameState?.step || history.length) / 5) * 100)}% Complete
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={((gameState?.step || history.length) / 5) * 100} 
              sx={{ height: 10, borderRadius: 5, bgcolor: 'rgba(0,0,0,0.05)' }} 
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Feedback from previous action */}
            {feedback && (
              <Fade in={true}>
                <Alert 
                  severity={feedback.toLowerCase().includes('good') || feedback.toLowerCase().includes('correct') ? 'success' : 'info'}
                  sx={{ borderRadius: 3 }}
                  ref={feedbackRef}
                >
                  <Typography variant="body1">{feedback}</Typography>
                </Alert>
              </Fade>
            )}

            {/* Current Scenario */}
            <Grow in={true}>
              <Paper sx={{ p: 4, borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', bgcolor: 'primary.main' }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: '600' }}>
                  Current Scenario
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {scenario}
                </Typography>
              </Paper>
            </Grow>

            {/* Actions */}
            {!gameOver ? (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Timer color="action" /> What should you do next?
                </Typography>
                <Grid container spacing={2}>
                  {options.map((option) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={option.id}>
                      <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        disabled={processing}
                        onClick={() => handleAction(option.text)}
                        sx={{
                          p: 3,
                          height: '100%',
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          borderRadius: 3,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            bgcolor: 'action.hover',
                          },
                          textTransform: 'none',
                          fontSize: '1rem',
                        }}
                      >
                        {option.text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                {processing && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <CircularProgress size={30} />
                    <Typography sx={{ ml: 2 }}>Processing your decision...</Typography>
                  </Box>
                )}
              </Box>
            ) : (
              <Fade in={true}>
                <Paper sx={{ p: 4, borderRadius: 4, textAlign: 'center', bgcolor: success ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)' }}>
                  {success ? (
                    <Mood sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                  ) : (
                    <MoodBad sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
                  )}
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {success ? 'Case Resolved!' : 'Game Over'}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
                    {success 
                      ? 'You successfully handled the clinical situation and ensured patient safety. Great job!' 
                      : 'The patient situation deteriorated or safety protocols were violated. Use this as a learning opportunity.'}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button variant="contained" size="large" onClick={startGame}>
                      Continue with New Scenario
                    </Button>
                    <Button variant="outlined" size="large" onClick={() => navigate('/dashboard')}>
                      End Game & Dashboard
                    </Button>
                  </Box>
                </Paper>
              </Fade>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NursingStoryGame;