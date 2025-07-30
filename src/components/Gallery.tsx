import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Gallery = () => {
  const { t } = useLanguage()
  
  // Placeholder photos - you can replace with real images
  const photos = [
    { id: 1, emoji: '💑', alt: 'Couple photo 1' },
    { id: 2, emoji: '🌸', alt: 'Engagement photo' },
    { id: 3, emoji: '🌅', alt: 'Sunset photo' },
    { id: 4, emoji: '💍', alt: 'Ring photo' },
    { id: 5, emoji: '🎈', alt: 'Celebration photo' },
    { id: 6, emoji: '🌺', alt: 'Flower photo' },
    { id: 7, emoji: '🥂', alt: 'Toast photo' },
    { id: 8, emoji: '💐', alt: 'Bouquet photo' },
  ]

  return (
    <section id="gallery" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-12 text-center">{t.galleryTitle}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-cream to-autumn-gold rounded-2xl shadow-sm cursor-pointer overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-4xl md:text-6xl">
                {photo.emoji}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-gray-600 font-serif mt-8 italic"
        >
          {t.morePhotos}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Gallery 