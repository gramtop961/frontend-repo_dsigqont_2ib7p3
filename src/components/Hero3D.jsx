import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero3D({ title, subtitle, cta }) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60">
          <Spline scene="https://prod.spline.design/1d9nI1i96psYzF1p/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-blue-200/90 text-lg max-w-xl"
          >
            {subtitle}
          </motion.p>
          {cta}
        </div>
        <motion.div
          initial={{ rotateX: 15, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-fashion-on-a-subway-7971/1080p.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
