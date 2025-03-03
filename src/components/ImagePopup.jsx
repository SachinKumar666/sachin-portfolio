import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ImagePopup = ({ image, alt, onClose }) => {
  const imgRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="image-popup-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="image-popup-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="image-popup-close" onClick={onClose}>
            &times;
          </button>
          <div className="image-popup-scroll-container">
            <img ref={imgRef} src={image || "/placeholder.svg"} alt={alt} className="image-popup-img" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImagePopup

