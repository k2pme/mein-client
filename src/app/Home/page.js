'use client'


import MangaGrid from "./components/grid"
import Carousel from "./components/carousel"
import { useContext } from 'react';
// import Latest from "./components/latest"
import { Button } from "@nextui-org/button"

import DetailsProvider from "../context/DetailsProvider"
import DetailsManga from "../Details/DetailsManga"

const Mangas = ()=>{

    

    

    return(
         <div className="relative">
            <div>
                <div className="relative">
                    <div className='fixed w-full bg-black h-16 z-20 border-b-2 border-green-600'>
                        <Button/>
                    </div>
                    <Carousel/>
                </div>
                {/* <div>
                    <Latest/>
                </div> */}
                <div>
                    <MangaGrid/>
                </div>
            </div>
            <DetailsManga/>
        </div>

    )
}


export default Mangas