import YouTubeEmbed from '../components/YouTubeEmbed'

const books = [
  { title: 'Hot Paws, Cool Shoes!', url: 'https://a.co/d/8NRUryj' },
  { title: 'Drink Up, Pup!', url: 'https://a.co/d/1kBq9Yo' },
  { title: 'Ali: Always By My Side', url: 'https://a.co/d/cUNmiV5' },
  { title: 'Remi’s New Game', url: 'https://a.co/d/e7VvAhU' },
  { title: 'Simba: Small but Brave', url: 'https://a.co/d/25nGXKH' },
  { title: 'Meadow’s Place', url: 'https://a.co/d/i5XMpAI' },
  { title: 'The Curious Case of Beefy Bull', url: 'https://a.co/d/99daSRR' },
  { title: 'Operation Margo Makeover', url: 'https://a.co/d/ao0U9sX' },
  { title: "Malibu's Adventures", url: 'https://a.co/d/iT3cbtP' },
]

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-black text-white grid place-items-center font-bold">TW</div>
            <h1 className="text-xl font-semibold tracking-tight">Too Hot To Walk</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#books" className="hover:opacity-80">Kid Dog Books</a>
            <a href="#interviews" className="hover:opacity-80">Dog Interviews</a>
            <a href="#bowls" className="hover:opacity-80">Sleeping Dog Bowls</a>
            <a href="#shoes" className="hover:opacity-80">Dog Shoes</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/toohottowalk/?hl=en" target="_blank" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">Instagram</a>
            <a href="https://www.youtube.com/@TooHotToWalk" target="_blank" className="rounded-xl bg-black text-white px-3 py-1.5 text-sm hover:opacity-90">YouTube</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">Protect paws. Hydrate pups. Celebrate stories.</h2>
            <p className="mt-4 text-gray-700">Arizona heat is real. <span className="font-medium">Too Hot To Walk</span> helps dog parents with community water bowls, low‑cost shoes for every season, and a growing library of kid‑friendly dog books.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#books" className="rounded-2xl bg-black text-white px-4 py-2 text-sm md:text-base hover:opacity-90">Shop Books on Amazon</a>
              <a href="#interviews" className="rounded-2xl border px-4 py-2 text-sm md:text-base hover:bg-gray-50">Watch Dog Interviews</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Sponsors: Ruffwear • DogBoots • NelliAuction</p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gray-100 grid place-items-center text-gray-500">
            <div className="text-center p-6">
              <div className="text-6xl">🐾</div>
              <p className="mt-2 font-medium">Phoenix sun tested • Pup approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl font-semibold">Kid Dog Books</h3>
            <a href={books[0].url} target="_blank" className="text-sm underline">Shop all on Amazon</a>
          </div>
          <p className="mt-2 text-gray-700">Nine heart‑warming titles for young readers and dog‑loving families.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {books.map((b) => (
              <a key={b.title} href={b.url} target="_blank" className="group block rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow">
                <div className="aspect-[4/5] rounded-xl bg-gray-100 grid place-items-center text-5xl">📗</div>
                <div className="mt-4 flex items-center justify-between">
                  <h4 className="font-medium group-hover:underline">{b.title}</h4>
                  <span className="text-xs rounded-full border px-2 py-0.5">Amazon</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">Tap to view on Amazon.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews */}
      <section id="interviews" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Dog Interviews</h3>
            <p className="mt-2 text-gray-700">Real stories from Arizona’s dog community—trainers, vets, and everyday pup parents. Catch every episode on our YouTube channel.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.youtube.com/@TooHotToWalk" target="_blank" className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90">Watch on YouTube</a>
              <a href="https://www.instagram.com/toohottowalk/?hl=en" target="_blank" className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50">Follow on Instagram</a>
            </div>
          </div>
          {/* Replace the ID below with your video ID, e.g. https://www.youtube.com/watch?v=abc123 -> abc123 */}
          <YouTubeEmbed id="W0bqI8CEYVE" />
        </div>
      </section>

      {/* Sleeping Dog Bowls */}
      <section id="bowls" className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-2xl font-semibold">Sleeping Dog Bowls</h3>
          <p className="mt-2 text-gray-700">Public water bowls installed along parks and paths—functional art that keeps pups hydrated. Sponsor a bowl and add your logo where water pours in.</p>
          <div className="mt-4 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border bg-white p-5">
              <h4 className="font-medium">Sponsor a Bowl</h4>
              <p className="mt-1 text-sm text-gray-600">Businesses and individuals can sponsor a bowl, including logo placement.</p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h4 className="font-medium">Arizona First</h4>
              <p className="mt-1 text-sm text-gray-600">We’re starting in Arizona, with First Nation sites planned next.</p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h4 className="font-medium">Commissions</h4>
              <p className="mt-1 text-sm text-gray-600">Custom commissions available based on our prototype sculpture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Shoes */}
      <section id="shoes" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Dog Shoes for Every Season</h3>
            <p className="mt-2 text-gray-700">Low‑cost, practical paw protection for summer heat, winter chill, and rocky trails.</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside">
              <li>Summer: heat‑shielded soles for scorching sidewalks</li>
              <li>Winter: warm, water‑resistant booties</li>
              <li>Trail: rugged grip for desert and mountain terrain</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">Supported by sponsors: Ruffwear • DogBoots • NelliAuction</p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gray-100 grid place-items-center text-6xl">👢</div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-sm uppercase tracking-wider text-gray-500">Supported by</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-16 rounded-xl border bg-white grid place-items-center text-gray-500">Ruffwear (logo)</div>
            <div className="h-16 rounded-xl border bg-white grid place-items-center text-gray-500">DogBoots (logo)</div>
            <div className="h-16 rounded-xl border bg-white grid place-items-center text-gray-500">NelliAuction (logo)</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-medium">Too Hot To Walk</p>
            <p className="text-sm text-gray-600">Phoenix, Arizona</p>
          </div>
          <div className="flex gap-3">
            <a href="#books" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">Books</a>
            <a href="#interviews" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">Interviews</a>
            <a href="#bowls" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">Bowls</a>
            <a href="#shoes" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">Shoes</a>
          </div>
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Too Hot To Walk</div>
        </div>
      </footer>
    </div>
  )
}
