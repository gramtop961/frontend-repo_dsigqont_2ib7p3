import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <PageShell>
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">Contact</motion.h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Name</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Message</label>
            <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
          </div>
          <button className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:opacity-90 transition">Send</button>
        </form>
      </section>
    </PageShell>
  )
}
