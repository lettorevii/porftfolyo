import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import '../index.css'
import { EarthCanvas } from './canvas/index'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle form submission logic here
  }

  return (
    <div
      className="
        mt-12
        flex
        flex-col-reverse
        bg-[#0f0d24]
        gap-10
        overflow-hidden
        h-screen
        items-center
        justify-center
        px-4
      "
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.1, 1)}
        className="
          flex-[0.75]
          bg-[#0f0d26]
          rounded-2xl
          w-full
          max-w-lg
          p-8
          flex
          flex-col
        "
      >
        <p className={styles.sectionSubText}>İletişime Geçin.</p>
        <h3 className={styles.sectionHeadText}>Mesaj At.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 w-full"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">İsminiz</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="İsminiz Nedir?"
              className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Emailiniz</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Adresiniz Nedir?"
              className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mesajınız</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ne söylemek istersiniz?"
              className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full"
            />
          </label>

          <div class="container-button">
            <div class="hover bt-1"></div>
            <div class="hover bt-2"></div>
            <div class="hover bt-3"></div>
            <div class="hover bt-4"></div>
            <div class="hover bt-5"></div>
            <div class="hover bt-6"></div>
            <button type='submit'>Gönder</button>
          </div>
        </form>
      </motion.div >

      <motion.div variants={slideIn('right', 'tween', 0.1, 1)} className='flex-1 h-auto'>
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
