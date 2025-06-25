import { useState } from "react";
import { motion } from "framer-motion";
import "./Style/Designs.css";
import ImagePopup from "../components/ImagePopup";
import Pinwheel from "../assets/designs/pinwheel.png";
import spark from "../assets/designs/bird-logo.avif";
import lego from "../assets/designs/intence-logo.png";
import webDesign from "../assets/designs/project-section.png";
import intence2 from "../assets/designs/intence2.png";
import creams from "../assets/designs/creams.png";
import intence from "../assets/designs/intence.png";
import slogo from "../assets/designs/s-logo.jpg";
import progressCard from "../assets/designs/progress-card.png";

const designItems = [
  { src: Pinwheel, alt: "Pinwheel Design", className: "grid-image contain" },
  { src: spark, alt: "Spark Design", className: "grid-image contain" },
  { src: lego, alt: "LEGO Design", className: "grid-image" },
  { src: webDesign, alt: "Web Design Showcase", className: "grid-image" },
  { src: intence2, alt: "Design Portfolio Grid", className: "grid-image" },
  { src: creams, alt: "CREAMS Design", className: "grid-image" },
  { src: intence, alt: "Web Design Portfolio", className: "grid-image" },
  { src: slogo, alt: "CREAMS Design Alternative", className: "grid-image" },
  { src: progressCard, alt: "UI/UX Design Mockup", className: "grid-image" },
];

const Design = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

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
  );
};

export default Design;