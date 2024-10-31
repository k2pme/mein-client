import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cover from '../../api/cover'
import { Details } from "../../context/DetailsProvider";

// src/app/components/MangaCard.js
export default function MangaCard({ manga }) {

// console.log(manga)

  const [mangaCover, setmangaCover] = useState()
  const { setShowDetails } = useContext(Details);

  useEffect(()=>{

    const fetchDetail = async ()=>{
      try{

        manga.relationships.map(async (item)=>{
          
          if(item.type && item.type === 'cover_art'){
            console.log(item.id)

            const data = await cover({coverId : item.id})

            setmangaCover(data)
          }

        })

        


      }catch(error){
        console.log(error)
      }
    }

    fetchDetail()

  }, []);



    const handleClick = () => {
    const element = document.getElementById(`manga-${manga.id}`);
    const rect = element.getBoundingClientRect();

    // Animation de la carte
    element.style.position = 'fixed';
    element.style.top = `${rect.top}px`;
    element.style.left = `${rect.left}px`;
    element.style.width = `${rect.width}px`;
    element.style.height = `${rect.height}px`;

    // Démarrer l'animation
    setTimeout(() => {
      setShowDetails(true);
    }, 300); // Attendre que l'animation soit terminée
  };


    return (
      <motion.div 
        id={`manga-${manga.id}`}
        className="bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer"
        whileHover={{scale : 1.05}}
        // animate={{opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }} // Démarre en bas et transparent
        whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte
        exit={{ opacity: 0, y: 20 }} // Cache avec un effet vers le bas
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // Réinitialise l'animation à chaque fois que la carte entre dans la vue
      >
        <img src={`https://uploads.mangadex.org/covers/${manga.id}/${mangaCover?.attributes?.fileName}`} alt={manga.attributes.title.en} className="w-full h-64 object-cover" />
        < div className="p-4">
          <span>{manga.type}</span>
          <h2 className="text-lg font-bold">{manga.attributes.title.en}</h2>
          <p className="text-gray-600">{manga.author}</p>
        </div>
      </motion.div>
    );
  }
  