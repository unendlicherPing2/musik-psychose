import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Music } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { InteractivePentatonic } from './InteractivePentatonic';
import { RhythmGame } from './RhythmGame';
import { InstrumentQuiz } from './InstrumentQuiz';
import { GroupMusicActivity } from './GroupMusicActivity';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  id: number;
  title: string;
  type: string;
  content: React.ReactNode;
}

export function PresentationSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Folie 1: Titelfolie
    {
      id: 0,
      title: 'Klassische Chinesische Musik',
      type: 'intro',
      content: (
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center px-8">
          <Music className="w-32 h-32 text-red-600" />
          <h1 className="text-7xl font-bold text-red-800">Klassische Chinesische Musik</h1>
          <p className="text-3xl text-gray-700 max-w-3xl">
            Eine interaktive Reise durch die jahrtausendealte Musiktradition Chinas
          </p>
          <div className="text-xl text-gray-500 mt-4">
            中国古典音乐
          </div>
          <div className="flex gap-6 mt-8">
            <div className="px-8 py-4 bg-red-100 rounded-xl shadow-lg">
              <p className="text-xl font-semibold">🏛️ Geschichte</p>
            </div>
            <div className="px-8 py-4 bg-orange-100 rounded-xl shadow-lg">
              <p className="text-xl font-semibold">🎵 Theorie</p>
            </div>
            <div className="px-8 py-4 bg-yellow-100 rounded-xl shadow-lg">
              <p className="text-xl font-semibold">🎸 Instrumente</p>
            </div>
            <div className="px-8 py-4 bg-green-100 rounded-xl shadow-lg">
              <p className="text-xl font-semibold">🎮 Praxis</p>
            </div>
          </div>
        </div>
      )
    },

    // Folie 2: Inhaltsübersicht
    {
      id: 1,
      title: 'Inhaltsübersicht',
      type: 'overview',
      content: (
        <div className="flex flex-col justify-center h-full p-12">
          <h2 className="text-5xl font-bold text-red-800 mb-12 text-center">Inhaltsübersicht</h2>
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">📜</span> Teil I: Geschichte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Ursprünge in der Antike (3000+ Jahre)</p>
                <p>• Entwicklung durch die Dynastien</p>
                <p>• Musik am kaiserlichen Hof</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">☯️</span> Teil II: Philosophie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Konfuzianismus und Musik</p>
                <p>• Taoismus und natürliche Harmonie</p>
                <p>• Yin und Yang in der Musik</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">🎵</span> Teil III: Musiktheorie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Die pentatonische Skala</p>
                <p>• Die fünf Elemente (Wu Xing)</p>
                <p>• Tonleitern und Modi</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="text-3xl">🎸</span> Teil IV: Instrumente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Saiteninstrumente (Guzheng, Pipa, Erhu)</p>
                <p>• Blasinstrumente (Dizi, Xiao, Sheng)</p>
                <p>• Schlaginstrumente (Paigu, Bianzhong)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Folie 3: Geschichte - Antike
    {
      id: 2,
      title: 'Geschichte: Die Anfänge',
      type: 'history',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-red-800">Die Anfänge der chinesischen Musik</h2>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏺</span> Jungsteinzeit (7000-5000 v. Chr.)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Die ältesten Musikinstrumente Chinas sind Knochenflöten aus der Jungsteinzeit. 
                  Bei Ausgrabungen in Henan wurden 7000-9000 Jahre alte Flöten aus Kranichknochen gefunden, 
                  die bereits pentatonische Skalen spielen konnten.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">👑</span> Xia & Shang Dynastien (2070-1046 v. Chr.)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Während der Shang-Dynastie entwickelten sich Bronze-Glocken (Bianzhong). 
                  Musik wurde für rituelle Zeremonien und zur Kommunikation mit Ahnen verwendet. 
                  Der legendäre Kaiser Huangdi soll das erste Musiksystem erschaffen haben.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📚</span> Zhou-Dynastie (1046-256 v. Chr.)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Die Zhou-Ära war prägend für die chinesische Musiktheorie. Das "Buch der Lieder" 
                  (Shijing) mit über 300 Liedern wurde zusammengestellt. Konfuzius betonte die 
                  moralische und erzieherische Bedeutung der Musik.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6 justify-center">
            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/%E5%92%8C%E6%BC%A2%E6%B4%8B%E5%8D%81%E4%BA%8C%E9%9F%B3%E5%BE%8B%E5%AF%BE%E7%85%A7%E8%A1%A8_1909%E5%B9%B4_%E9%9F%B3%E5%90%8D%E3%83%BB%E9%9A%8E%E5%90%8D.jpg"
                alt="Gongche Notationssystem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-red-700 to-orange-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">💡 Wusstest du?</h3>
              <p className="text-lg leading-relaxed">
                Die chinesische Musiknotation existiert seit über 2000 Jahren! 
                Das "Gongche"-Notationssystem verwendete chinesische Schriftzeichen 
                zur Darstellung von Tonhöhen und Rhythmen.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Folie 4: Geschichte - Dynastien
    {
      id: 3,
      title: 'Geschichte: Blütezeit der Dynastien',
      type: 'history',
      content: (
        <div className="flex flex-col justify-center h-full p-12 space-y-8">
          <h2 className="text-5xl font-bold text-red-800 text-center mb-4">
            Entwicklung durch die Dynastien
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <div className="text-3xl mb-2">🎭</div>
                  Qin & Han (221 v. Chr. - 220 n. Chr.)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-blue-900">Vereinheitlichung der Musiktheorie</p>
                <ul className="space-y-2 text-sm">
                  <li>• Gründung des kaiserlichen Musikamtes (Yuefu)</li>
                  <li>• Sammlung und Bewahrung von Volksliedern</li>
                  <li>• Standardisierung von Tonhöhen und Instrumenten</li>
                  <li>• Entstehung der Seidenstraßen-Musikeinflüsse</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <div className="text-3xl mb-2">🌸</div>
                  Tang-Dynastie (618-907)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-purple-900">Goldenes Zeitalter der Musik</p>
                <ul className="space-y-2 text-sm">
                  <li>• Höhepunkt der Hofmusik mit über 30.000 Musikern</li>
                  <li>• Entwicklung der Pipa zu ihrer heutigen Form</li>
                  <li>• Internationale Musikeinflüsse aus Persien und Indien</li>
                  <li>• Tanzmusik erreichte höchste Kunstfertigkeit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <div className="text-3xl mb-2">🎨</div>
                  Song-Dynastie (960-1279)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-green-900">Raffinierung und Gelehrtenmusik</p>
                <ul className="space-y-2 text-sm">
                  <li>• Aufstieg der Qin (Guqin) als Instrument der Gelehrten</li>
                  <li>• Entwicklung von Kammermusik und Ensembles</li>
                  <li>• Musiktheorie wurde philosophischer und subtiler</li>
                  <li>• Beginn der chinesischen Oper</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <div className="text-3xl mb-2">🏇</div>
                  Yuan, Ming & Qing (1271-1912)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-orange-900">Volksmusik und Opernformen</p>
                <ul className="space-y-2 text-sm">
                  <li>• Entstehung der Peking-Oper (京剧)</li>
                  <li>• Verschmelzung von regionalen Musikstilen</li>
                  <li>• Popularisierung von Volksliedern und Balladen</li>
                  <li>• Entwicklung der modernen Instrumentenformen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <div className="text-3xl mb-2">🎼</div>
                  Moderne Ära (ab 1912)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="font-semibold text-red-900">Bewahrung und Innovation</p>
                <ul className="space-y-2 text-sm">
                  <li>• Fusion mit westlicher Musiktheorie</li>
                  <li>• Gründung von Musikkonservatorien</li>
                  <li>• Wiederbelebung traditioneller Musik</li>
                  <li>• UNESCO-Anerkennung als Weltkulturerbe</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Folie 5: Philosophie - Konfuzianismus
    {
      id: 4,
      title: 'Philosophie: Konfuzianismus',
      type: 'philosophy',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-bold text-red-800">Konfuzianismus und Musik</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Konfuzius (孔子, 551-479 v. Chr.) betrachtete Musik als essentielles Werkzeug 
              zur moralischen Erziehung und gesellschaftlichen Harmonie.
            </p>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300">
              <CardHeader>
                <CardTitle className="text-2xl">📖 Die sechs Künste (六艺)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Musik (乐, Yue) war eine der sechs essentiellen Künste für gebildete Menschen:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">1. 礼 Rituale</div>
                  <div className="p-2 bg-white rounded">2. 乐 Musik</div>
                  <div className="p-2 bg-white rounded">3. 射 Bogenschießen</div>
                  <div className="p-2 bg-white rounded">4. 御 Wagenlenken</div>
                  <div className="p-2 bg-white rounded">5. 书 Kalligraphie</div>
                  <div className="p-2 bg-white rounded">6. 数 Mathematik</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300">
              <CardHeader>
                <CardTitle className="text-2xl">💭 Konfuzius über Musik:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white rounded italic">
                  "Musik erzeugt eine Art von Freude, die die menschliche Natur nicht missen kann."
                </div>
                <div className="p-3 bg-white rounded italic">
                  "Die Musik drückt die Harmonie zwischen Himmel und Erde aus."
                </div>
                <div className="p-3 bg-white rounded italic">
                  "Wenn man die Musik eines Staates kennt, kennt man dessen moralischen Zustand."
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="h-80 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1763192570737-15b21e7761df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY2FsbGlncmFwaHklMjB0cmFkaXRpb25hbCUyMGFydHxlbnwxfHx8fDE3NzExODg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chinesische Kalligraphie"
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="text-xl">🎵 Musikalische Prinzipien</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧘</span>
                  <div>
                    <p className="font-bold">Selbstkultivierung (修身)</p>
                    <p className="text-sm">Musik verfeinert den Charakter und die Emotionen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <p className="font-bold">Balance und Maß (中庸)</p>
                    <p className="text-sm">Musik sollte ausgewogen sein - nicht zu aufgeregt, nicht zu träge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <p className="font-bold">Soziale Ordnung (礼乐)</p>
                    <p className="text-sm">Musik und Rituale zusammen schaffen gesellschaftliche Harmonie</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💚</span>
                  <div>
                    <p className="font-bold">Moralische Wirkung (德音)</p>
                    <p className="text-sm">Gute Musik fördert Tugend und edle Gefühle</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Folie 6: Philosophie - Taoismus
    {
      id: 5,
      title: 'Philosophie: Taoismus',
      type: 'philosophy',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="flex flex-col justify-center space-y-6">
            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1769089220014-5952da3f0747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5aW4lMjB5YW5nJTIwc3ltYm9sJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzcxMTg4ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Yin Yang Symbol"
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300">
              <CardHeader>
                <CardTitle className="text-xl">☯️ Yin und Yang in der Musik</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-800 text-white rounded">
                    <p className="font-bold mb-1">Yin (阴)</p>
                    <p className="text-xs">Leise, tief, langsam</p>
                    <p className="text-xs">Reflektiv, meditativ</p>
                    <p className="text-xs">Nacht, Ruhe</p>
                  </div>
                  <div className="p-3 bg-white text-gray-800 rounded border-2">
                    <p className="font-bold mb-1">Yang (阳)</p>
                    <p className="text-xs">Laut, hoch, schnell</p>
                    <p className="text-xs">Aktiv, energisch</p>
                    <p className="text-xs">Tag, Bewegung</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  Gute Musik balanciert Yin und Yang für vollkommene Harmonie
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-bold text-red-800">Taoismus und natürliche Harmonie</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Der Taoismus betont die Einheit mit der Natur und das Prinzip des 
              "Wu Wei" (无为) - des absichtslosen Handelns. Musik sollte natürlich 
              und spontan fließen wie Wasser.
            </p>

            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300">
              <CardHeader>
                <CardTitle className="text-2xl">🌊 Grundprinzipien</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍃</span>
                  <div>
                    <p className="font-bold">Natürlichkeit (自然, Ziran)</p>
                    <p className="text-sm">Musik sollte so natürlich sein wie der Wind durch Bambus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💫</span>
                  <div>
                    <p className="font-bold">Spontaneität (无为, Wu Wei)</p>
                    <p className="text-sm">Wahre Kunst entsteht ohne erzwungene Anstrengung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎋</span>
                  <div>
                    <p className="font-bold">Einfachheit (朴, Pu)</p>
                    <p className="text-sm">Die Schönheit liegt in der unverzierten Einfachheit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌌</span>
                  <div>
                    <p className="font-bold">Stille und Klang (声与无声)</p>
                    <p className="text-sm">Die Pausen sind genauso wichtig wie die Töne</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-xl">
              <p className="text-lg italic leading-relaxed">
                "Die höchste Musik ist diejenige, die man kaum hört. Sie verschmilzt mit 
                dem Raum zwischen den Tönen und der Stille der Natur." - Laozi (老子)
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Folie 7: Musiktheorie - Pentatonik Details
    {
      id: 6,
      title: 'Musiktheorie: Die Pentatonik',
      type: 'theory',
      content: (
        <div className="flex flex-col justify-center h-full p-12 space-y-8">
          <h2 className="text-5xl font-bold text-red-800 text-center">
            Die chinesische Pentatonik (五声音阶)
          </h2>

          <div className="grid grid-cols-5 gap-4">
            {[
              { name: 'Gong', chinese: '宫', western: 'C/Do', color: 'bg-yellow-500', element: '土 Erde', meaning: 'Kaiser/Zentrum' },
              { name: 'Shang', chinese: '商', western: 'D/Re', color: 'bg-gray-400', element: '金 Metall', meaning: 'Minister/Westen' },
              { name: 'Jue', chinese: '角', western: 'E/Mi', color: 'bg-green-500', element: '木 Holz', meaning: 'Volk/Osten' },
              { name: 'Zhi', chinese: '徵', western: 'G/Sol', color: 'bg-red-500', element: '火 Feuer', meaning: 'Staatsangelegenheiten/Süden' },
              { name: 'Yu', chinese: '羽', western: 'A/La', color: 'bg-blue-500', element: '水 Wasser', meaning: 'Objekte/Norden' }
            ].map((note, index) => (
              <Card key={index} className={`${note.color} text-white border-4 border-white shadow-2xl`}>
                <CardContent className="pt-6 text-center">
                  <div className="text-6xl font-bold mb-2">{index + 1}</div>
                  <div className="text-2xl font-bold mb-2">{note.name}</div>
                  <div className="text-4xl mb-3">{note.chinese}</div>
                  <div className="text-lg mb-2">{note.western}</div>
                  <div className="text-sm opacity-90 border-t-2 pt-2 mt-2">{note.element}</div>
                  <div className="text-xs opacity-80 mt-1">{note.meaning}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="text-xl">🎼 Charakteristiken der Pentatonik</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Keine Halbtöne:</strong> Es gibt keine kleinen Sekunden (Halbtonschritte)</p>
                <p>• <strong>Konsonanz:</strong> Alle Töne klingen harmonisch zusammen</p>
                <p>• <strong>Offenheit:</strong> Gefühl von Weite und Meditation</p>
                <p>• <strong>Flexibilität:</strong> Kann als Grundlage für verschiedene Modi dienen</p>
                <p>• <strong>Natürlichkeit:</strong> Entspricht natürlichen Obertonreihen</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardHeader>
                <CardTitle className="text-xl">🌏 Pentatonik weltweit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>China:</strong> Grundlage aller traditionellen Musik</p>
                <p>• <strong>Japan:</strong> Verwendung in Gagaku und traditionellen Liedern</p>
                <p>• <strong>Schottland/Irland:</strong> Keltische Volksmusik</p>
                <p>• <strong>Afrika:</strong> Westafrikanische Musik und Blues-Wurzeln</p>
                <p>• <strong>Amerika:</strong> Blues, Gospel, Jazz-Improvisationen</p>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl">
            <h3 className="text-2xl font-bold mb-3">💡 Wichtig zu wissen:</h3>
            <p className="text-lg leading-relaxed">
              Anders als die westliche Dur/Moll-Tonleiter mit 7 Tönen, verzichtet die 
              chinesische Pentatonik auf die 4. und 7. Stufe (F und H in C-Dur). 
              Dies erzeugt den charakteristischen, meditativen Klang ohne dissonante Spannungen.
            </p>
          </div>
        </div>
      )
    },

    // Folie 8: Die fünf Elemente
    {
      id: 7,
      title: 'Die fünf Elemente',
      type: 'theory',
      content: (
        <div className="flex flex-col justify-center h-full p-12 space-y-8">
          <h2 className="text-5xl font-bold text-red-800 text-center mb-4">
            Wu Xing (五行) - Die fünf Wandlungsphasen
          </h2>
          <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto">
            Jeder Ton der Pentatonik ist mit einem Element, einer Himmelsrichtung, 
            einer Jahreszeit und einem Aspekt des Lebens verbunden.
          </p>

          <div className="grid grid-cols-5 gap-4">
            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-400">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-3">🌍</div>
                  <div className="text-2xl font-bold text-yellow-900">Erde (土)</div>
                  <div className="text-xl font-bold">Gong (宫)</div>
                  <div className="h-px bg-yellow-400 my-3"></div>
                  <div className="text-sm space-y-1">
                    <p><strong>Richtung:</strong> Zentrum</p>
                    <p><strong>Jahreszeit:</strong> Spätsommer</p>
                    <p><strong>Farbe:</strong> Gelb</p>
                    <p><strong>Emotion:</strong> Nachdenklichkeit</p>
                    <p><strong>Organ:</strong> Milz/Magen</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-300 border-4 border-gray-400">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-3">⚙️</div>
                  <div className="text-2xl font-bold text-gray-900">Metall (金)</div>
                  <div className="text-xl font-bold">Shang (商)</div>
                  <div className="h-px bg-gray-400 my-3"></div>
                  <div className="text-sm space-y-1">
                    <p><strong>Richtung:</strong> Westen</p>
                    <p><strong>Jahreszeit:</strong> Herbst</p>
                    <p><strong>Farbe:</strong> Weiß</p>
                    <p><strong>Emotion:</strong> Trauer</p>
                    <p><strong>Organ:</strong> Lunge</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-400">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-3">🌳</div>
                  <div className="text-2xl font-bold text-green-900">Holz (木)</div>
                  <div className="text-xl font-bold">Jue (角)</div>
                  <div className="h-px bg-green-400 my-3"></div>
                  <div className="text-sm space-y-1">
                    <p><strong>Richtung:</strong> Osten</p>
                    <p><strong>Jahreszeit:</strong> Frühling</p>
                    <p><strong>Farbe:</strong> Grün</p>
                    <p><strong>Emotion:</strong> Zorn</p>
                    <p><strong>Organ:</strong> Leber</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-100 to-red-200 border-4 border-red-400">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-3">🔥</div>
                  <div className="text-2xl font-bold text-red-900">Feuer (火)</div>
                  <div className="text-xl font-bold">Zhi (徵)</div>
                  <div className="h-px bg-red-400 my-3"></div>
                  <div className="text-sm space-y-1">
                    <p><strong>Richtung:</strong> Süden</p>
                    <p><strong>Jahreszeit:</strong> Sommer</p>
                    <p><strong>Farbe:</strong> Rot</p>
                    <p><strong>Emotion:</strong> Freude</p>
                    <p><strong>Organ:</strong> Herz</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-400">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-3">💧</div>
                  <div className="text-2xl font-bold text-blue-900">Wasser (水)</div>
                  <div className="text-xl font-bold">Yu (羽)</div>
                  <div className="h-px bg-blue-400 my-3"></div>
                  <div className="text-sm space-y-1">
                    <p><strong>Richtung:</strong> Norden</p>
                    <p><strong>Jahreszeit:</strong> Winter</p>
                    <p><strong>Farbe:</strong> Schwarz</p>
                    <p><strong>Emotion:</strong> Angst</p>
                    <p><strong>Organ:</strong> Nieren</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl border-2 border-orange-300">
              <h3 className="text-xl font-bold mb-3">🔄 Erzeugungszyklus (相生)</h3>
              <p className="text-sm mb-2">Jedes Element nährt das nächste:</p>
              <div className="text-sm space-y-1">
                <p>🌳 Holz → 🔥 Feuer (Holz nährt Feuer)</p>
                <p>🔥 Feuer → 🌍 Erde (Asche wird zu Erde)</p>
                <p>🌍 Erde → ⚙️ Metall (Erde enthält Metall)</p>
                <p>⚙️ Metall → 💧 Wasser (Metall kondensiert Wasser)</p>
                <p>💧 Wasser → 🌳 Holz (Wasser nährt Holz)</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300">
              <h3 className="text-xl font-bold mb-3">⚔️ Kontrollzyklus (相克)</h3>
              <p className="text-sm mb-2">Jedes Element kontrolliert ein anderes:</p>
              <div className="text-sm space-y-1">
                <p>🌳 Holz → 🌍 Erde (Wurzeln durchdringen Erde)</p>
                <p>🌍 Erde → 💧 Wasser (Erde dämmt Wasser)</p>
                <p>💧 Wasser → 🔥 Feuer (Wasser löscht Feuer)</p>
                <p>🔥 Feuer → ⚙️ Metall (Feuer schmilzt Metall)</p>
                <p>⚙️ Metall → 🌳 Holz (Axt fällt Holz)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Folie 9: Instrument - Guzheng
    {
      id: 8,
      title: 'Instrument: Guzheng',
      type: 'instrument',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="flex flex-col justify-center">
            <div className="h-full rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1655827509516-920cd52d912a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdHJhZGl0aW9uYWwlMjBndXpoZW5nJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3NzExODg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Guzheng"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-bold text-red-800">Guzheng (古筝)</h2>
            <p className="text-2xl text-gray-700">"Die antike Zither"</p>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
              <CardHeader>
                <CardTitle>📊 Technische Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• <strong>Saiten:</strong> Traditionell 16, modern 21-25 Saiten</p>
                <p>• <strong>Material:</strong> Saiten aus Stahl oder Nylon, Resonanzkörper aus Paulownia-Holz</p>
                <p>• <strong>Länge:</strong> Ca. 160-180 cm</p>
                <p>• <strong>Stimmung:</strong> Pentatonisch, meist in D-Dur oder G-Dur</p>
                <p>• <strong>Spielweise:</strong> Mit Fingernägeln oder Plektren, rechte Hand zupft, linke drückt</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <CardTitle>🎵 Spieltechniken</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xl">👆</span>
                  <div>
                    <p className="font-bold">Tuo (托)</p>
                    <p className="text-sm">Nach außen zupfen mit dem Daumen</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🖐️</span>
                  <div>
                    <p className="font-bold">Mo (抹)</p>
                    <p className="text-sm">Nach innen zupfen mit dem Zeigefinger</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🌊</span>
                  <div>
                    <p className="font-bold">Hua Yin (滑音)</p>
                    <p className="text-sm">Glissando - linke Hand drückt die Saite für Tonhöhenveränderung</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">💫</span>
                  <div>
                    <p className="font-bold">Rou Xian (揉弦)</p>
                    <p className="text-sm">Vibrato durch Druck der linken Hand</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle>🎼 Bekannte Stücke</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p>• "Hohe Berge und fließendes Wasser" (高山流水)</p>
                <p>• "Fischerboote bei Sonnenuntergang" (渔舟唱晚)</p>
                <p>• "Mondspiegelung im zweiten Frühling" (寒鸦戏水)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },

    // Folie 10: Instrument - Erhu
    {
      id: 9,
      title: 'Instrument: Erhu',
      type: 'instrument',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-bold text-red-800">Erhu (二胡)</h2>
            <p className="text-2xl text-gray-700">"Die chinesische Violine"</p>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle>📊 Technische Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• <strong>Saiten:</strong> 2 Saiten aus Metall oder Seide</p>
                <p>• <strong>Bogen:</strong> Rosshaar zwischen den Saiten gespannt</p>
                <p>• <strong>Resonator:</strong> Sechseckiger Körper mit Pythonhaut bespannt</p>
                <p>• <strong>Stimmung:</strong> Meist D und A (eine Quinte auseinander)</p>
                <p>• <strong>Tonumfang:</strong> 3+ Oktaven</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-pink-100">
              <CardHeader>
                <CardTitle>🎭 Ausdrucksmöglichkeiten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Emotion:</strong> Kann Freude, Trauer, Sehnsucht ausdrücken</p>
                <p>• <strong>Imitation:</strong> Nachahmung von Vogelgesang, Pferdewiehern</p>
                <p>• <strong>Vibrato:</strong> Expressives Zittern für emotionale Tiefe</p>
                <p>• <strong>Glissando:</strong> Fließende Tonhöhenübergänge</p>
                <p>• <strong>Stimmähnlichkeit:</strong> Klingt der menschlichen Stimme ähnlich</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <CardTitle>🎼 Bekannte Stücke</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p>• "Der Mond über der Blütenpracht" (二泉映月)</p>
                <p>• "Pferde rennen" (赛马)</p>
                <p>• "Vögel auf dem leeren Berg" (空山鸟语)</p>
                <p>• "Klage der Trennungsschmerzen" (江河水)</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1545947288-c22ade2af79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZXJodSUyMGluc3RydW1lbnQlMjBtdXNpY2lhbnxlbnwxfHx8fDE3NzExODg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Erhu"
                className="w-full h-auto max-h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      )
    },

    // Folie 11: Instrument - Pipa
    {
      id: 10,
      title: 'Instrument: Pipa',
      type: 'instrument',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="flex flex-col justify-center">
            <div className="h-full rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1762006211581-3c705aba617b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcGlwYSUyMGluc3RydW1lbnQlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzExODg1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pipa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-bold text-red-800">Pipa (琵琶)</h2>
            <p className="text-2xl text-gray-700">"Die birnenförmige Laute"</p>

            <Card className="bg-gradient-to-br from-teal-50 to-teal-100">
              <CardHeader>
                <CardTitle>📊 Technische Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• <strong>Saiten:</strong> 4 Saiten aus Seide oder Nylon/Stahl</p>
                <p>• <strong>Bünde:</strong> 30+ Bünde für große Tonvielfalt</p>
                <p>• <strong>Form:</strong> Birnenförmiger Korpus aus hartem Holz</p>
                <p>• <strong>Stimmung:</strong> Meist A-D-E-A</p>
                <p>• <strong>Geschichte:</strong> Kam über die Seidenstraße aus Persien (4. Jh.)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardHeader>
                <CardTitle>🎵 Spieltechniken</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Tan (弹):</strong> Zupfen mit den Fingernägeln</p>
                <p>• <strong>Tiao (挑):</strong> Aufwärts zupfen</p>
                <p>• <strong>Gun (滚):</strong> Tremolo - schnelles Wiederholen</p>
                <p>• <strong>Lun (轮):</strong> Fingerwirbel für volle Klangfülle</p>
                <p>• <strong>Sao (扫):</strong> Streichen über mehrere Saiten</p>
                <p>• <strong>Fu (拂):</strong> Schnelles Arpeggio</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-rose-50 to-rose-100">
              <CardHeader>
                <CardTitle>⚔️ Musikalische Darstellung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Die Pipa ist berühmt für ihre Fähigkeit, dramatische Szenen darzustellen:</p>
                <p>• Schlachtengetümmel und Kampfgeräusche</p>
                <p>• Sanfte Liebeslieder und Poesie</p>
                <p>• Naturgeräusche wie Regen oder Donner</p>
                <p className="font-bold italic mt-3">"Die Pipa kann alles - von einem Hauch bis zu einem Sturm!"</p>
              </CardContent>
            </Card>

            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl">
              <p className="font-bold">🎼 Berühmtestes Stück:</p>
              <p>"Haus der fliegenden Dolche" (十面埋伏) - dramatische Darstellung einer Schlacht</p>
            </div>
          </div>
        </div>
      )
    },

    // Folie 12: Instrument - Dizi
    {
      id: 11,
      title: 'Instrument: Dizi',
      type: 'instrument',
      content: (
        <div className="grid grid-cols-2 gap-8 h-full p-8">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-bold text-red-800">Dizi (笛子)</h2>
            <p className="text-2xl text-gray-700">"Die Bambusquerflöte"</p>

            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <CardTitle>📊 Technische Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• <strong>Material:</strong> Bambus (verschiedene Arten)</p>
                <p>• <strong>Löcher:</strong> 1 Blasloch, 1 Membran-Loch, 6 Grifflöcher</p>
                <p>• <strong>Membran:</strong> Dimo (笛膜) - dünne Bambus- oder Rohrmembran</p>
                <p>• <strong>Länge:</strong> 40-80 cm, je nach Tonhöhe</p>
                <p>• <strong>Typen:</strong> Bangdi (hoch, hell), Qudi (tief, sanft)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100">
              <CardHeader>
                <CardTitle>🎵 Die besondere Membran (Dimo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Das Geheimnis des Dizi-Klangs:</p>
                <p>• Die Membran über dem speziellen Loch vibriert beim Spielen</p>
                <p>• Erzeugt einen brillanten, summenden Obertonreichtum</p>
                <p>• Macht den Klang lebendiger und durchdringender</p>
                <p>• Wird aus Schilfrohr oder Bambusinnenhaut hergestellt</p>
                <p>• Muss sorgfältig aufgeklebt und gepflegt werden</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100">
              <CardHeader>
                <CardTitle>🎭 Verwendung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Kunqu-Oper:</strong> Hauptmelodieinstrument</p>
                <p>• <strong>Volksmusik:</strong> Lieder und Tänze begleiten</p>
                <p>• <strong>Moderne Orchester:</strong> Solo und Ensemble</p>
                <p>• <strong>Filmmusik:</strong> Typisch für historische Filme</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1558299244-f4bb4dd735b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZGl6aSUyMGJhbWJvbyUyMGZsdXRlfGVufDF8fHx8MTc3MTE4ODU3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dizi"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1720625922851-0cc03e1f65eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmb3Jlc3QlMjBuYXR1cmUlMjBjaGluYXxlbnwxfHx8fDE3NzExODg4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bambuswald"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )
    },

    // Folie 13: Weitere Instrumente
    {
      id: 12,
      title: 'Weitere traditionelle Instrumente',
      type: 'instruments',
      content: (
        <div className="flex flex-col justify-center h-full p-12 space-y-8">
          <h2 className="text-5xl font-bold text-red-800 text-center">
            Weitere traditionelle Instrumente
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">🎻</span> Guqin (古琴)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Die "Zither der Weisen"</p>
                <p>• 7 Saiten ohne Bünde</p>
                <p>• Über 3000 Jahre alt</p>
                <p>• Instrument der Gelehrten</p>
                <p>• UNESCO Weltkulturerbe</p>
                <p>• Sehr leise, meditativ</p>
                <p className="italic">Symbol der Bildung</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">🥁</span> Paigu (排鼓)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Gestimmte Trommelreihe</p>
                <p>• 5-7 Trommeln in verschiedenen Größen</p>
                <p>• Jede hat eigene Tonhöhe</p>
                <p>• Verwendet in Orchestern</p>
                <p>• Melodische Percussion</p>
                <p>• Rhythmus und Tonhöhe vereint</p>
                <p className="italic">Dramatische Akzente</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">🎺</span> Suona (唢呐)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Lautstarkes Holzblasinstrument</p>
                <p>• Doppelrohrblatt wie Oboe</p>
                <p>• Sehr durchdringender Klang</p>
                <p>• Für Hochzeiten & Feste</p>
                <p>• Kann sehr laut sein</p>
                <p>• Aus Zentralasien importiert</p>
                <p className="italic">Die lauteste Flöte</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">🔔</span> Bianzhong (编钟)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Bronzeglockenspiel</p>
                <p>• Gestimmte Bronze-Glocken</p>
                <p>• Bis zu 65 Glocken in Sets</p>
                <p>• 2400+ Jahre alt</p>
                <p>• Kaiserliche Zeremonien</p>
                <p>• Archäologischer Fund 1978</p>
                <p className="italic">Majestätischer Klang</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">🎼</span> Sheng (笙)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Mundorgel</p>
                <p>• 13-36 Bambusrohre</p>
                <p>• Mit Metallzungen</p>
                <p>• Kann Akkorde spielen</p>
                <p>• Ein- und Ausatmen möglich</p>
                <p>• Inspirierte die Harmonika</p>
                <p className="italic">Ältestes Harmonikainstrument</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">🎋</span> Xiao (箫)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="font-bold">Vertikale Bambusflöte</p>
                <p>• Längsflöte (vertikal gespielt)</p>
                <p>• Sanfter, dunklerer Klang als Dizi</p>
                <p>• Keine Membran</p>
                <p>• Für meditative Musik</p>
                <p>• Solo-Instrument</p>
                <p className="italic">Stimme des Windes</p>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-center">
            <p className="text-xl font-bold mb-2">🎭 Traditionelle Klassifizierung: Ba Yin (八音)</p>
            <p>Die acht Materialien: Metall (金), Stein (石), Seide (丝), Bambus (竹), 
            Kürbis (匏), Ton (土), Leder (革), Holz (木)</p>
          </div>
        </div>
      )
    },

    // Folie 14: Praktischer Teil - Pentatonik
    {
      id: 13,
      title: 'Praktischer Teil: Pentatonik',
      type: 'interactive',
      content: (
        <div className="flex flex-col items-center justify-start h-full p-8 space-y-6">
          <h2 className="text-5xl font-bold text-red-800">Praktischer Teil: Pentatonik spielen!</h2>
          <p className="text-2xl text-gray-700 text-center max-w-4xl">
            Jetzt seid ihr dran! Experimentiert mit der chinesischen Pentatonik und komponiert 
            eure eigenen Melodien.
          </p>
          
          <InteractivePentatonic />

          <div className="grid grid-cols-2 gap-6 max-w-4xl w-full">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300">
              <h3 className="font-bold text-xl mb-3">🎯 Aufgabe 1: Melodie komponieren</h3>
              <p className="mb-2">Erstellt eine kurze Melodie mit 5-8 Tönen.</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Beginnt und endet mit Gong (Ton 1)</li>
                <li>Verwendet alle 5 Töne mindestens einmal</li>
                <li>Welches Gefühl vermittelt eure Melodie?</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-300">
              <h3 className="font-bold text-xl mb-3">🎯 Aufgabe 2: Gruppenarbeit</h3>
              <p className="mb-2">Teilt euch in Gruppen auf:</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Gruppe 1: Spielt nur Gong und Shang (1+2)</li>
                <li>Gruppe 2: Spielt nur Jue und Zhi (3+4)</li>
                <li>Gruppe 3: Spielt nur Yu (5)</li>
                <li>Kombiniert eure Melodien gleichzeitig!</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-300">
              <h3 className="font-bold text-xl mb-3">🎯 Aufgabe 3: Emotionen darstellen</h3>
              <p className="mb-2">Versucht verschiedene Gefühle auszudrücken:</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Freude: Schnelle, hohe Töne (4+5)</li>
                <li>Ruhe: Langsame, tiefe Töne (1+2)</li>
                <li>Sehnsucht: Wechselnde Tonhöhen</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-300">
              <h3 className="font-bold text-xl mb-3">🎯 Aufgabe 4: Naturgeräusche</h3>
              <p className="mb-2">Imitiert Naturklänge:</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Fließendes Wasser: Auf- und absteigende Töne</li>
                <li>Vogelgezwitscher: Schnelle hohe Töne</li>
                <li>Wind in Bambus: Langsame Glissandi</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Folie 15: Praktischer Teil - Rhythmus
    {
      id: 14,
      title: 'Praktischer Teil: Rhythmus',
      type: 'game',
      content: (
        <div className="flex flex-col items-center justify-start h-full p-8 space-y-6">
          <h2 className="text-5xl font-bold text-red-800">Praktischer Teil: Rhythmus!</h2>
          <p className="text-2xl text-gray-700 text-center max-w-4xl">
            Traditionelle chinesische Musik verwendet oft komplexe und asymmetrische Rhythmen. 
            Testet euer rhythmisches Gefühl!
          </p>
          
          <RhythmGame />

          <div className="grid grid-cols-3 gap-6 max-w-5xl w-full">
            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border-2 border-red-300">
              <h3 className="font-bold text-xl mb-3">👏 Gruppenübung 1</h3>
              <p className="text-sm mb-2"><strong>Kanon-Klatschen:</strong></p>
              <ul className="text-sm space-y-1">
                <li>Gruppe 1 beginnt einen Rhythmus</li>
                <li>Gruppe 2 beginnt 2 Schläge später</li>
                <li>Gruppe 3 beginnt 4 Schläge später</li>
                <li>Haltet den Rhythmus synchron!</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-2 border-yellow-300">
              <h3 className="font-bold text-xl mb-3">🥁 Gruppenübung 2</h3>
              <p className="text-sm mb-2"><strong>Polyrhythmus:</strong></p>
              <ul className="text-sm space-y-1">
                <li>Gruppe 1: Klatscht alle 3 Schläge</li>
                <li>Gruppe 2: Klatscht alle 4 Schläge</li>
                <li>Gruppe 3: Klatscht alle 5 Schläge</li>
                <li>Kombiniert für komplexe Muster!</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-300">
              <h3 className="font-bold text-xl mb-3">🎭 Gruppenübung 3</h3>
              <p className="text-sm mb-2"><strong>Dramatische Darstellung:</strong></p>
              <ul className="text-sm space-y-1">
                <li>Langsam: Trauriger Abschied</li>
                <li>Schnell: Schlachtengetümmel</li>
                <li>Unregelmäßig: Regen tropft</li>
                <li>Crescendo: Aufziehender Sturm</li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl max-w-4xl w-full">
            <h3 className="text-2xl font-bold mb-4 text-center">🎵 Chinesische Rhythmuskonzepte</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1">Ban (板) - Starke Schläge</p>
                <p className="opacity-90">Die betonten Hauptschläge eines Taktes</p>
              </div>
              <div>
                <p className="font-bold mb-1">Yan (眼) - Schwache Schläge</p>
                <p className="opacity-90">Die unbetonten Nebenschläge</p>
              </div>
              <div>
                <p className="font-bold mb-1">San Ban (散板) - Freier Rhythmus</p>
                <p className="opacity-90">Ohne festes Tempo, improvisatorisch</p>
              </div>
              <div>
                <p className="font-bold mb-1">Yi Ban Yi Yan (一板一眼)</p>
                <p className="opacity-90">1:1 Verhältnis, ähnlich 2/4 Takt</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Folie 16: Gruppen-Musikpraxis
    {
      id: 15,
      title: 'Gruppen-Musikpraxis',
      type: 'group-practice',
      content: (
        <div className="flex flex-col items-center justify-start h-full p-8 space-y-6">
          <h2 className="text-5xl font-bold text-red-800">Praktischer Teil: Gemeinsam musizieren!</h2>
          <p className="text-2xl text-gray-700 text-center max-w-4xl">
            Jetzt wird die ganze Gruppe aktiv! Bildet ein chinesisches Ensemble und spielt zusammen.
          </p>
          
          <GroupMusicActivity />
        </div>
      )
    },

    // Folie 17: Quiz
    {
      id: 16,
      title: 'Quiz',
      type: 'quiz',
      content: (
        <div className="flex flex-col items-center justify-start h-full p-8">
          <h2 className="text-5xl font-bold text-red-800 mb-4">Quiz: Testet euer Wissen!</h2>
          <p className="text-2xl text-gray-600 mb-8 text-center max-w-3xl">
            Was habt ihr über klassische chinesische Musik gelernt? Zeigt es im Quiz!
          </p>
          <InstrumentQuiz />
        </div>
      )
    },

    // Folie 18: Zusammenfassung
    {
      id: 17,
      title: 'Zusammenfassung',
      type: 'end',
      content: (
        <div className="flex flex-col items-center justify-start h-full gap-8 p-12">
          <h2 className="text-6xl font-bold text-red-800 text-center">谢谢! (Xièxiè)</h2>
          <p className="text-3xl text-gray-700 text-center">Vielen Dank für eure Aufmerksamkeit!</p>
          
          <div className="grid grid-cols-4 gap-6 max-w-6xl w-full">
            <Card className="bg-gradient-to-br from-red-100 to-red-200 border-4 border-red-300">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🏛️</div>
                <h3 className="font-bold text-xl mb-2">3000+ Jahre</h3>
                <p className="text-sm">Geschichte und Tradition</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-300">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🎵</div>
                <h3 className="font-bold text-xl mb-2">5 Töne</h3>
                <p className="text-sm">Pentatonische Skala</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-300">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">☯️</div>
                <h3 className="font-bold text-xl mb-2">Philosophie</h3>
                <p className="text-sm">Konfuzianismus & Taoismus</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-300">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🎸</div>
                <h3 className="font-bold text-xl mb-2">8+ Instrumente</h3>
                <p className="text-sm">Vielfältige Klangwelt</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl w-full">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-purple-200">
              <CardHeader>
                <CardTitle className="text-3xl text-center">🌟 Wichtigste Erkenntnisse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎭</span>
                      <div>
                        <p className="font-bold">Musik als Lebensphilosophie</p>
                        <p className="text-sm">Nicht nur Unterhaltung, sondern Werkzeug zur Selbstkultivierung und gesellschaftlichen Harmonie</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌊</span>
                      <div>
                        <p className="font-bold">Verbindung zur Natur</p>
                        <p className="text-sm">Instrumente aus natürlichen Materialien, Melodien inspiriert von Naturphänomenen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚖️</span>
                      <div>
                        <p className="font-bold">Balance und Harmonie</p>
                        <p className="text-sm">Yin und Yang, die fünf Elemente - alles strebt nach Gleichgewicht</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <p className="font-bold">Pentatonik als Grundlage</p>
                        <p className="text-sm">Fünf Töne entsprechen fünf Elementen - einfach aber ausdrucksstark</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏺</span>
                      <div>
                        <p className="font-bold">Lebendige Tradition</p>
                        <p className="text-sm">Von antiken Knochenflöten bis zu modernen Orchestern - eine durchgehende Linie</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌏</span>
                      <div>
                        <p className="font-bold">Globaler Einfluss</p>
                        <p className="text-sm">Pentatonik findet sich in vielen Musikkulturen weltweit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-8 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white rounded-2xl max-w-4xl w-full text-center">
            <p className="text-2xl font-bold mb-3">🎼 Weiterführende Exploration</p>
            <p className="text-lg leading-relaxed">
              Hört euch klassische chinesische Musikstücke an, besucht Konzerte, 
              oder versucht selbst ein Instrument zu lernen. Die Reise hat erst begonnen!
            </p>
          </div>

          <div className="text-4xl font-bold text-gray-700 mt-4">
            <span className="text-red-700">中国音乐</span> • Zhōngguó Yīnyuè • Chinesische Musik
          </div>
        </div>
      )
    },

    // Folie 19: Quellen
    {
      id: 18,
      title: 'Quellen',
      type: 'sources',
      content: (
        <div className="flex flex-col justify-start h-full p-12 space-y-8">
          <h2 className="text-5xl font-bold text-red-800 text-center mb-4">Quellen und Referenzen</h2>
          
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl">📚 Literatur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-bold">Thrasher, Alan R. (2008)</p>
                  <p className="italic">Chinese Musical Instruments</p>
                  <p className="text-xs text-gray-600">Oxford University Press</p>
                </div>
                <div>
                  <p className="font-bold">Liang, Mingyue (1985)</p>
                  <p className="italic">Music of the Billion: An Introduction to Chinese Musical Culture</p>
                  <p className="text-xs text-gray-600">Heinrichshofen Edition</p>
                </div>
                <div>
                  <p className="font-bold">Jones, Stephen (2007)</p>
                  <p className="italic">The Cambridge Companion to the Orchestra</p>
                  <p className="text-xs text-gray-600">Cambridge University Press</p>
                </div>
                <div>
                  <p className="font-bold">DeWoskin, Kenneth J. (1982)</p>
                  <p className="italic">A Song for One or Two: Music and the Concept of Art in Early China</p>
                  <p className="text-xs text-gray-600">University of Michigan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="text-2xl">🌐 Online-Ressourcen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-bold">UNESCO Intangible Cultural Heritage</p>
                  <p className="italic">Chinese Traditional Music and Instruments</p>
                  <p className="text-xs text-gray-600">ich.unesco.org</p>
                </div>
                <div>
                  <p className="font-bold">The Metropolitan Museum of Art</p>
                  <p className="italic">Musical Instruments in Chinese Culture</p>
                  <p className="text-xs text-gray-600">metmuseum.org</p>
                </div>
                <div>
                  <p className="font-bold">China National Traditional Orchestra</p>
                  <p className="italic">Traditional Chinese Instruments Guide</p>
                  <p className="text-xs text-gray-600">cnto.org</p>
                </div>
                <div>
                  <p className="font-bold">Grove Music Online</p>
                  <p className="italic">Chinese Music Theory and History</p>
                  <p className="text-xs text-gray-600">oxfordmusiconline.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <CardTitle className="text-2xl">🎓 Akademische Quellen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-bold">Konfuzius (ca. 500 v. Chr.)</p>
                  <p className="italic">Lunyu (论语) - Die Gespräche</p>
                  <p className="text-xs text-gray-600">Klassische Texte zur Musikphilosophie</p>
                </div>
                <div>
                  <p className="font-bold">Laozi (ca. 600 v. Chr.)</p>
                  <p className="italic">Daodejing (道德经)</p>
                  <p className="text-xs text-gray-600">Taoistische Philosophie und Musik</p>
                </div>
                <div>
                  <p className="font-bold">Shijing (诗经)</p>
                  <p className="italic">Das Buch der Lieder</p>
                  <p className="text-xs text-gray-600">ca. 1000-600 v. Chr., Zhou-Dynastie</p>
                </div>
                <div>
                  <p className="font-bold">Yueji (乐记)</p>
                  <p className="italic">Aufzeichnungen über Musik</p>
                  <p className="text-xs text-gray-600">Teil des Liji (Buch der Riten)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl">🖼️ Bildquellen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-bold">Unsplash</p>
                  <p className="italic">Freie Bilddatenbank für Instrumente und kulturelle Motive</p>
                  <p className="text-xs text-gray-600">unsplash.com</p>
                </div>
                <div>
                  <p className="font-bold">Fotografen</p>
                  <p className="text-xs">Verschiedene Fotografen haben ihre Werke zur Verfügung gestellt</p>
                </div>
                <div className="pt-2 border-t border-orange-200">
                  <p className="font-bold text-xs">Hinweis zu Bildern:</p>
                  <p className="text-xs">Alle verwendeten Bilder stammen aus lizenzfreien Quellen und dienen ausschließlich zu Bildungszwecken</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto w-full">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <p className="text-lg font-bold">📅 Letzter Zugriff auf alle Online-Quellen:</p>
                  <p className="text-2xl font-bold text-red-700">16. Februar 2026</p>
                  <div className="pt-4 mt-4 border-t border-gray-300">
                    <p className="text-sm text-gray-600">
                      Diese Präsentation wurde zu Bildungszwecken erstellt und basiert auf 
                      wissenschaftlichen Quellen sowie traditionellem Wissen über chinesische Musik.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-center max-w-4xl mx-auto">
            <p className="text-lg font-bold mb-2">💡 Hinweis zur Navigation</p>
            <p className="text-base">
              Sie können durch die Folien mit den <strong>Pfeiltasten (← →)</strong> oder einem 
              <strong> Präsenter</strong> navigieren. Alternativ nutzen Sie die Navigationstasten 
              im Header oder die Fortschrittsleiste unten.
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>Erstellt mit Figma Make • Interaktive Präsentation über klassische chinesische Musik</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation with arrow keys and presenter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Navigation Header */}
      <div className="bg-white shadow-lg px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Music className="w-10 h-10 text-red-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Klassische Chinesische Musik</h1>
            <p className="text-sm text-gray-500">{slides[currentSlide].title}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-gray-600 px-4 py-2 bg-gray-100 rounded-lg">
            Folie {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-2">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="sm"
              className="px-3"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              size="sm"
              className="px-3"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar and Mini Navigation */}
      <div className="bg-white px-8 py-4 shadow-lg">
        <div className="flex items-center gap-4 mb-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`
                flex-1 h-2 rounded-full transition-all duration-300
                ${index === currentSlide 
                  ? 'bg-gradient-to-r from-red-600 to-orange-600' 
                  : index < currentSlide
                  ? 'bg-red-300'
                  : 'bg-gray-200 hover:bg-gray-300'
                }
              `}
              title={slide.title}
            />
          ))}
        </div>
        <div className="flex justify-center gap-1 text-xs text-gray-500 flex-wrap">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`
                px-2 py-1 rounded transition-colors
                ${index === currentSlide 
                  ? 'bg-red-600 text-white font-bold' 
                  : 'hover:bg-gray-200'
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
