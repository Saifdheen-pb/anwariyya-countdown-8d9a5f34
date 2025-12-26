import { useEffect, useState } from 'react';

const quotes = [
  {
    text: "Knowledge is not what is memorized, but what benefits.",
    author: "Imam Al-Shafi'i"
  },
  {
    text: "Seek knowledge from the cradle to the grave.",
    author: "Prophet Muhammad ﷺ"
  },
  {
    text: "The ink of the scholar is more sacred than the blood of the martyr.",
    author: "Islamic Proverb"
  },
  {
    text: "Patience is the key to relief.",
    author: "Arabic Wisdom"
  },
  {
    text: "With hardship comes ease.",
    author: "Quran 94:5"
  },
  {
    text: "The seeking of knowledge is obligatory for every Muslim.",
    author: "Prophet Muhammad ﷺ"
  },
  {
    text: "He who travels in search of knowledge, travels along Allah's path to paradise.",
    author: "Prophet Muhammad ﷺ"
  }
];

const QuoteRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4">
      <div 
        className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <blockquote className="relative">
          {/* Opening quote mark */}
          <span className="absolute -top-6 -left-2 text-6xl text-accent/20 font-amiri select-none">
            "
          </span>
          
          <p className="font-playfair italic text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed">
            {currentQuote.text}
          </p>
          
          {/* Closing quote mark */}
          <span className="absolute -bottom-10 -right-2 text-6xl text-accent/20 font-amiri select-none">
            "
          </span>
        </blockquote>
        
        <footer className="mt-4 font-outfit text-sm text-accent/80 tracking-wide">
          — {currentQuote.author}
        </footer>
      </div>
      
      {/* Quote indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsVisible(true);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent w-6' 
                : 'bg-foreground/20 hover:bg-foreground/40'
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteRotator;
