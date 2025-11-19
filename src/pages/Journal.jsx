import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Design Notes ${i + 1}`,
  excerpt: 'A peek into our process, inspirations, and what we are learning along the way.',
  cover: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
}))

export default function Journal() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Journal</h1>
          <p className="text-blue-200/80 mt-2">Stories from the studio and beyond.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.id} initial={{ rotateY: -8, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-3xl overflow-hidden border border-white/10">
              <img src={p.cover} alt={p.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-blue-200/80 mt-2">{p.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
