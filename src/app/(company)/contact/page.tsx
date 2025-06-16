import Footer from '@/components/footer/Footer'
import Image from 'next/image'


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white rounded-lg text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full rounded-2xl h-[70vh]">
        <Image
          src="/images/burger.jpg" // place image in public/images folder
          alt="About Us Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-70"
        />
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Who We Are
          </h1>
          <p className="text-white text-lg mt-4 max-w-2xl">
            Bringing the taste of your favorite restaurants right to your doorstep.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Started in the heart of the city, we are on a mission to redefine food delivery in Nepal. Our platform connects food lovers with local restaurants and home chefs, offering a wide range of options to satisfy every craving. What began as a small team of foodies has grown into a passionate company dedicated to serving you better every day.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-700 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: 'Speed & Reliability',
              desc: 'We deliver your food hot and on time, no matter the weather.',
              icon: '🚀',
            },
            {
              title: 'Freshness First',
              desc: 'We prioritize fresh, high-quality ingredients in every dish.',
              icon: '🥗',
            },
            {
              title: 'Customer Focused',
              desc: 'We value your feedback and strive for 100% satisfaction.',
              icon: '🤝',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: 'Aarav Shrestha',
              role: 'Founder & CEO',
              img: '/images/team1.jpg',
            },
            {
              name: 'Maya Gurung',
              role: 'Head of Operations',
              img: '/images/team2.jpg',
            },
            {
              name: 'Sanjay Lama',
              role: 'Delivery Manager',
              img: '/images/team3.jpg',
            },
          ].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <h4 className="text-lg font-bold mt-4">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-300 text-white py-16 rounded-2xl mb-1 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-lg mb-6">Browse our menu and get your cravings delivered in minutes.</p>
        <a
          href="/menu"
          className="inline-block bg-white text-red-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Explore Menu
        </a>
      </section>
      <Footer />
    </div>
  )
}
