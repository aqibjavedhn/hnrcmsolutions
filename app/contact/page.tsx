export default function ContactPage() {
  return (
    <main className="pt-40 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <div className="mt-10 glass rounded-3xl p-10">
          <form className="space-y-6">
            <input
              placeholder="Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <button className="bg-cyanPrimary text-black px-8 py-4 rounded-full font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}