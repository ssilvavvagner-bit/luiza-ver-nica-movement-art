import { Calendar, MapPin, Clock } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const events = [
  {
    id: 1,
    title: 'Turma de Contemporâneo - Iniciantes',
    date: '2026 • Segundas e Quartas',
    time: '19h - 20h30',
    location: 'Porto Alegre, RS',
    status: 'Inscrições Abertas',
    statusColor: 'bg-green-500/20 text-green-400',
  },
  {
    id: 2,
    title: 'Workshop Intensivo de Improvisação',
    date: '15-16 de Abril, 2026',
    time: '10h - 17h',
    location: 'São Paulo, SP',
    status: 'Últimas vagas',
    statusColor: 'bg-orange-500/20 text-orange-400',
  },
  {
    id: 3,
    title: 'Espetáculo "Fragmentos"',
    date: '22 de Maio, 2026',
    time: '20h',
    location: 'Teatro São Pedro - POA',
    status: 'Em breve',
    statusColor: 'bg-primary/20 text-primary',
  },
];

const Agenda = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (eventTitle: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set('evento', eventTitle);

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}#contato`;
    window.history.replaceState({}, '', nextUrl);
    window.dispatchEvent(new Event('site:evento-selecionado'));
    scrollToContact();
  };

  return (
    <section id="agenda" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <Reveal delay={100}>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.15] text-foreground text-center mb-5">
              Agenda
            </h2>
            <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-6" />
          </div>
        </Reveal>
        <Reveal delay={260} direction="none">
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Próximos eventos, aulas e apresentações. Fique por dentro da programação.
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event, index) => (
            <Reveal key={event.id} delay={340 + index * 100} direction="up">
              <div className="group p-6 md:p-8 rounded-xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-body font-medium ${event.statusColor}`}>
                        {event.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2 font-body text-sm">
                        <Calendar size={16} className="text-primary" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2 font-body text-sm">
                        <Clock size={16} className="text-primary" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2 font-body text-sm">
                        <MapPin size={16} className="text-primary" />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLearnMore(event.title)}
                    className="px-6 py-3 rounded-lg bg-gradient-accent text-foreground font-body font-medium hover:shadow-glow transition-all duration-300 whitespace-nowrap"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={700} direction="none">
          <p className="font-body text-center text-muted-foreground mt-12">
            Quer receber novidades sobre novos eventos?{' '}
            <a href="#contato" className="text-primary hover:underline">
              Entre em contato
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Agenda;
