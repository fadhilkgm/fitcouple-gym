export default function ServicesSection() {
  return (
    <section className="py-20 bg-light-gray" id="services">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          OUR <span className="text-primary-green">SERVICES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="text-5xl mb-6">💪</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">Strength Training</h3>
            <p className="leading-relaxed opacity-90">
              Build muscle and increase strength with our comprehensive weight training programs and state-of-the-art equipment.
            </p>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="text-5xl mb-6">🏃</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">Cardio Workouts</h3>
            <p className="leading-relaxed opacity-90">
              Improve cardiovascular health with our variety of cardio equipment and high-intensity interval training classes.
            </p>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="text-5xl mb-6">🧘</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">Yoga & Flexibility</h3>
            <p className="leading-relaxed opacity-90">
              Enhance flexibility, balance, and mindfulness through our yoga classes and stretching programs.
            </p>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="text-5xl mb-6">👨‍🏫</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">Personal Training</h3>
            <p className="leading-relaxed opacity-90">
              Get personalized attention and customized workout plans from our certified personal trainers.
            </p>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="text-5xl mb-6">🏊</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">Swimming Pool</h3>
            <p className="leading-relaxed opacity-90">
              Enjoy low-impact workouts and aqua fitness classes in our Olympic-sized swimming pool.
            </p>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="text-5xl mb-6">🥗</div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">Nutrition Coaching</h3>
            <p className="leading-relaxed opacity-90">
              Optimize your results with personalized nutrition plans and dietary guidance from our experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}