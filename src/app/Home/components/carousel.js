import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const works = [
  { id: 1, title: 'Œuvre en vogue 1', description: 'Description de l\'œuvre 1.', imageUrl: 'https://via.placeholder.com/400x300', backgroundImage: 'https://via.placeholder.com/800x300/CCCCCC/FFFFFF?text=Background+1' },
  { id: 2, title: 'Œuvre en vogue 2', description: 'Description de l\'œuvre 2.', imageUrl: 'https://via.placeholder.com/400x300', backgroundImage: 'https://via.placeholder.com/800x300/AAAAAA/FFFFFF?text=Background+2' },
  { id: 3, title: 'Œuvre en vogue 3', description: 'Description de l\'œuvre 3.', imageUrl: 'https://via.placeholder.com/400x300', backgroundImage: 'https://via.placeholder.com/800x300/888888/FFFFFF?text=Background+3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 3000);
    return () => clearInterval(timer); // Nettoyage de l'intervalle
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gray-200">
      <AnimatePresence initial={false}>
        {works.map((work, index) => (
          index === currentIndex && (
            <motion.div
              key={work.id}
              className="absolute w-full h-full flex-shrink-0"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ backgroundImage: `url(${work.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="flex items-center p-4 relative z-10">
                <img src={work.imageUrl} alt={work.title} className="w-64 h-80 rounded-lg shadow-lg" />
                <div className="ml-4 text-white">
                  <h2 className="text-2xl font-bold">{work.title}</h2>
                  <p>{work.description}</p>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {works.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full cursor-pointer"
            onClick={() => setCurrentIndex(index)}
            animate={{
              scale: currentIndex === index ? 1.25 : 1,
              backgroundColor: currentIndex === index ? '#ffffff' : '#a3a3a3',
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
