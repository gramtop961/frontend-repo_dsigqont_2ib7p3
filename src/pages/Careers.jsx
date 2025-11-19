import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Careers() {
  return (
    <PageShell>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ scale: .96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 60, damping: 16 }} className="text-4xl font-bold mb-6">Careers</motion.h1>
        <p className="text-blue-200/90">We're always looking for thoughtful, detail-oriented people. Send your portfolio to careers@upayas.com</p>
      </section>
    </PageShell>
  )
}
