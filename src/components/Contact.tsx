import { useEffect, useMemo, useState } from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const Contact = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  useEffect(() => {
    const readSelectedEvent = () => {
      const params = new URLSearchParams(window.location.search);
      const eventName = params.get('evento');
      setSelectedEvent(eventName);

      if (eventName) {
        params.delete('evento');
        const query = params.toString();
        const cleanUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
        window.history.replaceState({}, '', cleanUrl);
      }
    };

    readSelectedEvent();
    window.addEventListener('popstate', readSelectedEvent);
    window.addEventListener('hashchange', readSelectedEvent);
    window.addEventListener('site:evento-selecionado', readSelectedEvent as EventListener);

    return () => {
      window.removeEventListener('popstate', readSelectedEvent);
      window.removeEventListener('hashchange', readSelectedEvent);
      window.removeEventListener('site:evento-selecionado', readSelectedEvent as EventListener);
    };
  }, []);

  const mailToHref = useMemo(() => {
    if (!selectedEvent) {
      return 'mailto:luizaaveronica@gmail.com';
    }

    const subject = encodeURIComponent(`Interesse no evento: ${selectedEvent}`);
    const body = encodeURIComponent(
      `Ola Luiza, tenho interesse no evento "${selectedEvent}". Poderia me enviar mais informacoes?`,
    );

    return `mailto:luizaaveronica@gmail.com?subject=${subject}&body=${body}`;
  }, [selectedEvent]);

  return (
    <section id="contato" className="py-24 md:py-32 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <Reveal delay={100}>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-4">
              Contato
            </h2>
            <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-6" />
          </div>
        </Reveal>
        <Reveal delay={260} direction="none">
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Tem alguma pergunta ou quer trabalhar comigo? Entre em contato!
          </p>
        </Reveal>

        <Reveal delay={340} direction="up">
          <div className="max-w-md mx-auto text-center">
            {selectedEvent ? (
              <p className="mb-8 text-foreground font-body text-base">
                Voce selecionou o evento <span className="text-primary font-medium">{selectedEvent}</span>. Clique no botao abaixo para enviar um e-mail com essa referencia.
              </p>
            ) : (
              <p className="mb-8 text-foreground font-body text-base">
                Para entrar em contato diretamente, clique no botão abaixo para enviar um e-mail.
              </p>
            )}
            <a
              href={mailToHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-gradient-accent text-foreground font-body font-medium hover:shadow-glow transition-all duration-300"
            >
              Enviar e-mail
              <Mail size={18} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Floating Social Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40">
        <a
          href="https://instagram.com/luizaaveronica"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center text-foreground shadow-glow hover:scale-110 transition-transform duration-300"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://wa.me/5551992427280"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center text-foreground shadow-soft hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
