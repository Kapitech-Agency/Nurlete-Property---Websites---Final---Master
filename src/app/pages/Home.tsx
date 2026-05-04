import { Link } from "react-router";
import { Search, Home as HomeIcon, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Jakarta Selatan",
      price: "Rp 8.5M",
      image: "https://images.unsplash.com/photo-1706808849803-f61304e024ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      type: "Residential",
    },
    {
      id: 2,
      title: "Contemporary Pool House",
      location: "Bali",
      price: "Rp 12.3M",
      image: "https://images.unsplash.com/photo-1706855203772-c249b75fe016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      type: "Residential",
    },
    {
      id: 3,
      title: "Elite Modern Estate",
      location: "Bandung",
      price: "Rp 15.7M",
      image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      type: "Residential",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Luxury Property"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Find Your Dream Property Today
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the finest residential, commercial, and rental properties across Indonesia
            </p>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Search className="w-5 h-5" />
              Explore Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EstateHub
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you find the perfect property
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <HomeIcon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wide Selection
              </h3>
              <p className="text-gray-600">
                Access thousands of verified properties from residential complexes to luxury apartments
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Best Market Prices
              </h3>
              <p className="text-gray-600">
                Get competitive pricing and expert market insights to make informed decisions
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trusted & Secure
              </h3>
              <p className="text-gray-600">
                All properties are verified and transactions are handled with utmost security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-lg text-gray-600">
                Handpicked properties just for you
              </p>
            </div>
            <Link
              to="/properties"
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-3">
                    {property.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">
                      {property.price}
                    </span>
                    <Link
                      to="/properties"
                      className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you discover the ideal home or investment opportunity
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
