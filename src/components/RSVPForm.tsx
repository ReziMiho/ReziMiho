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
    const requiredFields = ['guestType', 'firstName', 'lastName', 'firstNameFurigana', 'lastNameFurigana']
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
     form.action = 'https://script.google.com/macros/s/AKfycbyl3hXXjNi8RMnouK2hmRbe5x2mybFEf0p9jLVh_TBzYupxFtmRRUYh_yOC58WXmyEM/exec'
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
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="guestType"
                  value="groom"
                  checked={formData.guestType === 'groom'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-3 text-center text-lg min-h-[60px] flex items-center justify-center relative ${
                  formData.guestType === 'groom'
                    ? 'bg-gray-500 text-white shadow-xl transform scale-105'
                    : 'border-gray-300 bg-white text-gray-900'
                }`}>
                  <span>
                    {t.groomGuest}
                  </span>
                </div>
              </label>
              
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="guestType"
                  value="bride"
                  checked={formData.guestType === 'bride'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-3 text-center text-lg min-h-[60px] flex items-center justify-center relative ${
                  formData.guestType === 'bride'
                    ? 'bg-gray-500 text-white shadow-xl transform scale-105'
                    : 'border-gray-300 bg-white text-gray-900'
                }`}>
                  <span>
                    {t.brideGuest}
                  </span>
                </div>
              </label>
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
            {currentLanguage === 'ja' ? (
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    アレルギーや食事制限については、専用フォームでご回答ください。
                  </p>
                  <a
                    href="https://caneat.jp/33/event/db02ddae?532393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    食事制限フォームへ →
                  </a>
                </div>
              </div>
            ) : (
              <textarea
                name="dietary"
                placeholder={t.dietaryPlaceholder}
                value={formData.dietary}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-maple-red/20 focus:border-maple-red resize-none"
              />
            )}
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
              className={`w-full font-serif py-4 px-8 rounded-lg duration-300 transform text-white font-semibold text-lg shadow-lg ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : submitStatus === 'error'
                  ? 'bg-gray-600 hover:bg-gray-700 hover:shadow-xl hover:scale-105'
                  : 'bg-gradient-to-r from-gray-600 to-gray-600 hover:from-gray-700 hover:to-gray-700 hover:shadow-xl hover:scale-105'
              }`}
            >
              {isSubmitting 
                ? t.submitting 
                : submitStatus === 'error' 
                ? t.submitRetry 
                : t.sendRsvp
              }
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default RSVPForm 