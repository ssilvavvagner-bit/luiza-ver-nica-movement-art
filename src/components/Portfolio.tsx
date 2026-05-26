import { useState } from 'react';
import { Play, X } from 'lucide-react';
import academicoLicenciatura from '@/assets/Licenciatura em Dança.jpeg';
import laureaAcademica from '@/assets/laurea academica.jpg';
import manoBrown from '@/assets/manobrown.jpg';
import fotoBio from '@/assets/1. Foto para Bio.jpg';
import rosto from '@/assets/3. ROSTO STUDIO.jpg';
import fotocapa from '@/assets/modeloup.jpeg';
import destaqueImg from '@/assets/destaque.jpeg';
import destaquesImg from '@/assets/destaque1.12.jpeg';
import ensaioFotografico from '@/assets/Ensaiofotografico.jpg';
import performanceAtrizDancarina from '@/assets/PERFORMANCE Atriz e Dançarina Madalena.6.jpg';
import performanceDancarinaCirco from '@/assets/PERFORMANCEDançarina Circo.jpg';
import performanceMelhorBailarina from '@/assets/PERFORMANCEMelhor Bailarina do MUV Festival Butiá em Dança.jpg';
import bailarinaSemana from '@/assets/sesc.jpeg';
import robotImg from '@/assets/robot.jpeg';
import Reveal from '@/components/ui/Reveal';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  thumbnail: string;
  title: string;
  category: string;
  details?: string;
  featured?: boolean;
  videoUrl?: string;
  externalUrl?: string;
  objectPosition?: string;
};

const portfolioItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    thumbnail: performanceAtrizDancarina,
    title: 'Atriz e Dançarina',
    category: 'Performance',
    details: 'Espetáculo: A paixão de Cristo - 2025',
  },
  { id: 2, type: 'video', thumbnail: 'https://img.youtube.com/vi/I9iSfFIMUBk/hqdefault.jpg', title: 'Show Mano Brown', category: 'Vídeo', videoUrl: 'https://www.youtube.com/embed/I9iSfFIMUBk' },
  { id: 3, type: 'image', thumbnail: ensaioFotografico, title: '', category: 'Fotografia' },
  { id: 15, type: 'image', thumbnail: fotoBio, title: '', category: 'Fotografia' },
  { id: 16, type: 'image', thumbnail: rosto, title: '', category: 'Fotografia' },
  {
    id: 17,
    type: 'image',
    thumbnail: fotocapa,
    title: 'Modelo UP',
    category: 'Fotografia',
    externalUrl: 'https://www.instagram.com/reel/DJE7tY3OXRs/?igsh=MW81ZGJqbmU0eDV1aQ==',
  },
  { id: 4, type: 'image', thumbnail: performanceDancarinaCirco, title: 'Dançarina Circo', category: 'Performance' },
  { id: 5, type: 'video', thumbnail: 'https://img.youtube.com/vi/G65qSwj4Q_s/hqdefault.jpg', title: 'Flor do Gueto - Mano Brown', category: 'Vídeo', videoUrl: 'https://www.youtube.com/embed/G65qSwj4Q_s' },
  {
    id: 6,
    type: 'image',
    thumbnail: performanceMelhorBailarina,
    title: 'Coreografia: É tudo Ismalia',
    category: 'Destaques',
    featured: true,
    details: 'Destaque Melhor Bailarina MUV Festival - 2025\nIndicacao Destaque Coreografa MUV Festival\nMelhor Bailarina Butia em Danca - 2025.',
  },
  { id: 7, type: 'image', thumbnail: academicoLicenciatura, title: 'Licenciatura em Dança', category: 'Acadêmico' },
  { id: 14, type: 'image', thumbnail: laureaAcademica, title: 'Láurea Acadêmica', category: 'Acadêmico' },
  {
    id: 18,
    type: 'image',
    thumbnail: manoBrown,
    title: 'Bailarina Festival Turá',
    category: 'Performance',
  },
  {
    id: 19,
    type: 'image',
    thumbnail: bailarinaSemana,
    title: 'Bailarina da semana S',
    category: 'Performance',
    details: 'Evento promovido pelo SESC RS',
  },
  {
    id: 8,
    type: 'image',
    thumbnail: destaqueImg,
    title: 'Coreografia: Black Barbie',
    category: 'Destaques',
    featured: true,
    details: 'Destaque Melhor Bailarina\nDestaque Coreografia Jaguarão em Dança 2023;\nDestaque Melhor Bailarina Jaguarão em Dança 2023;\nDestaque Coreógrafa Jaguarão em Dança 2023;\nDestaque Melhor Bailarina da noite Bagé em Dança 2019;\nDestaque Garopaba em Dança 2022;\nCoreografia convidada para mostra de dança no evento MDA de Veranópolis.',
  },
  { id: 9, type: 'video', thumbnail: 'https://img.youtube.com/vi/lnnvqjyY8ic/hqdefault.jpg', title: 'Animation', category: 'Vídeo', videoUrl: 'https://www.youtube.com/embed/lnnvqjyY8ic' },
  {
    id: 20,
    type: 'video',
    thumbnail: robotImg,
    title: 'Robot Style',
    category: 'Vídeo',
    externalUrl: 'https://vt.tiktok.com/ZSx96SQV3/',
    objectPosition: 'top',
  },
  {
    id: 11,
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/5O-0ZvbUe2Y/hqdefault.jpg',
    title: 'Festival Danças Urbanas',
    category: 'Vídeo',
    videoUrl: 'https://www.youtube.com/embed/5O-0ZvbUe2Y',
  },
  {
    id: 12,
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/SeNhO7oNgGw/hqdefault.jpg',
    title: 'Paranóia - Ebony',
    category: 'Vídeo',
    videoUrl: 'https://www.youtube.com/embed/SeNhO7oNgGw',
  },
  {
    id: 13,
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/cQpyPtKV_rA/hqdefault.jpg',
    title: 'Coreografia',
    category: 'Vídeo',
    videoUrl: 'https://www.youtube.com/embed/cQpyPtKV_rA',
  },
  {
    id: 10,
    type: 'image',
    thumbnail: destaquesImg,
    title: 'Coreografia: Robot Girl',
    category: 'Destaques',
    featured: true,
    details: 'Premiada em primeiro lugar - Pelotas em Dança - 2017\nDestaque da noite e melhor bailarina - Vem Dançar Sul da América - 2017\nCoreografia apresentada na Feira do Livro - Guaíba -2017',
  },
];

const categories = ['Todos', 'Destaques', 'Performance', 'Vídeo', 'Fotografia', 'Acadêmico'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = activeCategory === 'Todos'
    ? portfolioItems
    : activeCategory === 'Destaques'
      ? portfolioItems.filter(item => item.featured)
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <Reveal delay={100}>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-4">
              Portfólio
            </h2>
            <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-12" />
          </div>
        </Reveal>

        {/* Category Filter */}
        <Reveal delay={300} direction="none" className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-sm px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-accent text-foreground shadow-glow'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 50, 500)} direction="up">
              <button
                onClick={() => {
                  if (item.externalUrl) {
                    window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
                    return;
                  }

                  setSelectedItem(item);
                }}
                className="group relative aspect-square w-full rounded-lg overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500"
              >
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground font-body text-xs">{item.title}</span>
                  </div>
                )}

                {item.type === 'video' && (
                  <>
                    {/* Overlay hover — desktop only */}
                    <div className="absolute inset-0 bg-background/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center p-4">
                      <Play className="text-primary" size={32} />
                    </div>

                    {/* Play badge — mobile only */}
                    <div className="absolute top-2 right-2 md:hidden w-8 h-8 rounded-full bg-background/80 flex items-center justify-center">
                      <Play className="text-primary" size={14} />
                    </div>
                  </>
                )}
              </button>
            </Reveal>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
              {selectedItem.type === 'video' && selectedItem.videoUrl ? (
                <div className="w-full aspect-video">
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : selectedItem.thumbnail ? (
                <>
                  <img
                    src={selectedItem.thumbnail}
                    alt={selectedItem.title}
                    className={`max-w-full object-contain rounded-lg ${selectedItem.title || selectedItem.details ? 'max-h-[72vh]' : 'max-h-[90vh]'}`}
                  />
                  {(selectedItem.title || selectedItem.details) && (
                    <div className="max-w-2xl text-center space-y-2">
                      {selectedItem.title && (
                        <p className="font-display text-xl text-foreground">{selectedItem.title}</p>
                      )}
                      {selectedItem.details && (
                        <p className="font-body text-sm md:text-base text-muted-foreground whitespace-pre-line">
                          {selectedItem.details}
                        </p>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center bg-gradient-card rounded-lg p-8">
                  <p className="font-display text-2xl text-foreground mb-2">{selectedItem.title}</p>
                  <p className="font-body text-muted-foreground">{selectedItem.category}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
