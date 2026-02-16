import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Play, Pause, RotateCcw, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface StudentRole {
  id: number;
  name: string;
  notes: number[];
  color: string;
  instrument: string;
}

const studentRoles: StudentRole[] = [
  { id: 1, name: 'Schüler 1-2', notes: [0], color: 'bg-yellow-500', instrument: 'Gong (宫) - Bass/Grundton' },
  { id: 2, name: 'Schüler 3-4', notes: [1], color: 'bg-gray-400', instrument: 'Shang (商) - Melodie tief' },
  { id: 3, name: 'Schüler 5-6', notes: [2], color: 'bg-green-500', instrument: 'Jue (角) - Melodie mittel' },
  { id: 4, name: 'Schüler 7-8', notes: [3], color: 'bg-red-500', instrument: 'Zhi (徵) - Melodie hoch' },
  { id: 5, name: 'Schüler 9-10', notes: [4], color: 'bg-blue-500', instrument: 'Yu (羽) - Verzierung' },
];

const pentatonicNotes = [
  { frequency: 261.63, name: 'C' },
  { frequency: 293.66, name: 'D' },
  { frequency: 329.63, name: 'E' },
  { frequency: 392.00, name: 'G' },
  { frequency: 440.00, name: 'A' },
];

// Vordefinierte einfache Melodie-Patterns
const melodyPatterns = [
  {
    name: 'Einfache Meditation',
    pattern: [
      { time: 0, role: 0, duration: 2 },
      { time: 2, role: 2, duration: 1 },
      { time: 3, role: 1, duration: 1 },
      { time: 4, role: 0, duration: 2 },
      { time: 6, role: 3, duration: 1 },
      { time: 7, role: 4, duration: 1 },
      { time: 8, role: 0, duration: 2 },
    ],
    tempo: 600
  },
  {
    name: 'Fließendes Wasser',
    pattern: [
      { time: 0, role: 0, duration: 1 },
      { time: 0.5, role: 1, duration: 0.5 },
      { time: 1, role: 2, duration: 0.5 },
      { time: 1.5, role: 3, duration: 0.5 },
      { time: 2, role: 4, duration: 1 },
      { time: 3, role: 3, duration: 0.5 },
      { time: 3.5, role: 2, duration: 0.5 },
      { time: 4, role: 1, duration: 0.5 },
      { time: 4.5, role: 0, duration: 1.5 },
    ],
    tempo: 400
  },
  {
    name: 'Tanz der Freude',
    pattern: [
      { time: 0, role: 3, duration: 0.5 },
      { time: 0.5, role: 4, duration: 0.5 },
      { time: 1, role: 3, duration: 0.5 },
      { time: 1.5, role: 2, duration: 0.5 },
      { time: 2, role: 3, duration: 0.5 },
      { time: 2.5, role: 4, duration: 0.5 },
      { time: 3, role: 3, duration: 0.5 },
      { time: 3.5, role: 0, duration: 1.5 },
      { time: 5, role: 1, duration: 1 },
    ],
    tempo: 350
  }
];

export function GroupMusicActivity() {
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeRoles, setActiveRoles] = useState<Set<number>>(new Set());
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    setAudioContext(context);

    return () => {
      context.close();
    };
  }, []);

  const playNote = (frequency: number, duration: number) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  };

  const playPattern = async () => {
    const pattern = melodyPatterns[selectedPattern];
    setIsPlaying(true);
    setCurrentTime(0);

    for (const note of pattern.pattern) {
      await new Promise(resolve => setTimeout(resolve, note.time * pattern.tempo));
      
      setActiveRoles(new Set([note.role]));
      const noteIndex = studentRoles[note.role].notes[0];
      playNote(pentatonicNotes[noteIndex].frequency, note.duration);
      
      setTimeout(() => {
        setActiveRoles(new Set());
      }, note.duration * pattern.tempo);
    }

    setIsPlaying(false);
  };

  const reset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveRoles(new Set());
  };

  return (
    <div className="w-full max-w-6xl space-y-6">
      {showInstructions && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl relative"
        >
          <button
            onClick={() => setShowInstructions(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            ✕
          </button>
          <div className="flex items-start gap-4">
            <Users className="w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3">👥 Anleitung für die Gruppe (10 Schüler)</h3>
              <div className="space-y-2 text-sm">
                <p>1. <strong>Teilt euch in 5 Zweiergruppen auf</strong> (Schüler 1-2, 3-4, 5-6, 7-8, 9-10)</p>
                <p>2. Jede Gruppe bekommt <strong>einen bestimmten Ton</strong> zugeteilt (siehe unten)</p>
                <p>3. Wählt ein Melodie-Pattern aus und hört es euch an</p>
                <p>4. Wenn euer Feld <strong>aufleuchtet</strong>, klatscht, stampft oder singt euren Ton!</p>
                <p>5. <strong>Übt zusammen</strong> - erst langsam, dann im richtigen Tempo</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Users className="w-6 h-6" />
            Gruppen-Rollen Verteilung
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {studentRoles.map((role) => (
              <motion.div
                key={role.id}
                animate={{
                  scale: activeRoles.has(role.id - 1) ? 1.1 : 1,
                  boxShadow: activeRoles.has(role.id - 1) 
                    ? '0 10px 40px rgba(0,0,0,0.3)' 
                    : '0 4px 6px rgba(0,0,0,0.1)'
                }}
                className={`
                  ${role.color} text-white p-4 rounded-xl
                  ${activeRoles.has(role.id - 1) ? 'ring-4 ring-white' : ''}
                `}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{role.id}</div>
                  <div className="text-sm font-semibold mb-1">{role.name}</div>
                  <div className="text-xs opacity-90 border-t border-white/30 pt-2 mt-2">
                    {role.instrument}
                  </div>
                  <div className="text-lg font-bold mt-2">
                    {pentatonicNotes[role.notes[0]].name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">🎵 Melodie-Patterns zum Üben</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {melodyPatterns.map((pattern, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedPattern(index);
                  reset();
                }}
                className={`
                  p-4 rounded-lg border-2 transition-all
                  ${selectedPattern === index 
                    ? 'border-red-600 bg-red-50 shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
                  }
                `}
              >
                <div className="font-bold text-lg mb-1">{pattern.name}</div>
                <div className="text-sm text-gray-600">
                  {pattern.pattern.length} Töne
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={playPattern}
              disabled={isPlaying}
              size="lg"
              className="gap-2 px-8"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  Spielt ab...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Melodie vorspielen
                </>
              )}
            </Button>

            <Button
              onClick={reset}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Zurücksetzen
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300">
          <CardHeader>
            <CardTitle className="text-lg">🎯 Übung 1: Nachspielen</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong>Ziel:</strong> Die Melodie gemeinsam nachspielen</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Melodie 2-3 mal anhören</li>
              <li>Jede Gruppe übt ihren Einsatz</li>
              <li>Zusammen spielen - erst langsam!</li>
              <li>Tempo steigern</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300">
          <CardHeader>
            <CardTitle className="text-lg">🎯 Übung 2: Variationen</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong>Ziel:</strong> Eigene Versionen erstellen</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Ändert die Reihenfolge der Töne</li>
              <li>Macht manche Töne länger/kürzer</li>
              <li>Fügt Wiederholungen hinzu</li>
              <li>Präsentiert eure Version!</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300">
          <CardHeader>
            <CardTitle className="text-lg">🎯 Übung 3: Performance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong>Ziel:</strong> Mit Bewegung kombinieren</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Gruppe 1-2: Stampfen (Bass)</li>
              <li>Gruppe 3-4: Knie klopfen</li>
              <li>Gruppe 5-6: In die Hände klatschen</li>
              <li>Gruppe 7-8: Schnipsen</li>
              <li>Gruppe 9-10: Melodie summen</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl">
        <h3 className="text-xl font-bold mb-3">💡 Tipps für erfolgreiche Gruppenarbeit:</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>• <strong>Zuhören:</strong> Achtet aufeinander und spielt synchron</p>
            <p>• <strong>Geduld:</strong> Übt langsam, dann wird es automatisch schneller</p>
            <p>• <strong>Timing:</strong> Zählt leise mit (1-2-3-4)</p>
          </div>
          <div className="space-y-2">
            <p>• <strong>Dynamik:</strong> Probiert leise und laute Passagen</p>
            <p>• <strong>Spaß:</strong> Musik soll Freude machen - habt Spaß!</p>
            <p>• <strong>Kreativität:</strong> Erfindet eigene Melodien</p>
          </div>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-yellow-50 to-amber-100 border-2 border-yellow-300">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-3 text-center">🎼 Notation für Lehrkräfte</h3>
          <div className="text-sm space-y-2">
            <p className="text-center mb-4">
              Die Patterns entsprechen folgenden Tonfolgen in der pentatonischen C-Skala:
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded">
                <p className="font-bold">Einfache Meditation:</p>
                <p className="text-xs">C (lang) - E - D - C (lang) - G - A - C (lang)</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-bold">Fließendes Wasser:</p>
                <p className="text-xs">C - D - E - G - A - G - E - D - C</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-bold">Tanz der Freude:</p>
                <p className="text-xs">G - A - G - E - G - A - G - C (lang) - D</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
