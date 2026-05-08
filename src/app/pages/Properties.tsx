import { useState } from "react";
import { MapPin, Bed, Bath, Square, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

type PropertyCategory = "all" | "residential" | "high-rise" | "rentals";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  priceDisplay: string;
  category: PropertyCategory;
  image: string;
  beds?: number;
  baths?: number;
  area: string;
  description: string;
}

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>("all");
  const [priceRange, setPriceRange] = useState<number>(20000000000); // 20B max
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const properties: Property[] = [
    {
      id: 1,
      title: "Nava Terra Cluster",
      location: "Halong Atas, Ambon",
      price: 0,
      priceDisplay: "Open for Booking",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      beds: 3,
      baths: 2,
      area: "75 m²",
      description: "Our available 2026 flagship project. Built on solid ground in Halong Atas, offering modern design and safe housing for families.",
    }
  ];

  const filteredProperties = properties.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= priceRange;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const getCategoryLabel = (category: PropertyCategory): string => {
    const labels = {
      all: "All Properties",
      residential: "Kompleks Perumahan",
      "high-rise": "Apartemen & Hotel",
      rentals: "Kost & Kontrakan",
    };
    return labels[category];
  };

  const formatIDR = (value: number) => {
    if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)} Miliar`;
    if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)} Juta`;
    return `Rp ${value.toLocaleString("id-ID")}`;
  };

  return (
    <div className="bg-[#F5F4F0] min-h-screen">
      {/* Header Section */}
      <section className="bg-[#000000] py-20 md:py-24 lg:py-32 pt-40 md:pt-48 lg:pt-56 rounded-b-[48px] shadow-2xl relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-4">Browse Portfolios.</h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl font-medium">
            Discover your perfect property from our exclusive collection. Use the advanced filters to curate your results.
          </p>
        </div>
      </section>

      {/* Advanced Search & Filter Interface */}
      <section className="-mt-12 relative z-30 w-full mb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white rounded-[32px] p-6 md:p-8 lg:p-10 shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-[#000000]/10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000000]/40" size={20} />
              <input 
                type="text" 
                placeholder="Search by name, neighborhood, or location..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F4F0] border-none rounded-xl md:rounded-2xl pl-12 pr-5 py-4 text-base font-medium outline-none focus:ring-2 focus:ring-[#3C2A21] transition-all"
              />
            </div>
            {/* Options Toggle */}
            <button 
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className={`px-6 py-4 rounded-xl md:rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all ${isFiltersOpen ? 'bg-[#3C2A21] text-white shadow-xl' : 'bg-[#F5F4F0] text-[#000000] hover:bg-[#3C2A21] hover:text-white'}`}
            >
              <SlidersHorizontal size={20} /> Advanced Filters
            </button>
          </div>

          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 mt-8 border-t border-[#000000]/10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Category Filter */}
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/50 mb-4">Asset Classification</label>
                    <div className="inline-flex bg-[#F5F4F0] rounded-2xl p-2 max-w-full overflow-x-auto hide-scrollbar">
                      {(["all", "residential", "high-rise", "rentals"] as PropertyCategory[]).map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                            selectedCategory === cat ? 'bg-white shadow border border-[#000000]/5 text-[#3C2A21]' : 'text-[#000000]/50 hover:text-[#000000]'
                          }`}
                        >
                          {getCategoryLabel(cat)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                     <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/50 mb-4">
                       Maximum Price: <span className="text-[#3C2A21]">{formatIDR(priceRange)}</span>
                     </label>
                     <input 
                      type="range" 
                      min={0} 
                      max={20000000000} 
                      step={50000000}
                      value={priceRange} 
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full accent-[#3C2A21] h-2 bg-[#F5F4F0] rounded-full appearance-none cursor-pointer outline-none"
                    />
                    <div className="flex justify-between text-[#000000]/40 text-[12px] font-medium mt-2">
                      <span>Rp 0</span>
                      <span>Rp 20 Miliar+</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
        </div>
      </section>

      {/* Properties Count */}
      <div className="w-full mb-8 text-[#000000]/60 font-medium">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          Curating <span className="font-bold text-[#3C2A21]">{filteredProperties.length}</span> verified results...
        </div>
      </div>

      {/* Properties Grid */}
      <section className="w-full pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={property.id}
                className="bg-white border border-[#000000]/10 rounded-[32px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_48px_64px_rgba(0,0,0,0.08)] transition-all group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
                  />
                  <div className="absolute top-5 right-5">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-md text-[#3C2A21] text-[12px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      {getCategoryLabel(property.category)}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <div className="bg-[#3C2A21] text-white px-5 py-2.5 rounded-full font-bold text-lg shadow-xl">
                      {property.priceDisplay}
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#000000] tracking-tight mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-[#000000]/50 mb-6 font-medium text-[15px]">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>

                  <p className="text-[#000000]/70 text-base leading-[1.6] mb-8 line-clamp-2 flex-1">
                    {property.description}
                  </p>

                  <div className="flex items-center gap-4 mb-8 text-[#000000]/80">
                    {property.beds && (
                      <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2 rounded-xl">
                        <Bed size={16} className="text-[#3C2A21]" />
                        <span className="font-bold text-[13px]">{property.beds}</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2 rounded-xl">
                        <Bath size={16} className="text-[#3C2A21]" />
                        <span className="font-bold text-[13px]">{property.baths}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2 rounded-xl">
                      <Square size={16} className="text-[#3C2A21]" />
                      <span className="font-bold text-[13px]">{property.area}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/property/${property.id}`} 
                    className="w-full bg-[#000000] text-white px-6 py-4 rounded-xl md:rounded-2xl font-bold text-base text-center hover:bg-[#3C2A21] active:scale-[0.98] transition-all shadow-md"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 md:py-32"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Search size={32} className="text-[#000000]/20" />
            </div>
            <h3 className="text-3xl font-semibold text-[#000000] mb-2">No matches found</h3>
            <p className="text-lg md:text-xl text-[#000000]/50 font-medium">Try adjusting your filters or search query to discover more properties.</p>
          </motion.div>
        )}
        </div>
      </section>
    </div>
  );
}
