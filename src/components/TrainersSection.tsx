import Image from 'next/image'

export default function TrainersSection() {
  return (
    <section className="py-20 bg-black" id="trainers">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          MEET OUR <span className="text-primary-green">TRAINERS</span>
        </h2>

        {/* Main Trainer Feature Card */}
        <div className="bg-light-gray rounded-2xl p-8 md:p-12 border border-medium-gray mb-16 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4">
                <span className="bg-primary-green/10 border border-primary-green text-primary-green px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  HEAD TRAINER
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-green">Marcus Rodriguez</h3>
              <p className="text-xl font-semibold mb-6 opacity-80 uppercase tracking-wider">Master Fitness Coach & Gym Owner</p>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                With over 15 years of experience in the fitness industry, Marcus is the visionary behind FitCouple.
                A former competitive bodybuilder and certified master trainer, he has transformed thousands of lives
                through his innovative training methodologies and personalized approach to fitness.
              </p>
              <p className="text-base leading-relaxed opacity-80">
                Marcus specializes in strength training, body transformation, and nutrition coaching. His philosophy
                centers on building sustainable fitness habits that last a lifetime, not just quick fixes.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-primary-green/20 text-primary-green px-3 py-1 rounded-full text-sm font-medium">15+ Years Experience</span>
                <span className="bg-primary-green/20 text-primary-green px-3 py-1 rounded-full text-sm font-medium">Master Certified</span>
                <span className="bg-primary-green/20 text-primary-green px-3 py-1 rounded-full text-sm font-medium">Body Transformation Expert</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
              <div className="relative">
                <Image
                  src="/assets/images/main-trainer.png"
                  alt="Marcus Rodriguez - Head Trainer"
                  width={400}
                  height={800}
                  className="lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Trainers */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            OUR <span className="text-primary-green">EXPERT TEAM</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-light-gray rounded-xl overflow-hidden border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Alex Thompson"
              width={250}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold mb-1 text-primary-green">Alex Thompson</h4>
              <p className="text-sm font-semibold mb-3 opacity-80 uppercase tracking-wider">Strength & Conditioning</p>
              <p className="text-sm leading-relaxed opacity-90">
                10+ years in powerlifting and strength training. Specializes in muscle building and power development.
              </p>
            </div>
          </div>

          <div className="bg-light-gray rounded-xl overflow-hidden border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Maria Garcia"
              width={250}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold mb-1 text-primary-green">Maria Garcia</h4>
              <p className="text-sm font-semibold mb-3 opacity-80 uppercase tracking-wider">Yoga & Wellness</p>
              <p className="text-sm leading-relaxed opacity-90">
                Certified yoga instructor with expertise in mindfulness and flexibility training for holistic wellness.
              </p>
            </div>
          </div>

          <div className="bg-light-gray rounded-xl overflow-hidden border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <Image
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
              alt="David Kim"
              width={250}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold mb-1 text-primary-green">David Kim</h4>
              <p className="text-sm font-semibold mb-3 opacity-80 uppercase tracking-wider">HIIT & Cardio</p>
              <p className="text-sm leading-relaxed opacity-90">
                High-intensity interval training expert helping clients achieve maximum results through efficient workouts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}