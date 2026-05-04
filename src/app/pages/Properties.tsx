import { useState } from "react";
import { MapPin, Bed, Bath, Square, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

type PropertyCategory = "all" | "residential" | "high-rise" | "rentals";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  category: PropertyCategory;
  image: string;
  beds?: number;
  baths?: number;
  area: string;
  description: string;
}

export default function Properties() {
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>("all");

  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Minimalist House",
      location: "BSD City, Tangerang",
      price: "Rp 3.2M",
      category: "residential",
      image: "https://images.unsplash.com/photo-1706808849803-f61304e024ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beds: 4,
      baths: 3,
      area: "250 m²",
      description: "Beautiful modern house in prestigious residential complex",
    },
    {
      id: 2,
      title: "Luxury Pool Villa",
      location: "Alam Sutera, Tangerang",
      price: "Rp 8.5M",
      category: "residential",
      image: "https://images.unsplash.com/photo-1706855203772-c249b75fe016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beds: 5,
      baths: 4,
      area: "450 m²",
      description: "Stunning villa with private pool and garden",
    },
    {
      id: 3,
      title: "Elite Residence Complex",
      location: "Sentul City, Bogor",
      price: "Rp 5.7M",
      category: "residential",
      image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      beds: 4,
      baths: 3,
      area: "320 m²",
      description: "Premium house in exclusive gated community",
    },
    {
      id: 4,
      title: "Grand Mahogany Apartment",
      location: "Sudirman, Jakarta",
      price: "Rp 2.8M",
      category: "high-rise",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      beds: 2,
      baths: 2,
      area: "85 m²",
      description: "Luxury apartment with city skyline views",
    },
    {
      id: 5,
      title: "Sky Tower Penthouse",
      location: "SCBD, Jakarta Selatan",
      price: "Rp 12.5M",
      category: "high-rise",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      beds: 3,
      baths: 3,
      area: "180 m²",
      description: "Exclusive penthouse with panoramic views",
    },
    {
      id: 6,
      title: "Boutique Hotel Suite",
      location: "Kemang, Jakarta Selatan",
      price: "Rp 4.2M",
      category: "high-rise",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      beds: 1,
      baths: 1,
      area: "55 m²",
      description: "Modern hotel-style apartment with amenities",
    },
    {
      id: 7,
      title: "Student Kost Premium",
      location: "UI Depok, Jawa Barat",
      price: "Rp 3.5 Juta/bulan",
      category: "rentals",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      beds: 1,
      baths: 1,
      area: "25 m²",
      description: "Fully furnished room near university campus",
    },
    {
      id: 8,
      title: "Executive Kontrakan",
      location: "Bintaro, Tangerang Selatan",
      price: "Rp 45 Juta/tahun",
      category: "rentals",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      beds: 3,
      baths: 2,
      area: "120 m²",
      description: "Spacious rental house for families",
    },
    {
      id: 9,
      title: "Co-Living Space",
      location: "Tebet, Jakarta Selatan",
      price: "Rp 4.8 Juta/bulan",
      category: "rentals",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      beds: 1,
      baths: 1,
      area: "30 m²",
      description: "Modern co-living with shared amenities",
    },
  ];

  const filteredProperties =
    selectedCategory === "all"
      ? properties
      : properties.filter((p) => p.category === selectedCategory);

  const getCategoryLabel = (category: PropertyCategory): string => {
    const labels = {
      all: "All Properties",
      residential: "Kompleks Perumahan",
      "high-rise": "Apartemen & Hotel",
      rentals: "Kost & Kontrakan",
    };
    return labels[category];
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Browse Properties</h1>
          <p className="text-xl text-emerald-100">
            Discover your perfect property from our extensive collection
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <label className="font-semibold text-gray-700">Filter by Category:</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as PropertyCategory)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 font-medium text-gray-700 hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
                >
                  <option value="all">All Properties</option>
                  <option value="residential">Kompleks Perumahan</option>
                  <option value="high-rise">Apartemen & Hotel</option>
                  <option value="rentals">Kost & Kontrakan</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="text-gray-600">
              Showing <span className="font-semibold text-emerald-600">{filteredProperties.length}</span> properties
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                      {getCategoryLabel(property.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>

                  <div className="flex items-center gap-1 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{property.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    {property.beds && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">{property.price}</div>
                    </div>
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No properties found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
