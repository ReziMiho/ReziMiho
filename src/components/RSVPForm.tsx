import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, User } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const RSVPForm = () => {
  const { t, currentLanguage } = useLanguage()
  const [formData, setFormData] = useState({
    lang: currentLanguage,
    guestType: '',
    firstName: '',
    lastName: '',
    firstNameFurigana: '',
    lastNameFurigana: '',
    email: '',
    phone: '',
    address: '',
    dietary: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const requiredFields = ['guestType', 'firstName', 'lastName', 'firstNameFurigana', 'lastNameFurigana', 'email']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData] || formData[field as keyof typeof formData].trim() === '')

    if (missingFields.length > 0) {
      return false
    }

    return true
  }

  const submitRSVP = () => {
    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

     const form = document.createElement('form')
     form.method = 'POST'
     form.action = 'https://script.google.com/macros/s/AKfycbyZTGa9dAGlP1fvSFYlMTPDMR9qjN4aBAL_T_EBhJSf8PzyH722Icly-mLT5Vo9tuDo/exec'
     form.target = '_blank'
     form.style.display = 'none'

     Object.entries(formData).forEach(([key, value]) => {
       if (value.trim() !== '') {
         const input = document.createElement('input')
         input.type = 'hidden'
         input.name = key
         input.value = value
         form.appendChild(input)
       }
     })

     document.body.appendChild(form)
     form.submit()
     document.body.removeChild(form)
     
     setSubmitStatus('success')
     setFormData({
      lang: currentLanguage,
       guestType: '',
       firstName: '',
       lastName: '',
       firstNameFurigana: '',
       lastNameFurigana: '',
       email: '',
       phone: '',
       address: '',
       dietary: '',
       message: ''
     })
     setIsSubmitting(false)
  }

  return (
    <section id="rsvp" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="w-8 h-8 text-maple-red mx-auto mb-4" />
          <h2 className="text-4xl font-script text-burgundy mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {t.rsvpTitle}
          </h2>
          <p className="text-gray-600 font-serif mb-4">{t.rsvpSubtitle}</p>
          <p className="text-gray-600 leading-relaxed">
            {t.respondBy}
          </p>
        </div>

        <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
          {/* Guest Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  <div className={`p-3 rounded-lg border-2 text-center ${
                    formData.guestType === type
                      ? 'border-maple-red bg-maple-red/10 text-maple-red'
                      : 'border-gray-200 hover:border-maple-red/50'
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
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red"
              />
              <input
                type="text"
                name="lastName"
                placeholder={t.lastName}
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red"
              />
            </div>
          </motion.div>

           {/* Furigana */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <label className="block text-sm font-serif text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              {t.furigana} <span className="text-red-500">{t.required}</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstNameFurigana"
                placeholder={t.firstName}
                value={formData.firstNameFurigana}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red"
              />
              <input
                type="text"
                name="lastNameFurigana"
                placeholder={t.lastName}
                value={formData.lastNameFurigana}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red"
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red"
            />
          </motion.div>

          {/* Dietary Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red resize-none"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {t.submitSuccess}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {t.submitError}
              </div>
            )}
            <button
              type="button"
              onClick={submitRSVP}
              disabled={isSubmitting}
              className={`w-full font-serif py-4 px-8 rounded-lg duration-300 transform ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : submitStatus === 'error'
                  ? 'bg-red-500 hover:bg-red-600 hover:shadow-lg hover:scale-105'
                  : 'bg-gradient-to-r from-maple-red to-burnt-orange hover:shadow-lg hover:scale-105'
              } text-white`}
            >
              {isSubmitting 
                ? t.submitting 
                : submitStatus === 'error' 
                ? t.submitRetry 
                : t.sendRsvp
              }
            </button>
            {submitStatus !== 'success' && (
              <p className="text-xs text-gray-500 mt-2">
                {submitStatus === 'idle' ? 'Fill out all required fields and submit your RSVP' : ''}
              </p>
            )}
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 font-serif mb-4">
            {t.contactDirectly}
          </p>
          <div className="space-y-2">
            <a
              href="mailto:rezi.rusnadi94@gmail.com"
              className="flex items-center justify-center gap-2 text-maple-red hover:underline"
            >
              <Mail className="w-4 h-4" />
              rezi.rusnadi94@gmail.com
            </a>
            <a
              href="tel:+818071811508"
              className="flex items-center justify-center gap-2 text-maple-red hover:underline"
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