import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Turma de Contemporâneo - Iniciantes',
    date: '2025 • Segundas e Quartas',
    time: '19h - 20h30',
    location: 'Porto Alegre, RS',
    status: 'Inscrições Abertas',
    statusColor: 'bg-green-500/20 text-green-400',
  },
  {
    id: 2,
    title: 'Workshop Intensivo de Improvisação',
    date: '15-16 de Fevereiro, 2025',
    time: '10h - 17h',
    location: 'São Paulo, SP',
    status: 'Últimas vagas',
    statusColor: 'bg-orange-500/20 text-orange-400',
  },
  {
    id: 3,
    title: 'Espetáculo "Fragmentos"',
    date: '22 de Março, 2025',
    time: '20h',
    location: 'Teatro São Pedro - POA',
    status: 'Em breve',
    statusColor: 'bg-primary/20 text-primary',
  },
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-4">
          Agenda
        </h2>
        <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-6" />
        <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Próximos eventos, aulas e apresentações. Fique por dentro da programação.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group p-6 md:p-8 rounded-xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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

                <button className="px-6 py-3 rounded-lg bg-gradient-accent text-foreground font-body font-medium hover:shadow-glow transition-all duration-300 whitespace-nowrap">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-center text-muted-foreground mt-12">
          Quer receber novidades sobre novos eventos?{' '}
          <a href="#contato" className="text-primary hover:underline">
            Entre em contato
          </a>
        </p>
      </div>
    </section>
  );
};

export default Agenda;
