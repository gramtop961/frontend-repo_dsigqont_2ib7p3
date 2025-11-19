import Navbar from './Navbar'
import Footer from './Footer'

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
