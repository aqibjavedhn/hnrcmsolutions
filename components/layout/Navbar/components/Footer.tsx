export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.png" className="h-14 mb-4" />
          <p className="text-white/70">
            Premium RCM solutions for healthcare providers across the United States.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-white/70">
            <li>Medical Billing</li>
            <li>Credentialing</li>
            <li>Denial Management</li>
            <li>Virtual Assistants</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-white/70">(505) 510-4672</p>
          <p className="text-white/70">info@hnrcmsolutions.com</p>
        </div>
      </div>
    </footer>
  );
}