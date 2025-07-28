import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, User } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const RSVPForm = () => {
  const { t, currentLanguage } = useLanguage()
  const [formData, setFormData] = useState({
    ceremonyAttendance: '',
    receptionAttendance: '',
    guestType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dietary: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="rsvp" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="w-8 h-8 text-rose-gold mx-auto mb-4" />
          <h2 className="text-4xl font-script text-dusty-rose mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {t.rsvpTitle}
          </h2>
          <p className="text-gray-600 font-serif mb-4">{t.rsvpSubtitle}</p>
          <p className="text-gray-600 leading-relaxed">
            {t.respondBy}
          </p>
        </div>

        <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
          {/* Ceremony Attendance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h3 className="text-lg font-serif text-gray-800 mb-3">{t.ceremonyTitle}</h3>
            <div className="grid grid-cols-3 gap-2">
              {['attend', 'decline', 'pending'].map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="ceremonyAttendance"
                    value={option}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-lg border-2 text-center transition-all ${
                    formData.ceremonyAttendance === option
                      ? 'border-dusty-rose bg-dusty-rose/10 text-dusty-rose'
                      : 'border-gray-200 hover:border-dusty-rose/50'
                  }`}>
                    <div className="text-sm font-semibold">
                      {option === 'attend' ? t.attend : option === 'decline' ? t.decline : t.hold}
                    </div>
                    <div className="text-xs text-gray-500">
                      {currentLanguage === 'en' 
                        ? (option === 'attend' ? t.attendJa : option === 'decline' ? t.declineJa : t.holdJa)
                        : (option === 'attend' ? t.attendJa : option === 'decline' ? t.declineJa : t.holdJa)
                      }
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Reception Attendance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <h3 className="text-lg font-serif text-gray-800 mb-3">{t.receptionTitle}</h3>
            <div className="grid grid-cols-3 gap-2">
              {['attend', 'decline', 'pending'].map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="receptionAttendance"
                    value={option}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-lg border-2 text-center transition-all ${
                    formData.receptionAttendance === option
                      ? 'border-dusty-rose bg-dusty-rose/10 text-dusty-rose'
                      : 'border-gray-200 hover:border-dusty-rose/50'
                  }`}>
                    <div className="text-sm font-semibold">
                      {option === 'attend' ? t.attend : option === 'decline' ? t.decline : t.hold}
                    </div>
                    <div className="text-xs text-gray-500">
                      {currentLanguage === 'en' 
                        ? (option === 'attend' ? t.attendJa : option === 'decline' ? t.declineJa : t.holdJa)
                        : (option === 'attend' ? t.attendJa : option === 'decline' ? t.declineJa : t.holdJa)
                      }
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </motion.div>

          <hr className="my-6 border-gray-200" />

          {/* Guest Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              {t.guestOf} <span className="text-red-500">{t.required}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['groom', 'bride'].map((type) => (
                <label key={type} className="cursor-pointer">
                  <input
                    type="radio"
                    name="guestType"
                    value={type}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-lg border-2 text-center transition-all ${
                    formData.guestType === type
                      ? 'border-dusty-rose bg-dusty-rose/10 text-dusty-rose'
                      : 'border-gray-200 hover:border-dusty-rose/50'
                  }`}>
                    {type === 'groom' ? t.groomGuest : t.brideGuest}
                  </div>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-6"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              {t.name} <span className="text-red-500">{t.required}</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder={t.firstName}
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder={t.lastName}
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-6"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-1" />
              {t.email} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors"
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-6"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-1" />
              {t.phoneNumber}
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(+81) 80-7181-1500"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors"
            />
          </motion.div>

          {/* Dietary Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-6"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              {t.dietaryRequirements}
            </label>
            <textarea
              name="dietary"
              placeholder={t.dietaryPlaceholder}
              value={formData.dietary}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors resize-none"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-8"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              {t.messageLabel}
            </label>
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center"
          >
            <button
              type="button"
              className="w-full bg-gradient-to-r from-dusty-rose to-rose-gold text-white font-serif py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.sendRsvp}
            </button>
            <p className="text-xs text-gray-500 mt-2">
              {t.previewNote}
            </p>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 font-serif mb-4">
            {t.contactDirectly}
          </p>
          <div className="space-y-2">
            <a
              href="mailto:rezi.rusnadi94@gmail.com"
              className="flex items-center justify-center gap-2 text-dusty-rose hover:underline"
            >
              <Mail className="w-4 h-4" />
              rezi.rusnadi94@gmail.com
            </a>
            <a
              href="tel:+818071811508"
              className="flex items-center justify-center gap-2 text-dusty-rose hover:underline"
            >
              <Phone className="w-4 h-4" />
              +818071811500
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default RSVPForm 