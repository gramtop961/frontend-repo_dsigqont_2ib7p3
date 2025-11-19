import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import Hero3D from '../components/Hero3D'
import Section3D from '../components/Section3D'

export default function Home() {
  return (
    <PageShell>
      <Hero3D
        title="Upayas — Contemporary Clothing for Modern Rituals"
        subtitle="Minimal silhouettes. Elevated materials. Designed to move with you."
        cta={
          <div className="mt-8 flex gap-4">
            <Link to="/shop" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:opacity-90 transition">Shop Now</Link>
            <a href="https://instagram.com/upayas" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">Follow Instagram</a>
          </div>
        }
      />

      <Section3D heading="Signature Collection" subheading="Where craftsmanship meets comfort. Our best-sellers refined for everyday wear.">
        <Link to="/collections" className="inline-block mt-4 px-5 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">Explore Collection</Link>
      </Section3D>

      <Section3D reverse heading="Sustainable Materials" subheading="We source organic, recycled, and responsibly-made fabrics to reduce our footprint.">
        <Link to="/sustainability" className="inline-block mt-4 px-5 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">Learn More</Link>
      </Section3D>

      <Section3D heading="Lookbook 2025" subheading="A visual journey through textures, tones, and movement.">
        <Link to="/lookbook" className="inline-block mt-4 px-5 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">View Lookbook</Link>
      </Section3D>
    </PageShell>
  )
}
