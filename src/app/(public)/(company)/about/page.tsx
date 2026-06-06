import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-primary/80 rounded-md text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text rounded-2xl -5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl max-w-xl">
              We deliver food, happiness, and convenience to your door — fast,
              fresh, and friendly.
            </p>
          </div>
          <div className="flex-1 relative w-full h-64 md:h-96">
            <Image
              src="/images/burger.jpg"
              alt="Foodpanda Style Hero"
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* our story */}

      <section className="py-20 mt-2 rounded-md bg-red-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Sajilo Order, our mission is to connect people with the food they
            love. Whether it’s a quick bite or a feast with friends, we bring
            your favorite meals from top local restaurants to your doorstep —
            fast, affordable, and reliable.we saw how busy life can get — work,
            family, traffic — and how finding time for delicious, fresh food was
            becoming harder. That’s when we decided to bring food from your
            favorite restaurants straight to your door — quickly, reliably, and
            with a smile.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 mt-2 rounded-md bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Sajilo Order, our mission is to connect people with the food they
            love. Whether it’s a quick bite or a feast with friends, we bring
            your favorite meals from top local restaurants to your doorstep —
            fast, affordable, and reliable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      {/* Meet the Team */}
      <section className="max-w-6xl bg-gray-50 mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Ronaldo",
              role: "Founder & CEO",
              img: "/images/ronaldo.jpg",
            },
            {
              name: "Brat pitt",
              role: "Head of Operations",
              img: "/images/brad.jpg",
            },
            {
              name: "Tom Hardy",
              role: "Delivery Manager",
              img: "/images/tom.jpg",
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

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 rounded-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Browse",
                desc: "Explore restaurants and menus near you.",
                img: "/images/food-searching.jpg",
              },
              {
                title: "Order",
                desc: "Place your order in just a few clicks.",
                img: "/images/order-com.jpg",
              },
              {
                title: "Enjoy",
                desc: "Sit back and enjoy delicious food at your door.",
                img: "/images/enjoy.jpg",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="relative w-full h-52 mb-4 rounded-xl overflow-hidden shado">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" py-16 text-primary bg-gray-50 rounded-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Taste Happiness?
        </h2>
        <p className="mb-6 text-lg">
          Start ordering now and get food delivered at lightning speed.
        </p>
        <Link
          href="/menu"
          className="bg-primary text-white font-semibold px-6 py-3 outline-none rounded-full hover:opacity-80 transition"
        >
          Explore Menu
        </Link>
      </section>
      <Footer />
    </div>
  );
}
