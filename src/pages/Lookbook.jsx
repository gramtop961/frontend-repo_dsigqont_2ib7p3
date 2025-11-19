import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

const photos = Array.from({ length: 12 }).map((_, i) => `https://images.unsplash.com/photo-1520975922284-732e71ee9553?q=80&w=1600&auto=format&fit=crop`)

export default function Lookbook() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Lookbook</h1>
          <p className="text-blue-200/80 mt-2">Editorial moments and behind-the-scenes from recent shoots.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="space-y-4">
          {photos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Look ${i+1}`}
              initial={{ rotateZ: -2, opacity: 0 }}
              whileInView={{ rotateZ: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-2xl border border-white/10"
            />
          ))}
        </div></div>
      </section>
    </PageShell>
  )
}
