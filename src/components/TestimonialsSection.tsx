import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          WHAT OUR <span className="text-primary-green">MEMBERS</span> SAY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-light-gray rounded-2xl p-8 border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="flex flex-col h-full">
              <p className="text-lg leading-relaxed mb-6 italic opacity-90 flex-grow">
                "FitCouple completely transformed my approach to fitness. The trainers are
                incredibly knowledgeable and the community is so supportive. I've never
                felt stronger or more confident."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sarah Johnson"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-cover rounded-full border border-primary-green"
                />
                <div>
                  <div className="font-semibold text-lg mb-1">Sarah Johnson</div>
                  <div className="text-sm opacity-70 text-primary-green">Member since 2022</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-gray rounded-2xl p-8 border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="flex flex-col h-full">
              <p className="text-lg leading-relaxed mb-6 italic opacity-90 flex-grow">
                "The equipment is top-notch and the facility is always clean. But what
                really sets FitCouple apart is the personal attention from the staff.
                They genuinely care about your progress."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Mike Chen"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-cover rounded-full border border-primary-green"
                />
                <div>
                  <div className="font-semibold text-lg mb-1">Mike Chen</div>
                  <div className="text-sm opacity-70 text-primary-green">Member since 2021</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-gray rounded-2xl p-8 border border-medium-gray transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <div className="flex flex-col h-full">
              <p className="text-lg leading-relaxed mb-6 italic opacity-90 flex-grow">
                "I've tried many gyms, but FitCouple is in a league of its own. The
                variety of classes, the modern equipment, and the motivating atmosphere
                keep me coming back every day."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Emma Rodriguez"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-cover rounded-full border border-primary-green"
                />
                <div>
                  <div className="font-semibold text-lg mb-1">Emma Rodriguez</div>
                  <div className="text-sm opacity-70 text-primary-green">Member since 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}