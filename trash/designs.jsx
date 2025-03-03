import React from "react"
import { motion } from "framer-motion"
import "./Style/Designs.css";


const Design = () => {
  return (
    <section className="designs-section" id="designs">
      <div className="container">
      <div className="section-header">
        <h2>Designs</h2>
      </div>

        <div className="bento-grid">
          {/* Web Design Splash */}
          <motion.div className="grid-item" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <img
              src="./src/assets/designs/s-logo.jpg"
              alt="Web Design Portfolio"
              className="grid-image"
            />
          </motion.div>

          {/* LEGO Logo */}
          <motion.div className="grid-item lego-bg" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/intence-logo.png"
              alt="LEGO Design"
              className="grid-image"
            />
          </motion.div>

          {/* Spark Logo */}
          <motion.div className="grid-item spark-bg" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/bird-logo.avif"
              alt="Spark Design"
              className="grid-image contain"
            />
          </motion.div>

          {/* Pinwheel Logo */}
          <motion.div className="grid-item pinwheel-bg" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/portfolio.png"
              alt="Pinwheel Design"
              className="grid-image contain"
            />
          </motion.div>

          {/* Large Web Design Graphic */}
          <motion.div className="grid-item featured" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/project-section.png"
              alt="Web Design Showcase"
              className="grid-image"
            />
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div className="grid-item" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/intence2.png"
              alt="Design Portfolio Grid"
              className="grid-image"
            />
          </motion.div>

          {/* UI/UX Red Mockup */}
          <motion.div className="grid-item" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/intence.png"
              alt="UI/UX Design Mockup"
              className="grid-image"
            />
          </motion.div>

          {/* CREAMS Design 1 */}
          <motion.div className="grid-item" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/intence.png"
              alt="CREAMS Design"
              className="grid-image"
            />
          </motion.div>

          {/* CREAMS Design 2 */}
          <motion.div className="grid-item" whileHover={{ scale: 1.02 }}>
            <img
              src="./src/assets/designs/progress-card.png"
              alt="CREAMS Design Alternative"
              className="grid-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Design

