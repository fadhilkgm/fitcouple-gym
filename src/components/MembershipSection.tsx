export default function MembershipSection() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-center">
          MEMBERSHIP <span className="text-primary-green">PLANS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray relative transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-4 text-primary-green">BASIC</h3>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$29</span>
              <span className="text-lg opacity-70">/month</span>
            </div>
            <ul className="list-none mb-8 text-left">
              <li className="py-2 text-base opacity-90">✓ Gym access during peak hours</li>
              <li className="py-2 text-base opacity-90">✓ Basic equipment usage</li>
              <li className="py-2 text-base opacity-90">✓ Locker room access</li>
              <li className="py-2 text-base opacity-90">✓ Free fitness assessment</li>
            </ul>
            <button className="btn-secondary w-full">CHOOSE PLAN</button>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border-2 border-primary-green relative transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-green text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary-green">PREMIUM</h3>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$59</span>
              <span className="text-lg opacity-70">/month</span>
            </div>
            <ul className="list-none mb-8 text-left">
              <li className="py-2 text-base opacity-90">✓ 24/7 gym access</li>
              <li className="py-2 text-base opacity-90">✓ All equipment & classes</li>
              <li className="py-2 text-base opacity-90">✓ Personal training session</li>
              <li className="py-2 text-base opacity-90">✓ Nutrition consultation</li>
              <li className="py-2 text-base opacity-90">✓ Guest passes (2/month)</li>
            </ul>
            <button className="btn-primary w-full">CHOOSE PLAN</button>
          </div>
          <div className="bg-black rounded-2xl p-8 text-center border border-medium-gray relative transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
            <h3 className="text-2xl font-bold mb-4 text-primary-green">VIP</h3>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$99</span>
              <span className="text-lg opacity-70">/month</span>
            </div>
            <ul className="list-none mb-8 text-left">
              <li className="py-2 text-base opacity-90">✓ All Premium benefits</li>
              <li className="py-2 text-base opacity-90">✓ Unlimited personal training</li>
              <li className="py-2 text-base opacity-90">✓ Priority class booking</li>
              <li className="py-2 text-base opacity-90">✓ Massage therapy sessions</li>
              <li className="py-2 text-base opacity-90">✓ VIP lounge access</li>
            </ul>
            <button className="btn-secondary w-full">CHOOSE PLAN</button>
          </div>
        </div>
      </div>
    </section>
  )
}