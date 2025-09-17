export const metadata = { title: 'Contact — Too Hot To Walk' };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-display font-semibold">Contact</h1>
      <p className="mt-2 text-gray-700">
        Questions about books, interviews, or dog shoes? Send us a note and we’ll get back within 1–2 business days.
      </p>

      <form action="https://formspree.io/f/xgvlqweb" method="POST" className="card p-6 md:p-8 mt-6 grid gap-3">
        <input type="hidden" name="_subject" value="Website Contact" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <label className="text-sm font-medium">Your Name *</label>
        <input name="name" required className="w-full" />

        <label className="text-sm font-medium mt-2">Email *</label>
        <input name="email" type="email" required className="w-full" />

        <label className="text-sm font-medium mt-2">Message *</label>
        <textarea name="message" required rows={5} className="w-full" />

        <button className="btn mt-2 w-fit">Send message</button>
      </form>
    </main>
  );
}
