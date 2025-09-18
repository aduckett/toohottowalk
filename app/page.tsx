import YouTubeEmbed from '../components/YouTubeEmbed'
import SponsorForm from '../components/SponsorForm';
import BookCarousel from '../components/BookCarousel';
import ReserveShoesForm from '../components/ReserveShoesForm';
import Image from 'next/image';

const books = [
  { title: 'Hot Paws, Cool Shoes!', amazonUrl: 'https://a.co/d/8NRUryj', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757547914/Hot_Paws_Cool_Shoes.zip_-_Title_gzz2iz.png' },
  { title: 'Drink Up, Pup!', amazonUrl: 'https://a.co/d/1kBq9Yo', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548151/IMG_1534_ml9afp.jpg' },
  { title: 'Ali: Always By My Side', amazonUrl: 'https://a.co/d/cUNmiV5', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548181/Title_wvitjf.png' },
  { title: 'Remi’s New Game', amazonUrl: 'https://a.co/d/e7VvAhU', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548181/Margo_draft.zip_-_30_lemyvx.png' },
  { title: 'Simba: Small but Brave', amazonUrl: 'https://a.co/d/25nGXKH', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548177/Copy_of_Beefy_Bull_Manuscript_Final.zip_-_26_nyocdh.png' },
  { title: 'Meadow’s Place', amazonUrl: 'https://a.co/d/i5XMpAI', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548189/Margo_draft.zip_-_29_ugnbgy.png' },
  { title: 'The Curious Case of Beefy Bull', amazonUrl: 'https://a.co/d/99daSRR', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757547907/KPD_Malibu_Adventure_-_39_pfr73t.png' },
  { title: 'Operation Margo Makeover', amazonUrl: 'https://a.co/d/ao0U9sX', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548182/KPD_Malibu_Adventure_-_38_skzjlv.png' },
  { title: 'Malibu Adventures', amazonUrl: 'https://a.co/d/iT3cbtP', coverUrl: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757548182/KPD_Malibu_Adventure_-_1_fwmhnq.png' },
];

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/"
              aria-label="Too Hot To Walk — home"
              className="h-10 w-10 rounded-2xl bg-black text-white grid place-items-center hover:opacity-90 transition"
            >
              <img
                src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1757613783/THTWpaw512_bmyorn.svg"
                alt=""
                className="h-6 w-6"
              />
            </a>
            <h1 className="text-xl font-semibold tracking-tight font-display">Too Hot To Walk</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#books" className="hover:opacity-80">Kid Dog Books</a>
            <a href="#interviews" className="hover:opacity-80">Dog Interviews</a>
            <a href="#shoes" className="hover:opacity-80">Dog Shoes</a>
            <a href="#sleepingdog" className="hover:opacity-80">Sleeping Dog AZ</a>
            <a href="/contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/toohottowalk/?hl=en" target="_blank" className="btn-ghost">Instagram</a>
            <a href="https://www.youtube.com/@TooHotToWalk" target="_blank" className="btn">YouTube</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
        <div className="absolute inset-0 -z-10 opacity-20 paw-bg" />
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight font-display">
                Protect paws. Hydrate pups. Celebrate stories.
              </h2>
              <p className="mt-4 text-gray-700">
                Arizona heat is real. <span className="font-medium">Too Hot To Walk</span> brings the community together
                through kid-friendly dog books, interviews, and practical paw protection for every season.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#books" className="btn">Shop the 9-book series</a>
                <a href="#interviews" className="btn-ghost">Watch interviews</a>
              </div>
              <p className="mt-3 text-xs text-gray-600">Partners: Nellis Auction • Ruffwear • DogBoots</p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/70 ring-1 ring-black/5">
              <Image
                src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1757551892/Untitled_design_nk0veg.png"
                alt="Happy dog enjoying the Phoenix sun"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact (thin bar) */}
      <section className="bg-white border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-3 text-sm text-gray-700 text-center">
          Profits from <span className="font-medium">Hot Paws, Cool Shoes!</span> and <span className="font-medium">Drink Up, Pup!</span> help fund <span className="font-medium">free dog shoes</span> for Arizona families, thanks to our partners.
        </div>
      </section>

      {/* Books (Primary) */}
      <section id="books" className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl font-semibold font-display">Kid Dog Books</h3>
            <a href={books[0].amazonUrl} target="_blank" className="text-sm underline">Shop on Amazon</a>
          </div>
          <p className="mt-2 text-gray-700">Nine heart-warming titles for young readers and dog-loving families.</p>
          <BookCarousel books={books} />
        </div>
      </section>

      {/* Interviews (YouTube) */}
      <section id="interviews" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold font-display">Dog Interviews</h3>
            <p className="mt-2 text-gray-700">Real stories from Arizona’s dog community—trainers, vets, and everyday pup parents.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.youtube.com/@TooHotToWalk" target="_blank" className="btn">Watch on YouTube</a>
              <a href="https://www.instagram.com/toohottowalk/?hl=en" target="_blank" className="btn-ghost">Follow on Instagram</a>
            </div>
          </div>
          <YouTubeEmbed id="W0bqI8CEYVE" />
        </div>
      </section>

      {/* Dog Shoes */}
      <section id="shoes" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold font-display">Dog Shoes for Every Season</h3>
          <p className="mt-2 text-gray-700">Low-cost, practical paw protection for summer heat, winter chill, and rocky trails.</p>
          <ul className="mt-3 text-gray-700 list-disc list-inside">
            <li>Summer: heat-shielded soles for scorching sidewalks</li>
            <li>Winter: warm, water-resistant booties</li>
            <li>Trail: rugged grip for desert and mountain terrain</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">With support from Nellis Auction, Ruffwear, and other partners.</p>
        </div>

        {/* Reserve form (turn on now, inventory system can come next) */}
        <div className="card p-6 md:p-8">
          <h4 className="font-medium">Reserve a pair (local pick-up or shipping)</h4>
          <ReserveShoesForm />
          <p className="mt-2 text-xs text-gray-500">We’ll confirm availability by email. Final payment arranged via email or at a pop-up.</p>
        </div>
      </section>

      {/* Sleeping Dog AZ CTA */}
<section id="sleepingdog" className="bg-gray-50 border-y border-gray-100">
  <div className="mx-auto max-w-6xl px-4 py-12">
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/70 ring-1 ring-black/5">
        <Image
          src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1758137334/20250917_1227_Thirsty_Dogs_Duo_remix_01k5cj7yc1fkebvaf9af1x36r8_1_mmoleb.png"
          alt="Sleeping Dog AZ community water bowls"
          fill
          className="object-cover"
        />
      </div>

      <div className="card p-6 md:p-8">
        <h3 className="text-2xl font-semibold font-display">Sleeping Dog AZ</h3>
        <p className="mt-2 text-gray-700">
          Learn how our sculptural water bowls keep pups hydrated across Arizona—and how you can help expand to more neighborhoods.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {/* TODO: paste your real Sleeping Dog AZ site URL below */}
          <a href="https://sleepingdogaz.example" target="_blank" className="btn-ghost">Learn more</a>

          {/* TODO: paste your real GiveButter campaign URL below */}
          <a href="https://givebutter.com/YOUR_CAMPAIGN" target="_blank" className="btn">Donate on GiveButter</a>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          100% of book profits from <span className="font-medium">Hot Paws, Cool Shoes!</span> and <span className="font-medium">Drink Up, Pup!</span> support free dog shoes and community water access.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Sponsor a Bowl (kept) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="card p-6 md:p-8">
          <h3 className="text-2xl font-semibold font-display">Sponsor a Bowl</h3>
          <p className="mt-2 text-gray-700">Add your logo to a community water bowl and keep local pups hydrated.</p>
          <SponsorForm />
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
            <a href="#books" className="btn-ghost">Books</a>
            <a href="#interviews" className="btn-ghost">Interviews</a>
            <a href="#shoes" className="btn-ghost">Shoes</a>
            <a href="#sleepingdog" className="btn-ghost">Sleeping Dog AZ</a>
            <a href="/contact" className="btn-ghost">Contact</a>
          </div>
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Too Hot To Walk</div>
        </div>
      </footer>

      {/* Book Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": books.map((b, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": { "@type": "Book", "name": b.title, "url": b.amazonUrl, "image": b.coverUrl }
            }))
          })
        }}
      />
    </div>
  )
}
