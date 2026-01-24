import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-dancer.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luiza Verônica dançando"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Dançarina • Coreógrafa • Pesquisadora
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-gradient mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Luiza Verônica
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Movimento como expressão, arte como pesquisa
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
