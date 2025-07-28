import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, User } from 'lucide-react'

const RSVPForm = () => {
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
            R S V P
          </h2>
          <p className="text-gray-600 font-serif mb-4">御出欠について</p>
          <p className="text-gray-600 leading-relaxed">
            Please respond by <span className="font-semibold text-dusty-rose">September 15th, 2025</span>
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
            <h3 className="text-lg font-serif text-gray-800 mb-3">Ceremony 挙式</h3>
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
                      {option === 'attend' ? 'Attend' : option === 'decline' ? 'Decline' : 'Hold'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {option === 'attend' ? 'ご出席' : option === 'decline' ? 'ご欠席' : '保留'}
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
            <h3 className="text-lg font-serif text-gray-800 mb-3">Reception 披露宴</h3>
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
                      {option === 'attend' ? 'Attend' : option === 'decline' ? 'Decline' : 'Hold'}
                    </div>
                    <div className="text-xs text-gray-500">
                      {option === 'attend' ? 'ご出席' : option === 'decline' ? 'ご欠席' : '保留'}
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
              Guest of <span className="text-red-500">*</span>
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
                    {type === 'groom' ? 'Groom Guest' : 'Bride Guest'}
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
              Name <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-dusty-rose/20 focus:border-dusty-rose transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
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
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
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
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
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
              Dietary Requirements アレルギーについて
            </label>
            <textarea
              name="dietary"
              placeholder="Please let us know about any allergies or dietary restrictions..."
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
              Message メッセージ
            </label>
            <textarea
              name="message"
              placeholder="Share your excitement or any special message..."
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
              Send RSVP 確認画面へ
            </button>
            <p className="text-xs text-gray-500 mt-2">
              ※This is a preview - responses are not actually sent
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
            If plans change, please contact us directly:
          </p>
          <div className="space-y-2">
            <a
              href="mailto:reziandmiho@wedding.com"
              className="flex items-center justify-center gap-2 text-dusty-rose hover:underline"
            >
              <Mail className="w-4 h-4" />
              reziandmiho@wedding.com
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 text-dusty-rose hover:underline"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default RSVPForm 