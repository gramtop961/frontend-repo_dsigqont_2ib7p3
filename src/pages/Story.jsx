import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Story() {
  return (
    <PageShell>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Our Story</motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-blue-200/90 leading-relaxed">
          Upayas was born from the idea that clothing should be both intentional and effortless — garments that honor everyday rituals while embracing modern life. We obsess over comfort, structure, and the subtle details that make a piece feel special.
        </motion.p>
      </section>
    </PageShell>
  )
}
