import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Volume2 } from 'lucide-react';

// Pentatonische Skala in chinesischer Tradition: Gong, Shang, Jue, Zhi, Yu
const pentatonicNotes = [
  { name: 'Gong (宫)', note: 'C', frequency: 261.63, element: '土 (Erde)', color: 'bg-yellow-500' },
  { name: 'Shang (商)', note: 'D', frequency: 293.66, element: '金 (Metall)', color: 'bg-gray-400' },
  { name: 'Jue (角)', note: 'E', frequency: 329.63, element: '木 (Holz)', color: 'bg-green-500' },
  { name: 'Zhi (徵)', note: 'G', frequency: 392.00, element: '火 (Feuer)', color: 'bg-red-500' },
  { name: 'Yu (羽)', note: 'A', frequency: 440.00, element: '水 (Wasser)', color: 'bg-blue-500' },
];

export function InteractivePentatonic() {
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [playedSequence, setPlayedSequence] = useState<number[]>([]);

  useEffect(() => {
    // Initialize AudioContext
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    setAudioContext(context);

    return () => {
      context.close();
    };
  }, []);

  const playNote = (frequency: number, index: number) => {
    if (!audioContext) return;

    // Create oscillator for tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    // Envelope for more pleasant sound
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);

    setActiveNote(index);
    setPlayedSequence(prev => [...prev, index]);
    
    setTimeout(() => setActiveNote(null), 300);
  };

  const playSequence = async () => {
    for (let i = 0; i < pentatonicNotes.length; i++) {
      playNote(pentatonicNotes[i].frequency, i);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  };

  const clearSequence = () => {
    setPlayedSequence([]);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 5) {
        playNote(pentatonicNotes[num - 1].frequency, num - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [audioContext]);

  return (
    <div className="w-full max-w-4xl space-y-6">
      <Card className="p-8 bg-white shadow-xl">
        <div className="flex gap-4 mb-6 justify-center">
          <Button onClick={playSequence} variant="outline" className="gap-2">
            <Volume2 className="w-4 h-4" />
            Alle Töne abspielen
          </Button>
          <Button onClick={clearSequence} variant="outline">
            Sequenz löschen
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">
          {pentatonicNotes.map((note, index) => (
            <button
              key={index}
              onClick={() => playNote(note.frequency, index)}
              className={`
                relative p-6 rounded-xl transition-all duration-200
                ${note.color} ${activeNote === index ? 'scale-110 shadow-2xl' : 'shadow-lg hover:scale-105'}
                text-white font-bold transform
              `}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{index + 1}</div>
                <div className="text-sm">{note.name}</div>
                <div className="text-xs opacity-80 mt-1">{note.note}</div>
                <div className="text-xs opacity-70 mt-1">{note.element}</div>
              </div>
            </button>
          ))}
        </div>

        {playedSequence.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">Deine Sequenz:</h3>
            <div className="flex flex-wrap gap-2">
              {playedSequence.map((noteIndex, i) => (
                <span
                  key={i}
                  className={`
                    px-3 py-1 rounded ${pentatonicNotes[noteIndex].color} text-white text-sm
                  `}
                >
                  {pentatonicNotes[noteIndex].name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold mb-2">ℹ️ Die 5 Elemente</h3>
          <p className="text-sm">
            Jeder Ton in der chinesischen Pentatonik ist mit einem der fünf Elemente verbunden: 
            Erde, Metall, Holz, Feuer und Wasser. Diese Verbindung zeigt die tiefe philosophische 
            Bedeutung der Musik in der chinesischen Kultur.
          </p>
        </div>
      </Card>

      <div className="text-center text-sm text-gray-500">
        💡 Tipp: Nutze die Tasten 1-5 auf deiner Tastatur zum Spielen!
      </div>
    </div>
  );
}
