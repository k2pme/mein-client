'use client'

import { Card } from "@nextui-org/card"
import { motion } from "framer-motion";



const DetailsManga = () => {
  return (
    <motion.div 
      className="fixed inset-0 w-full h-full bg-black/30 backdrop-blur-md z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}>
      {/* Section supérieure */}
      <section className="w-full h-[40vh] p-4">
        <Card className="w-full h-full bg-background/60 backdrop-blur-sm">
          <div className="p-4">
            <h1>Section Supérieure</h1>
          </div>
        </Card>
      </section>

      {/* Section inférieure avec 3 colonnes */}
      <section className="w-full h-[60vh] p-4">
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Colonne 1 */}
          <Card className="h-full bg-background/60 backdrop-blur-sm">
            <div className="p-4">
              <h2>Colonne 1</h2>
            </div>
          </Card>

          {/* Colonne 2 */}
          <Card className="h-full bg-background/60 backdrop-blur-sm">
            <div className="p-4">
              <h2>Colonne 2</h2>
            </div>
          </Card>

          {/* Colonne 3 */}
          <Card className="h-full bg-background/60 backdrop-blur-sm">
            <div className="p-4">
              <h2>Colonne 3</h2>
            </div>
          </Card>
        </div>
      </section>
    </motion.div >
  )
}

export default DetailsManga