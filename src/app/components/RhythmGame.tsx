import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Play, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface RhythmPattern {
  name: string;
  pattern: number[]; // 1 = beat, 0 = pause (in 8th notes)
  description: string;
}

const rhythmPatterns: RhythmPattern[] = [
  {
    name: 'Einfach',
    pattern: [1, 0, 1, 0, 1, 0, 1, 0],
    description: 'Gleichmäßiger 4/4 Takt'
  },
  {
    name: 'Synkopiert',
    pattern: [1, 0, 0, 1, 0, 1, 0, 0],
    description: 'Traditioneller chinesischer Rhythmus'
  },
  {
    name: 'Komplex',
    pattern: [1, 1, 0, 1, 0, 0, 1, 0],
    description: 'Schneller Trommelrhythmus'
  }
];

export function RhythmGame() {
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(-1);
  const [userClaps, setUserClaps] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    setAudioContext(context);

    return () => {
      context.close();
    };
  }, []);

  const playDrumSound = (pitch: number = 200) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = pitch;
    oscillator.type = 'triangle';
    filter.type = 'lowpass';
    filter.frequency.value = 500;

    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const playPattern = async () => {
    const pattern = rhythmPatterns[selectedPattern].pattern;
    setIsPlaying(true);
    setCurrentBeat(-1);

    for (let i = 0; i < pattern.length; i++) {
      setCurrentBeat(i);
      if (pattern[i] === 1) {
        playDrumSound(200);
      }
      await new Promise(resolve => setTimeout(resolve, 400));
    }

    setCurrentBeat(-1);
    setIsPlaying(false);
  };

  const startRecording = () => {
    setUserClaps([]);
    setScore(null);
    setIsRecording(true);
    
    setTimeout(() => {
      setIsRecording(false);
      calculateScore();
    }, rhythmPatterns[selectedPattern].pattern.length * 400);
  };

  const handleClap = () => {
    if (!isRecording) return;
    
    const currentTime = Date.now();
    setUserClaps(prev => [...prev, currentTime]);
    playDrumSound(300);
  };

  const calculateScore = () => {
    const pattern = rhythmPatterns[selectedPattern].pattern;
    const expectedClaps = pattern.filter(b => b === 1).length;
    const actualClaps = userClaps.length;
    
    // Simple scoring based on number of claps
    const accuracy = Math.max(0, 100 - Math.abs(expectedClaps - actualClaps) * 20);
    setScore(Math.round(accuracy));
  };

  const reset = () => {
    setUserClaps([]);
    setScore(null);
    setIsRecording(false);
    setCurrentBeat(-1);
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      <Card className="p-8 bg-white shadow-xl">
        {/* Pattern Selection */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3">Wähle einen Rhythmus:</h3>
          <div className="grid grid-cols-3 gap-4">
            {rhythmPatterns.map((pattern, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedPattern(index);
                  reset();
                }}
                className={`
                  p-4 rounded-lg border-2 transition-all
                  ${selectedPattern === index 
                    ? 'border-red-600 bg-red-50 shadow-lg' 
                    : 'border-gray-200 hover:border-red-300'
                  }
                `}
              >
                <div className="font-bold text-lg mb-1">{pattern.name}</div>
                <div className="text-sm text-gray-600">{pattern.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Pattern Display */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-3">Rhythmusmuster:</h3>
          <div className="flex gap-2 justify-center">
            {rhythmPatterns[selectedPattern].pattern.map((beat, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: currentBeat === index ? 1.3 : 1,
                  backgroundColor: currentBeat === index 
                    ? (beat === 1 ? '#dc2626' : '#6b7280')
                    : (beat === 1 ? '#ef4444' : '#d1d5db')
                }}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${beat === 1 ? 'bg-red-500' : 'bg-gray-300'}
                  transition-all
                `}
              >
                <span className="text-white font-bold">
                  {beat === 1 ? '🥁' : '·'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center mb-6">
          <Button
            onClick={playPattern}
            disabled={isPlaying || isRecording}
            className="gap-2"
          >
            <Play className="w-4 h-4" />
            Rhythmus vorspielen
          </Button>
          
          <Button
            onClick={startRecording}
            disabled={isPlaying || isRecording}
            variant="outline"
            className="gap-2"
          >
            {isRecording ? '🎤 Aufnahme läuft...' : '🎤 Jetzt nachklatschen!'}
          </Button>

          <Button
            onClick={reset}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Zurücksetzen
          </Button>
        </div>

        {/* Clap Button */}
        {isRecording && (
          <div className="flex justify-center mb-6">
            <motion.button
              onClick={handleClap}
              whileTap={{ scale: 0.9 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 
                       shadow-2xl hover:shadow-3xl transition-shadow
                       flex items-center justify-center text-5xl"
            >
              👏
            </motion.button>
          </div>
        )}

        {/* Score Display */}
        {score !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`
              p-6 rounded-lg text-center
              ${score >= 80 ? 'bg-green-100 border-2 border-green-500' :
                score >= 50 ? 'bg-yellow-100 border-2 border-yellow-500' :
                'bg-red-100 border-2 border-red-500'
              }
            `}
          >
            <div className="text-4xl font-bold mb-2">
              {score >= 80 ? '🎉' : score >= 50 ? '👍' : '💪'} {score}%
            </div>
            <div className="text-lg">
              {score >= 80 ? 'Ausgezeichnet! Du hast den Rhythmus perfekt getroffen!' :
               score >= 50 ? 'Gut gemacht! Versuch es nochmal für ein besseres Ergebnis.' :
               'Weiter üben! Hör dir den Rhythmus nochmal an.'}
            </div>
          </motion.div>
        )}

        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h3 className="font-bold mb-2">🎵 Wusstest du?</h3>
          <p className="text-sm">
            In der traditionellen chinesischen Musik werden oft ungewöhnliche Rhythmen verwendet, 
            die von der Natur inspiriert sind - wie fließendes Wasser oder fallende Bambusblätter.
          </p>
        </div>
      </Card>
    </div>
  );
}
