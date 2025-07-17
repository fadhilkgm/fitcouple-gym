export default function ContactSection() {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          GET IN <span className="text-primary-green">TOUCH</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary-green">Visit Our Gym</h3>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">📍</div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary-green">Address</h4>
                  <p className="opacity-90 leading-relaxed">123 Fitness Street<br />Downtown, City 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">📞</div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary-green">Phone</h4>
                  <p className="opacity-90 leading-relaxed">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">✉️</div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary-green">Email</h4>
                  <p className="opacity-90 leading-relaxed">info@fitcouple.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">🕒</div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary-green">Hours</h4>
                  <p className="opacity-90 leading-relaxed">Mon-Fri: 5AM - 11PM<br />Sat-Sun: 6AM - 10PM</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary-green">Send us a Message</h3>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-light-gray border border-medium-gray rounded-lg p-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-primary-green placeholder:text-white/50"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-light-gray border border-medium-gray rounded-lg p-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-primary-green placeholder:text-white/50"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="bg-light-gray border border-medium-gray rounded-lg p-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-primary-green placeholder:text-white/50"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-light-gray border border-medium-gray rounded-lg p-4 text-white text-base transition-colors duration-300 focus:outline-none focus:border-primary-green placeholder:text-white/50 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}