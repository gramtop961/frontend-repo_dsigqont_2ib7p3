export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-blue-200/80">
        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-white">All Products</a></li>
            <li><a href="/collections" className="hover:text-white">Collections</a></li>
            <li><a href="/lookbook" className="hover:text-white">Lookbook</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Brand</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/story" className="hover:text-white">Our Story</a></li>
            <li><a href="/sustainability" className="hover:text-white">Sustainability</a></li>
            <li><a href="/press" className="hover:text-white">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/stores" className="hover:text-white">Stores</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com/upayas" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href="/journal" className="hover:text-white">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-blue-300/60 text-xs py-6">© {new Date().getFullYear()} Upayas. All rights reserved.</div>
    </footer>
  )
}
