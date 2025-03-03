import { useState } from "react"
import { motion } from "framer-motion"
import "./Style/Designs.css"
import ImagePopup from "../components/ImagePopup"


const designItems = [
  
  { src: "./src/assets/designs/portfolio.png", alt: "Pinwheel Design", className: "grid-image contain" },

  { src: "./src/assets/designs/bird-logo.avif", alt: "Spark Design", className: "grid-image contain" },
 
  { src: "./src/assets/designs/intence-logo.png", alt: "LEGO Design", className: "grid-image" },

  { src: "./src/assets/designs/project-section.png", alt: "Web Design Showcase", className: "grid-image" },
  
  { src: "./src/assets/designs/intence2.png", alt: "Design Portfolio Grid", className: "grid-image" }, 

  { src: "./src/assets/designs/intence.png", alt: "CREAMS Design", className: "grid-image" },
  
{ src: "./src/assets/designs/s-logo.jpg", alt: "Web Design Portfolio", className: "grid-image" },

  { src: "./src/assets/designs/progress-card.png", alt: "CREAMS Design Alternative", className: "grid-image" },

  { src: "./src/assets/designs/intence.png", alt: "UI/UX Design Mockup", className: "grid-image" },
]
 
const Design = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openPopup = (image) => {
    setSelectedImage(image)
  }

  const closePopup = () => {
    setSelectedImage(null)
  }

  return (
    <section className="designs-section" id="designs">
      <div className="container">
        <div className="section-header">
          <h2>Designs</h2>
        </div>

        <div className="bento-grid">
          {designItems.map((item, index) => (
            <motion.div
              key={index}
              className="grid-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => openPopup(item)}
            >
              <img src={item.src || "/placeholder.svg"} alt={item.alt} className={item.className} />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && <ImagePopup image={selectedImage.src} alt={selectedImage.alt} onClose={closePopup} />}
    </section>
  )
}

export default Design

