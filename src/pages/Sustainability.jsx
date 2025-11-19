import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Sustainability() {
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ rotateX: -10, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Sustainability</motion.h1>
        <motion.div initial={{ scale: .96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 60, damping: 16 }} className="rounded-3xl border border-white/10 p-8 bg-white/5">
          <p className="text-blue-200/90 leading-relaxed">
            We choose low-impact dyes, recycled packaging, and partner with facilities that prioritize ethical labor. Our roadmap includes material traceability and circular design.
          </p>
        </motion.div>
      </section>
    </PageShell>
  )
}
