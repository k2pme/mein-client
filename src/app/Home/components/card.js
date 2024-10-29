import api from "@/app/api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// src/app/components/MangaCard.js
export default function MangaCard({ manga }) {

console.log(manga)

  const [cover, setCover] = useState()

  // useEffect(()=>{


  //   const fetchDetail = async ()=>{
  //     try{

  //       manga.relationships.map(async (item)=>{
  //         item.type === 'cover_art' && setCover(await axios.get(`https://api.mangadex.org/cover/${item.id}`))
  //       })


  //       console.log(cover)

  //     }catch(error){
  //       console.log(error)
  //     }
  //   }

  //   fetchDetail()

  // })


    return (
      <motion.div 
        className="bg-white border rounded-lg shadow-md overflow-hidden"
        whileHover={{scale : 1.05}}
        // animate={{opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}

        initial={{ opacity: 0, y: 20 }} // Démarre en bas et transparent
      whileInView={{ opacity: 1, y: 0 }} // Devient visible et remonte
      exit={{ opacity: 0, y: 20 }} // Cache avec un effet vers le bas
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // Réinitialise l'animation à chaque fois que la carte entre dans la vue
      >
        <img src={manga.imageUrl} alt={manga.attributes.title.en} className="w-full h-64 object-cover" />
        < div className="p-4">
          <span>{manga.type}</span>
          <h2 className="text-lg font-bold">{manga.attributes.title.en}</h2>
          <p className="text-gray-600">{manga.author}</p>
        </div>
      </motion.div>
    );
  }
  