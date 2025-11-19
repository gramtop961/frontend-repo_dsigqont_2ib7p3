import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

const cols = [
  { name: 'Essence', img: 'https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Monochrome', img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Flow', img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop' },
]

export default function Collections() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Collections</h1>
          <p className="text-blue-200/80 mt-2">Curated capsules that define the Upayas aesthetic.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cols.map((c, i) => (
            <motion.div key={c.name} initial={{ rotateX: 10, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-3xl overflow-hidden border border-white/10">
              <img src={c.img} alt={c.name} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xl font-semibold">{c.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
