// src/app/components/MangaGrid.js
import { useEffect, useState } from "react"
import api from "../../api/api"
import MangaCard from "./card";
import LatestCard from "./latestCard"

export default function Latest() {


  const [manga, setManga] = useState([])

    useEffect(()=>{

      const fetchData = async ()=>{

        try {
          const response = await api.get('/manga', {
            params: {
              // title: searchTitle,
              includedTagsMode: 'AND',
              excludedTagsMode: 'OR',
              limit: 10,  // Limite le nombre de résultats retournés
              'contentRating[]': ['safe', 'suggestive'], // Définit le type de contenu
              includes: ['cover_art'], // Inclut les informations de la couverture
              order: { latestUploadedChapter: 'desc' } // Tri par le chapitre le plus récemment ajouté
            },
            
          });
          
          setManga(response.data.data);
          // return response.data;

        } catch (error) {

          console.error("Erreur lors de la recherche de mangas :", error);
        }
      }

      fetchData()

    }, [])


  return (
    <div>
      <div className="flex flex-row item-center justify-between">
        <p>title</p>
        <p>Tout voir</p>
      </div>
      <div className="flex flex-row items-center gap-4 p-4 overflow-x-auto whitespace-nowrap">
        {manga.map((manga) => (
          <LatestCard key={manga.id} manga={manga} />
        ))}
      </div>
    </div>
  );
}
