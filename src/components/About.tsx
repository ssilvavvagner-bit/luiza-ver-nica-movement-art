const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-4">
            Sobre
          </h2>
          <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Luiza Verônica</span> é Licenciada em Dança pela UFRGS e Mestranda em Ciências do Movimento Humano na mesma instituição.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Atua como dançarina, pesquisadora, professora e coreógrafa, dedicando-se a criar espaços de experimentação onde técnica e expressividade caminham juntas.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Seu trabalho coreográfico busca traduzir em movimento as tensões e delicadezas da experiência humana, criando obras que dialogam com temas como memória, identidade e pertencimento.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-card shadow-card">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground font-body text-sm">Foto de perfil</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
            </div>
          </div>

          {/* Academic Info */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-card shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
              Formação Acadêmica
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
                <p className="font-body text-primary font-medium">Mestrado em andamento</p>
                <p className="font-body text-muted-foreground">Ciências do Movimento Humano - UFRGS</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-body text-primary font-medium">Graduação</p>
                <p className="font-body text-muted-foreground">Licenciatura em Dança - UFRGS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
