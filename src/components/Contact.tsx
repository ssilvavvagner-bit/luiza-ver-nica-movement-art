import { useState } from 'react';
import { Send, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Responderei em breve.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

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

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-body text-sm text-foreground mb-2">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">Selecione um assunto</option>
                <option value="aulas">Aulas de Dança</option>
                <option value="workshop">Workshops</option>
                <option value="coreografia">Coreografia</option>
                <option value="consultoria">Consultoria de Pesquisa</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg bg-gradient-accent text-foreground font-body font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : (
                <>
                  Enviar mensagem
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
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
