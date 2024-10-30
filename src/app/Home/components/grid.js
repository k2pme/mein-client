// src/app/components/MangaGrid.js
import { useEffect, useState } from "react"
import api from "../../api/api"
import MangaCard from "./card";

export default function MangaGrid() {


  const [manga, setManga] = useState([])

    useEffect(()=>{

        const fetchData = async ()=>{

            try {
                
                const mangas = await api.get('/manga', {
                    params: {
                        limit: 10,
                        includedTagsMode: 'AND',
                        excludedTagsMode: 'OR',
                        'contentRating[]': ['safe', 'suggestive', /*'erotica'*/],
                        'order[latestUploadedChapter]': 'desc',
                        'includes[]': 'cover_art'
                    },    
                })
                

                setManga(mangas.data.data)

            } catch (error) {
                
                console.log(error)
            }

        }

        fetchData()

    }, [])


  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {manga.map((manga) => (
        <MangaCard key={manga.id} manga={manga} />
      ))}
    </div>
  );
}
