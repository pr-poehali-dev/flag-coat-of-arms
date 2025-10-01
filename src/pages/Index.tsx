import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Сколько горных вершин изображено на гербе Северной Осетии-Алании?',
      options: ['Пять', 'Семь', 'Девять', 'Три'],
      correct: 'Семь'
    },
    {
      id: 2,
      question: 'Какие цвета присутствуют на флаге республики?',
      options: ['Белый, синий, красный', 'Белый, красный, жёлтый', 'Красный, зелёный, белый', 'Жёлтый, синий, белый'],
      correct: 'Белый, красный, жёлтый'
    },
    {
      id: 3,
      question: 'Что символизирует барс на гербе республики?',
      options: ['Силу и мужество', 'Мудрость', 'Свободу', 'Единство'],
      correct: 'Силу и мужество'
    },
    {
      id: 4,
      question: 'В каком году был утверждён современный герб Северной Осетии-Алании?',
      options: ['1991', '1994', '1995', '2003'],
      correct: '1994'
    },
    {
      id: 5,
      question: 'Что символизирует белый цвет на флаге республики?',
      options: ['Снежные вершины гор', 'Чистоту помыслов', 'Мир и согласие', 'Все перечисленное'],
      correct: 'Чистоту помыслов'
    },
    {
      id: 6,
      question: 'Какой народ является предком современных осетин?',
      options: ['Аланы', 'Сарматы', 'Скифы', 'Хазары'],
      correct: 'Аланы'
    },
    {
      id: 7,
      question: 'Что изображено в верхней части герба над барсом?',
      options: ['Звезда', 'Луна', 'Солнце', 'Крест'],
      correct: 'Солнце'
    },
    {
      id: 8,
      question: 'Какая форма у герба Северной Осетии-Алании?',
      options: ['Круглая', 'Квадратная', 'Треугольная', 'Прямоугольная'],
      correct: 'Круглая'
    },
    {
      id: 9,
      question: 'Что символизирует жёлтый цвет на флаге?',
      options: ['Золото и богатство', 'Солнце', 'Изобилие земли', 'Пшеничные поля'],
      correct: 'Изобилие земли'
    },
    {
      id: 10,
      question: 'В каком направлении обращён барс на гербе?',
      options: ['Влево от зрителя', 'Вправо от зрителя', 'Прямо на зрителя', 'Назад'],
      correct: 'Вправо от зрителя'
    }
  ];

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const getScore = () => {
    return questions.filter(q => selectedAnswers[q.id] === q.correct).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-yellow-50/30">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Icon name="Mountain" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Символика Северной Осетии-Алании</h1>
              <p className="text-sm text-muted-foreground">Герб, флаг и история республики</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4 animate-fade-in">
              <Badge variant="secondary" className="text-sm">Государственные символы</Badge>
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Герб и флаг<br />
                <span className="text-primary">Республики Северная Осетия-Алания</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Государственная символика отражает историю, культуру и природу региона, расположенного в самом сердце Кавказа.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/3e549d2a-0d62-4cba-9652-af4dd16ec133.jpg" 
                alt="Герб" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover-scale"
                style={{ transform: 'rotate(-3deg)' }}
              />
              <img 
                src="/img/529961ce-34a9-4731-87e9-52edd46099bc.jpg" 
                alt="Флаг" 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover-scale"
                style={{ transform: 'rotate(2deg)', marginTop: '2rem' }}
              />
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Shield" className="text-primary" size={28} />
                <CardTitle className="text-2xl">Герб Северной Осетии-Алании</CardTitle>
              </div>
              <CardDescription>Официальный символ республики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Герб Республики Северная Осетия-Алания представляет собой круглый геральдический щит, 
                в червленом (красном) поле которого изображён серебряный барс с золотыми пятнами, 
                обращённый вправо от зрителя.
              </p>
              <p className="text-foreground leading-relaxed">
                Над барсом располагаются семь золотых горных вершин, символизирующих семь исторических 
                районов Осетии. В верхней части щита изображено золотое солнце с лучами.
              </p>
              <Separator className="my-4" />
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="Info" size={18} className="text-primary" />
                  Символика элементов
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Барс</strong> — символизирует мужество, силу и благородство народа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Семь вершин</strong> — представляют семь исторических областей Осетии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Солнце</strong> — олицетворяет свет, тепло и процветание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Красный цвет</strong> — символ доблести и героизма</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Flag" className="text-primary" size={28} />
                <CardTitle className="text-xl">Флаг республики</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <div className="h-1/3 bg-white"></div>
                <div className="h-1/3 bg-red-600"></div>
                <div className="h-1/3 bg-yellow-400"></div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Флаг состоит из трёх равновеликих горизонтальных полос: белой, красной и жёлтой.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
                  <span className="text-muted-foreground">Чистота помыслов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-muted-foreground">Мужество народа</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                  <span className="text-muted-foreground">Изобилие земли</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16 animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Icon name="BookOpen" className="text-primary" size={28} />
              <CardTitle className="text-2xl">История символики</CardTitle>
            </div>
            <CardDescription>Формирование государственных символов республики</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Calendar" className="text-primary" size={20} />
                  </div>
                  <Badge variant="outline">1994 год</Badge>
                </div>
                <h4 className="font-semibold">Утверждение герба</h4>
                <p className="text-sm text-muted-foreground">
                  Современный герб был официально утверждён Парламентом республики 24 ноября 1994 года.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Palette" className="text-primary" size={20} />
                  </div>
                  <Badge variant="outline">Символизм</Badge>
                </div>
                <h4 className="font-semibold">Культурное наследие</h4>
                <p className="text-sm text-muted-foreground">
                  Элементы герба отражают древние традиции алан — предков современных осетин, единственного народа, сохранившего язык скифо-сарматской группы.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Mountain" className="text-primary" size={20} />
                  </div>
                  <Badge variant="outline">География</Badge>
                </div>
                <h4 className="font-semibold">Горная республика</h4>
                <p className="text-sm text-muted-foreground">
                  Северная Осетия расположена на Северном Кавказе, её территория включает высочайшие вершины Кавказского хребта, что нашло отражение в символике.
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="relative">
              <img 
                src="/img/adbcc23b-419a-4298-92cf-23a6b8d91c3a.jpg" 
                alt="Горы Осетии" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">Величественные вершины Кавказа</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="HelpCircle" className="text-primary" size={28} />
              <CardTitle className="text-2xl">Проверьте свои знания</CardTitle>
            </div>
            <CardDescription>Ответьте на вопросы о символике Северной Осетии-Алании</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {questions.map((q, idx) => (
                <div key={q.id} className="space-y-3">
                  <h4 className="font-semibold flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{q.question}</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 ml-8">
                    {q.options.map((option) => {
                      const isSelected = selectedAnswers[q.id] === option;
                      const isCorrect = option === q.correct;
                      const showCorrect = showResults && isCorrect;
                      const showIncorrect = showResults && isSelected && !isCorrect;

                      return (
                        <button
                          key={option}
                          onClick={() => !showResults && handleAnswerSelect(q.id, option)}
                          disabled={showResults}
                          className={`
                            p-3 rounded-lg border-2 text-left text-sm transition-all
                            ${isSelected && !showResults ? 'border-primary bg-primary/5' : 'border-border'}
                            ${showCorrect ? 'border-green-500 bg-green-50' : ''}
                            ${showIncorrect ? 'border-red-500 bg-red-50' : ''}
                            ${!showResults ? 'hover:border-primary/50 cursor-pointer' : 'cursor-not-allowed'}
                          `}
                        >
                          <div className="flex items-center gap-2">
                            {showCorrect && <Icon name="CheckCircle2" size={18} className="text-green-600" />}
                            {showIncorrect && <Icon name="XCircle" size={18} className="text-red-600" />}
                            <span>{option}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {idx < questions.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              {!showResults ? (
                <Button 
                  onClick={checkAnswers} 
                  size="lg"
                  disabled={Object.keys(selectedAnswers).length !== questions.length}
                  className="w-full sm:w-auto"
                >
                  <Icon name="CheckCircle2" size={18} className="mr-2" />
                  Проверить ответы
                </Button>
              ) : (
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="bg-primary/10 px-6 py-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Ваш результат</p>
                    <p className="text-2xl font-bold text-primary">
                      {getScore()} из {questions.length}
                    </p>
                  </div>
                  <Button onClick={resetQuiz} variant="outline" size="lg">
                    <Icon name="RotateCcw" size={18} className="mr-2" />
                    Попробовать снова
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Образовательный проект о государственной символике Республики Северная Осетия-Алания</p>
            <p className="mt-2">© 2024 • Создано на poehali.dev</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;