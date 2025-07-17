import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden pt-20 pl-10" id="home">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/assets/images/header-img.jpg"
          alt="Man working out with weights"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient z-20"></div>
      </div>
      <div className="text-left z-30 relative">
        <div className="max-w-7xl mx-auto px-5 lg:ml-0 lg:pl-8">
          {/* Badge - Hidden on mobile */}
          <div className="hidden md:inline-block mb-8 mt-10">
            <span className="bg-primary-green/10 border border-primary-green text-primary-green px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-lg">
              💪 PREMIUM FITNESS CENTER
            </span>
          </div>

          {/* Main Heading - Simplified on mobile */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-6 drop-shadow-lg mt-4 md:mt-0">
            <span className="block md:inline">UNLEASH YOUR </span>
            <span className="text-primary-green drop-shadow-green-glow">POTENTIAL</span>
            <br className="hidden md:block" />
            <span className="block md:inline mt-2 md:mt-0">TRANSFORM YOUR </span>
            <span className="text-primary-green drop-shadow-green-glow">LIFE</span>
          </h1>

          {/* Description - Shorter on mobile */}
          <p className="text-base md:text-lg font-normal max-w-2xl md:max-w-3xl mb-6 md:mb-10 leading-relaxed opacity-95 drop-shadow-sm">
            <span className="md:hidden">Join thousands transforming their lives at FitCouple with expert coaching and world-class equipment.</span>
            <span className="hidden md:block">Join thousands who've transformed their bodies and minds at FitCouple. Experience world-class equipment, expert coaching, and a community that drives you to achieve greatness every single day.</span>
          </p>

          {/* Stats - Simplified layout on mobile */}
          <div className="flex justify-start gap-6 md:gap-12 my-6 md:my-10 flex-wrap">
            <div className="text-left">
              <span className="block text-2xl md:text-3xl font-extrabold text-primary-green mb-1 drop-shadow-green-light">10K+</span>
              <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider font-medium">Members</span>
            </div>
            <div className="text-left">
              <span className="block text-2xl md:text-3xl font-extrabold text-primary-green mb-1 drop-shadow-green-light">50+</span>
              <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider font-medium">Trainers</span>
            </div>
            <div className="text-left">
              <span className="block text-2xl md:text-3xl font-extrabold text-primary-green mb-1 drop-shadow-green-light">24/7</span>
              <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider font-medium">Access</span>
            </div>
          </div>

          {/* CTA Buttons - Now shown on both mobile and desktop */}
          <div className="flex gap-3 md:gap-5 justify-start flex-wrap mb-10">
            <button className="btn-primary text-xs md:text-sm px-4 py-2 md:px-6 md:py-3">START YOUR JOURNEY</button>
            <button className="btn-secondary text-xs md:text-sm px-4 py-2 md:px-6 md:py-3">BOOK FREE TRIAL</button>
          </div>
        </div>
      </div>
    </section>
  )
}