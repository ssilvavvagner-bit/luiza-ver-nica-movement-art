import { useState } from 'react';
import { Play, X } from 'lucide-react';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  thumbnail: string;
  title: string;
  category: string;
};

const portfolioItems: MediaItem[] = [
  { id: 1, type: 'image', thumbnail: '', title: 'Performance I', category: 'Performance' },
  { id: 2, type: 'video', thumbnail: '', title: 'Solo Contemporâneo', category: 'Vídeo' },
  { id: 3, type: 'image', thumbnail: '', title: 'Ensaio Fotográfico', category: 'Fotografia' },
  { id: 4, type: 'image', thumbnail: '', title: 'Coreografia Coletiva', category: 'Performance' },
  { id: 5, type: 'video', thumbnail: '', title: 'Workshop em SP', category: 'Vídeo' },
  { id: 6, type: 'image', thumbnail: '', title: 'Festival de Dança', category: 'Performance' },
  { id: 7, type: 'image', thumbnail: '', title: 'Projeto de Pesquisa', category: 'Acadêmico' },
  { id: 8, type: 'image', thumbnail: '', title: 'Espetáculo 2024', category: 'Performance' },
  { id: 9, type: 'video', thumbnail: '', title: 'Processo Criativo', category: 'Vídeo' },
];

const categories = ['Todos', 'Performance', 'Vídeo', 'Fotografia', 'Acadêmico'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = activeCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient text-center mb-4">
          Portfólio
        </h2>
        <div className="w-16 h-[2px] bg-gradient-accent mx-auto mb-12" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground font-body text-xs">{item.title}</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                {item.type === 'video' && (
                  <Play className="text-primary mb-2" size={32} />
                )}
                <p className="font-display text-lg text-foreground text-center">{item.title}</p>
                <p className="font-body text-sm text-muted-foreground">{item.category}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-2xl text-foreground mb-2">{selectedItem.title}</p>
                <p className="font-body text-muted-foreground">{selectedItem.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
