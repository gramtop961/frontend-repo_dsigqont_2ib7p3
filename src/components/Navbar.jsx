import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Instagram } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/story', label: 'Our Story' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/journal', label: 'Journal' },
  { to: '/stores', label: 'Stores' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/press', label: 'Press' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-white font-black tracking-widest text-xl">
            UPAYAS
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wide transition-colors ${isActive ? 'text-white' : 'text-blue-200/80 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://instagram.com/upayas"
              target="_blank"
              rel="noreferrer"
              className="text-blue-200/80 hover:text-white transition-colors"
              aria-label="Upayas on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </nav>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-blue-200/90 hover:bg-white/10 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://instagram.com/upayas"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-blue-200/90 hover:bg-white/10 hover:text-white"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
