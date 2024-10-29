'use client'

import { useEffect, useState } from "react"
import api from "../api/api"
import MangaGrid from "./components/grid"
import Carousel from "./components/carousel"

const Mangas = ()=>{

    const [manga, setManga] = useState([])

    useEffect(()=>{

        const fetchData = async ()=>{

            try {
                
                const mangas = await api.get('/manga', {params : {limit : 40}})
                setManga(mangas.data.data)

            } catch (error) {
                
                console.log(error)
            }

        }

        fetchData()

    }, [])


    const mangas = [
        {
          id: 1,
          title: "Manga Title 1",
          author: "Author 1",
          description: "Description of Manga 1",
          imageUrl: "https://via.placeholder.com/300x400", // Remplace par l'URL réelle de l'image
        },
        {
          id: 2,
          title: "Manga Title 2",
          author: "Author 2",
          description: "Description of Manga 2",
          imageUrl: "https://via.placeholder.com/300x400",
        },
        {
          id: 3,
          title: "Manga Title 3",
          author: "Author 3",
          description: "Description of Manga 3",
          imageUrl: "https://via.placeholder.com/300x400",
        },
        // Ajoute plus de mangas selon tes besoins
      ];

    return(
        <div>
            <div>
                <Carousel/>
            </div>
            <div>
                <MangaGrid mangas={manga}/>
            </div>
        </div>
    )
}


export default Mangas