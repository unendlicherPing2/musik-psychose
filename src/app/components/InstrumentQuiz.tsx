import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: 'Wie viele Töne hat die traditionelle chinesische Pentatonik?',
    options: ['3 Töne', '5 Töne', '7 Töne', '12 Töne'],
    correctAnswer: 1,
    explanation: 'Die Pentatonik basiert auf 5 Tönen: Gong, Shang, Jue, Zhi und Yu - jeweils verbunden mit einem Element.'
  },
  {
    question: 'Welches Instrument wird als "chinesische Violine" bezeichnet?',
    options: ['Guzheng', 'Erhu', 'Pipa', 'Dizi'],
    correctAnswer: 1,
    explanation: 'Das Erhu ist eine zweisaitige Streichgeige mit einem sehr emotionalen Klang, ähnlich der menschlichen Stimme.'
  },
  {
    question: 'Aus welchem Material besteht die Dizi-Flöte traditionell?',
    options: ['Metall', 'Holz', 'Bambus', 'Ton'],
    correctAnswer: 2,
    explanation: 'Die Dizi wird aus Bambus hergestellt und hat eine spezielle Membran, die ihren einzigartigen Klang erzeugt.'
  },
  {
    question: 'Welches Prinzip ist zentral in der chinesischen Musikphilosophie?',
    options: ['Lautstärke', 'Geschwindigkeit', 'Harmonie & Balance', 'Komplexität'],
    correctAnswer: 2,
    explanation: 'Die chinesische Musik folgt dem Prinzip der Harmonie zwischen Himmel, Erde und Mensch sowie Yin und Yang.'
  },
  {
    question: 'Wie viele Saiten hat das Guzheng normalerweise?',
    options: ['12 Saiten', '16 Saiten', '21 Saiten', '30 Saiten'],
    correctAnswer: 2,
    explanation: 'Das moderne Guzheng hat typischerweise 21 Saiten, obwohl es historisch unterschiedliche Varianten gab.'
  },
  {
    question: 'Welches Element wird mit dem Ton "Yu (羽)" verbunden?',
    options: ['Feuer', 'Wasser', 'Erde', 'Metall'],
    correctAnswer: 1,
    explanation: 'Yu ist mit dem Element Wasser verbunden und repräsentiert Fluidität und Anpassungsfähigkeit.'
  }
];

export function InstrumentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent>
            <div className="text-center space-y-6">
              <div className="text-6xl">
                {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
              </div>
              
              <h2 className="text-3xl font-bold">Quiz abgeschlossen!</h2>
              
              <div className="text-5xl font-bold text-red-600">
                {score} / {questions.length}
              </div>
              
              <div className="text-xl">
                {percentage >= 80 && 'Hervorragend! Du bist ein Experte für chinesische Musik!'}
                {percentage >= 60 && percentage < 80 && 'Gut gemacht! Du hast viel gelernt!'}
                {percentage < 60 && 'Weiter üben! Es gibt noch viel zu entdecken!'}
              </div>

              <div className="flex gap-4 justify-center mt-8">
                <Button onClick={resetQuiz} size="lg" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Nochmal versuchen
                </Button>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg text-left">
                <h3 className="font-bold mb-4 text-lg">📊 Deine Antworten:</h3>
                <div className="space-y-2">
                  {questions.map((q, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-gray-600">Frage {index + 1}:</span>
                      <span className="flex-1">{q.question}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Frage {currentQuestion + 1} von {questions.length}</span>
        <span>Punkte: {score}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-red-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card className="p-8 bg-white shadow-xl">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption = index === question.correctAnswer;
                  
                  let buttonStyle = 'border-gray-300 hover:border-red-400 hover:bg-red-50';
                  
                  if (showResult) {
                    if (isCorrectOption) {
                      buttonStyle = 'border-green-500 bg-green-50';
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = 'border-red-500 bg-red-50';
                    }
                  } else if (isSelected) {
                    buttonStyle = 'border-red-500 bg-red-50';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      className={`
                        w-full p-4 rounded-lg border-2 text-left transition-all
                        ${buttonStyle}
                        ${showResult ? 'cursor-default' : 'cursor-pointer'}
                        flex items-center gap-3
                      `}
                    >
                      <div className="flex-1">{option}</div>
                      {showResult && isCorrectOption && (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`
                    p-4 rounded-lg
                    ${isCorrect ? 'bg-green-100 border-2 border-green-500' : 'bg-blue-100 border-2 border-blue-500'}
                  `}
                >
                  <div className="flex items-start gap-2">
                    <div className="text-2xl">
                      {isCorrect ? '✅' : 'ℹ️'}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold mb-1">
                        {isCorrect ? 'Richtig!' : 'Nicht ganz...'}
                      </div>
                      <div className="text-sm">
                        {question.explanation}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {showResult && (
                <div className="flex justify-end">
                  <Button onClick={nextQuestion} size="lg">
                    {currentQuestion < questions.length - 1 ? 'Nächste Frage' : 'Ergebnis anzeigen'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
