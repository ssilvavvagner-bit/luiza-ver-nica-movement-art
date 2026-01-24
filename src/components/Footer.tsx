import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-semibold text-foreground mb-2">
              Luiza Verônica
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Dançarina • Coreógrafa • Pesquisadora
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/luizaaveronica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contato@luizaveronica.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
            <span className="flex items-center gap-2 text-muted-foreground font-body text-sm">
              <MapPin size={16} />
              Porto Alegre, RS
            </span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Luiza Verônica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
