import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Press() {
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ rotateY: -10, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Press</motion.h1>
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <p className="text-blue-200/90">Upayas featured in Global Fashion Daily for our commitment to sustainable design.</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
