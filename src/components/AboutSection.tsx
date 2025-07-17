import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-20 bg-light-gray" id="about">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              ABOUT <span className="text-primary-green">FITCOUPLE</span>
            </h2>
            <p className="text-lg leading-relaxed mb-12 opacity-90">
              For over a decade, FitCouple has been the premier destination for fitness
              enthusiasts who demand excellence. Our state-of-the-art facility combines
              cutting-edge equipment with expert guidance to deliver results that exceed expectations.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary-green mb-2">10K+</div>
                <div className="text-base font-medium opacity-80 uppercase tracking-wider">Members</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary-green mb-2">50+</div>
                <div className="text-base font-medium opacity-80 uppercase tracking-wider">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary-green mb-2">24/7</div>
                <div className="text-base font-medium opacity-80 uppercase tracking-wider">Access</div>
              </div>
            </div>
          </div>
          <div className="w-full relative order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Modern gym interior"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-image-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}