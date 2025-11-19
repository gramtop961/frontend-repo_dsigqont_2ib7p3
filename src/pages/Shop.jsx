import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Upayas Piece ${i + 1}`,
  price: (79 + i * 3).toFixed(0),
  image: `https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop`
}))

export default function Shop() {
  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="text-blue-200/80 mt-2">Discover our latest arrivals and timeless essentials.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <motion.div key={p.id} initial={{ rotateY: -10, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="pt-3 flex items-center justify-between">
                <h3 className="font-medium">{p.title}</h3>
                <span className="text-blue-200/80">${p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
