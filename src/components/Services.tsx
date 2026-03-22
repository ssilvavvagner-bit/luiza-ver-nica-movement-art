import { Users, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    icon: Users,
    title: 'Aulas de Dança',
    description: 'Aulas regulares de dança contemporânea para diversos níveis, do iniciante ao avançado. Metodologia que integra técnica, expressividade e consciência corporal.',
    features: ['Turmas regulares', 'Aulas particulares', 'Todos os níveis'],
  },
  {
    icon: Sparkles,
    title: 'Workshops',
    description: 'Workshops intensivos focados em temas específicos como improvisação, composição coreográfica e práticas somáticas.',
    features: ['Fins de semana intensivos', 'Grupos e empresas', 'Certificado incluso'],
  },
  {
    icon: BookOpen,
    title: 'Coreografia',
    description: 'Criação de coreografias personalizadas para espetáculos, eventos, videoclipes e produções artísticas.',
    features: ['Espetáculos', 'Eventos corporativos', 'Produções audiovisuais'],
  },
  {
    icon: Lightbulb,
    title: 'Consultoria de Pesquisa',
    description: 'Orientação e consultoria para projetos de pesquisa em dança, movimento e áreas afins. Suporte metodológico e teórico.',
    features: ['TCC e Dissertações', 'Projetos artísticos', 'Curadoria'],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <Reveal delay={100}>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.15] text-foreground text-center mb-5">
              Serviços
            </h2>
            <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-6" />
          </div>
        </Reveal>
        <Reveal delay={260} direction="none">
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Trabalho com diferentes formatos para atender suas necessidades artísticas, pedagógicas e acadêmicas.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={340 + index * 120} direction="up">
              <div className="group p-8 rounded-xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/30">
                <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-foreground" size={28} />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="font-body text-sm text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
