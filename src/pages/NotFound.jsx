import PageShell from '../components/PageShell'

export default function NotFound() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-blue-200/80">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 rounded-full bg-white text-slate-900 font-semibold">Back Home</a>
      </div>
    </PageShell>
  )
}
