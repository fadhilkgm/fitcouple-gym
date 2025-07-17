export default function Footer() {
  return (
    <footer className="bg-black border-t border-medium-gray py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-extrabold text-primary-green mb-4">FITCOUPLE</h3>
            <p className="leading-relaxed opacity-80 mb-6">
              Transform your body, transform your life. Join the FitCouple community today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-green font-medium transition-opacity duration-300 hover:opacity-70">Instagram</a>
              <a href="#" className="text-primary-green font-medium transition-opacity duration-300 hover:opacity-70">Facebook</a>
              <a href="#" className="text-primary-green font-medium transition-opacity duration-300 hover:opacity-70">Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary-green">Contact</h4>
            <div className="space-y-2">
              <p className="opacity-80">123 Fitness Street</p>
              <p className="opacity-80">City, State 12345</p>
              <p className="opacity-80">(555) 123-4567</p>
              <p className="opacity-80">info@fitcouple.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary-green">Hours</h4>
            <div className="space-y-2">
              <p className="opacity-80">Monday - Friday: 5:00 AM - 11:00 PM</p>
              <p className="opacity-80">Saturday - Sunday: 6:00 AM - 10:00 PM</p>
              <p className="opacity-80">24/7 Access for Premium Members</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-medium-gray opacity-60">
          <p>&copy; 2024 FitCouple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}