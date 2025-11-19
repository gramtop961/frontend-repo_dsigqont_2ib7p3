import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Stores() {
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Stores</motion.h1>
        <div className="grid md:grid-cols-2 gap-6">
          {["New York", "London", "Delhi", "Tokyo"].map((city, i) => (
            <motion.div key={city} initial={{ rotateX: 10, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold">{city}</h3>
              <p className="text-blue-200/80">123 Upayas Street, {city}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
