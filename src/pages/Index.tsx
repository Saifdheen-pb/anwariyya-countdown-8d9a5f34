import { useMemo } from 'react';
import StarBackground from '@/components/StarBackground';
import MosqueSilhouette from '@/components/MosqueSilhouette';
import CrescentMoon from '@/components/CrescentMoon';
import CountdownRing from '@/components/CountdownRing';
import QuoteRotator from '@/components/QuoteRotator';
import useCountdown from '@/hooks/useCountdown';

const Index = () => {
  // Target date: January 31, 2026 at midnight
  const targetDate = useMemo(() => new Date('2026-01-31T00:00:00'), []);
  const timeLeft = useCountdown(targetDate);
  
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const endDate = targetDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <StarBackground />
      <MosqueSilhouette />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="pt-8 md:pt-12 lg:pt-16 px-4 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CrescentMoon size={32} className="animate-float" />
            <h1 className="font-amiri text-3xl md:text-4xl lg:text-5xl text-gradient-gold">
              عِلْم
            </h1>
            <CrescentMoon size={32} className="animate-float animation-delay-200" />
          </div>
          
          <h2 className="font-amiri text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
            Anwariyya Arabic College
          </h2>
          
          <p className="font-outfit text-sm md:text-base text-muted-foreground tracking-widest uppercase">
            Course Completion Countdown
          </p>
          
          {/* Golden decorative line */}
          <div className="golden-line w-48 md:w-64 mx-auto mt-6" />
        </header>

        {/* Countdown Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
          {/* Countdown Rings */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mb-12 md:mb-16">
            <CountdownRing 
              value={timeLeft.days} 
              maxValue={365} 
              label="Days" 
              size="md"
              delay={0}
            />
            <CountdownRing 
              value={timeLeft.hours} 
              maxValue={24} 
              label="Hours" 
              size="md"
              delay={100}
            />
            <CountdownRing 
              value={timeLeft.minutes} 
              maxValue={60} 
              label="Minutes" 
              size="md"
              delay={200}
            />
            <CountdownRing 
              value={timeLeft.seconds} 
              maxValue={60} 
              label="Seconds" 
              size="md"
              delay={300}
            />
          </div>

          {/* Date Awareness Section */}
          <div className="glass-card rounded-2xl px-6 py-4 md:px-8 md:py-5 mb-12 md:mb-16 text-center animate-fade-in-up animation-delay-400">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-3">
              <div>
                <span className="font-outfit text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                  Today is
                </span>
                <span className="font-outfit text-sm md:text-base text-foreground">
                  {today}
                </span>
              </div>
              
              <div className="hidden md:block w-px h-10 bg-border" />
              
              <div>
                <span className="font-outfit text-xs text-accent uppercase tracking-wider block mb-1">
                  Course Ends
                </span>
                <span className="font-outfit text-sm md:text-base text-accent font-medium">
                  {endDate}
                </span>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="w-full animate-fade-in-up animation-delay-600">
            <QuoteRotator />
          </div>
        </main>

        {/* Footer Section */}
        <footer className="py-8 md:py-12 px-4 text-center">
          <div className="golden-line w-32 mx-auto mb-6" />
          
          <p className="font-playfair italic text-muted-foreground text-sm md:text-base mb-2">
            "A journey of knowledge, discipline, and completion"
          </p>
          
          <p className="font-outfit text-xs text-muted-foreground/60 tracking-wider uppercase">
            Anwariyya Arabic College • {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
