import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contato" className="py-24 md:py-32 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-4">
          Contato
        </h2>
        <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-6" />
        <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Tem alguma pergunta ou quer trabalhar comigo? Entre em contato!
        </p>

        <div className="max-w-md mx-auto text-center">
          <p className="mb-8 text-foreground font-body text-base">
            Para entrar em contato diretamente, clique no botão abaixo para enviar um e-mail.
          </p>
          <a
            href="mailto:luizaaveronica@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-gradient-accent text-foreground font-body font-medium hover:shadow-glow transition-all duration-300"
          >
            Enviar e-mail
            <Mail size={18} />
          </a>
        </div>
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
