import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Loader2, ChevronLeft, ChevronRight, CheckCircle2, Timer, AlertCircle } from 'lucide-react';

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
          // Shuffle options for each question
          const shuffledQuestions = data.map(q => {
            const originalOptions = [...q.options];
            const shuffledOptions = [...q.options];
            const mapping = [];

            // Fisher-Yates shuffle
            for (let i = shuffledOptions.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
            }

            // Create mapping from shuffled index to original index
            shuffledOptions.forEach((option, idx) => {
              const originalIdx = originalOptions.indexOf(option);
              mapping[idx] = originalIdx;
            });

            // Update correct index to match shuffled position
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

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
        <Loader2 className="text-indigo-600 animate-spin" size={32} />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Loading Quiz</h2>
      <p className="text-slate-600 text-center">Preparing your {exam} assessment...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="text-red-600" size={32} />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Error</h2>
      <p className="text-slate-600 text-center mb-6">{error}</p>
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium"
      >
        Back to Dashboard
      </button>
    </div>
  );

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isTimeLow = timeLeft < 60;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile-first Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to exit? Your progress may be lost.")) {
                navigate('/dashboard');
              }
            }}
            className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            <Timer size={20} className={isTimeLow ? 'text-red-500' : 'text-indigo-600'} />
            <span className={`font-mono text-lg ${isTimeLow ? 'text-red-500' : 'text-slate-900'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        {/* Question */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-6 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = responses[currentIndex] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                    }`}>
                      {isSelected && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <span className="text-base leading-relaxed">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} className="inline mr-2" />
            Previous
          </button>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium"
            >
              Submit Quiz
              <CheckCircle2 size={20} className="inline ml-2" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium"
            >
              Next
              <ChevronRight size={20} className="inline ml-2" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
