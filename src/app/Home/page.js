'use client'


import MangaGrid from "./components/grid"
import Carousel from "./components/carousel"
import Latest from "./components/latest"

const Mangas = ()=>{

    


    

    return(
        <div>
            <div className="relative">
                <div className='fixed w-full bg-black h-16 z-20 border-b-2 border-green-600'>

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
    )
}


export default Mangas