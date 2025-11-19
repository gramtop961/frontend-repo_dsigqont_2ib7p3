import { motion } from 'framer-motion'

export default function Section3D({ heading, subheading, children, reverse }) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-64 w-64 bg-blue-500/10 blur-3xl rounded-full absolute -top-20 -left-10" />
        <div className="h-64 w-64 bg-indigo-500/10 blur-3xl rounded-full absolute -bottom-20 -right-10" />
      </div>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ rotateY: reverse ? -10 : 10, opacity: 0, y: 20 }}
          whileInView={{ rotateY: 0, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="text-blue-200/90">{subheading}</p>
          {children}
        </motion.div>
        <motion.div
          initial={{ rotateX: 10, rotateY: reverse ? 10 : -10, scale: 0.96, opacity: 0 }}
          whileInView={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-xl"
        >
          <img
            src={`https://images.unsplash.com/photo-1520975922284-732e71ee9553?q=80&w=1600&auto=format&fit=crop`}
            alt="Upayas fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
