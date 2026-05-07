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
      title: "Modern Minimalist House",
      location: "BSD City, Tangerang",
      price: 3200000000,
      priceDisplay: "Rp 3.2M",
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
      price: 8500000000,
      priceDisplay: "Rp 8.5M",
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
      price: 5700000000,
      priceDisplay: "Rp 5.7M",
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
      price: 2800000000,
      priceDisplay: "Rp 2.8M",
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
      price: 12500000000,
      priceDisplay: "Rp 12.5M",
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
      price: 4200000000,
      priceDisplay: "Rp 4.2M",
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
      price: 42000000, // 3.5m/mo approx 42m/yr
      priceDisplay: "Rp 3.5 Juta/bulan",
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
      price: 45000000,
      priceDisplay: "Rp 45 Juta/tahun",
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
      price: 57600000, // 4.8m/mo -> 57.6m/yr
      priceDisplay: "Rp 4.8 Juta/bulan",
      category: "rentals",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      beds: 1,
      baths: 1,
      area: "30 m²",
      description: "Modern co-living with shared amenities",
    },
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
      <section className="bg-[#000000] py-[120px] pt-[200px] rounded-b-[48px] shadow-2xl relative z-20">
        <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px]">
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold text-white tracking-tight mb-[16px]">Browse Portfolios.</h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 max-w-2xl font-medium">
            Discover your perfect property from our exclusive collection. Use the advanced filters to curate your results.
          </p>
        </div>
      </section>

      {/* Advanced Search & Filter Interface */}
      <section className="-mt-[48px] relative z-30 px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[64px]">
        <div className="bg-white rounded-[32px] p-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-[#000000]/10">
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-[20px] top-[50%] -translate-y-1/2 text-[#000000]/40" size={20} />
              <input 
                type="text" 
                placeholder="Search by name, neighborhood, or location..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F4F0] border-none rounded-[16px] pl-[56px] pr-[20px] py-[20px] text-[16px] font-medium outline-none focus:ring-2 focus:ring-[#3C2A21] transition-all"
              />
            </div>
            {/* Options Toggle */}
            <button 
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className={`px-[32px] py-[20px] rounded-[16px] font-bold text-[16px] flex items-center justify-center gap-[12px] transition-all ${isFiltersOpen ? 'bg-[#3C2A21] text-white shadow-xl' : 'bg-[#F5F4F0] text-[#000000] hover:bg-[#3C2A21] hover:text-white'}`}
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
                <div className="pt-[32px] mt-[32px] border-t border-[#000000]/10 grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                  
                  {/* Category Filter */}
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/50 mb-[16px]">Asset Classification</label>
                    <div className="inline-flex bg-[#F5F4F0] rounded-[16px] p-[8px] max-w-full overflow-x-auto hide-scrollbar">
                      {(["all", "residential", "high-rise", "rentals"] as PropertyCategory[]).map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-[24px] py-[12px] rounded-[10px] font-bold text-[14px] whitespace-nowrap transition-all ${
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
                     <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/50 mb-[16px]">
                       Maximum Price: <span className="text-[#3C2A21]">{formatIDR(priceRange)}</span>
                     </label>
                     <input 
                      type="range" 
                      min={0} 
                      max={20000000000} 
                      step={50000000}
                      value={priceRange} 
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full accent-[#3C2A21] h-[8px] bg-[#F5F4F0] rounded-full appearance-none cursor-pointer outline-none"
                    />
                    <div className="flex justify-between text-[#000000]/40 text-[12px] font-medium mt-[8px]">
                      <span>Rp 0</span>
                      <span>Rp 20 Miliar+</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Properties Count */}
      <div className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[32px] text-[#000000]/60 font-medium">
        Curating <span className="font-bold text-[#3C2A21]">{filteredProperties.length}</span> verified results...
      </div>

      {/* Properties Grid */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto pb-[120px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
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
                  <div className="absolute top-[20px] right-[20px]">
                    <span className="inline-block px-[16px] py-[8px] bg-white/90 backdrop-blur-md text-[#3C2A21] text-[12px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      {getCategoryLabel(property.category)}
                    </span>
                  </div>
                  <div className="absolute bottom-[20px] left-[20px]">
                    <div className="bg-[#3C2A21] text-white px-[20px] py-[10px] rounded-full font-bold text-[18px] shadow-xl">
                      {property.priceDisplay}
                    </div>
                  </div>
                </div>

                <div className="p-[32px] flex-1 flex flex-col">
                  <h3 className="text-[24px] font-bold text-[#000000] tracking-tight mb-[8px]">{property.title}</h3>
                  <div className="flex items-center gap-[8px] text-[#000000]/50 mb-[24px] font-medium text-[15px]">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>

                  <p className="text-[#000000]/70 text-[16px] leading-[1.6] mb-[32px] line-clamp-2 flex-1">
                    {property.description}
                  </p>

                  <div className="flex items-center gap-[16px] mb-[32px] text-[#000000]/80">
                    {property.beds && (
                      <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[8px] rounded-[12px]">
                        <Bed size={16} className="text-[#3C2A21]" />
                        <span className="font-bold text-[13px]">{property.beds}</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[8px] rounded-[12px]">
                        <Bath size={16} className="text-[#3C2A21]" />
                        <span className="font-bold text-[13px]">{property.baths}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[8px] rounded-[12px]">
                      <Square size={16} className="text-[#3C2A21]" />
                      <span className="font-bold text-[13px]">{property.area}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/property/${property.id}`} 
                    className="w-full bg-[#000000] text-white px-[24px] py-[16px] rounded-[16px] font-bold text-[16px] text-center hover:bg-[#3C2A21] active:scale-[0.98] transition-all shadow-md"
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
            className="text-center py-[120px]"
          >
            <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mx-auto mb-[24px] shadow-lg">
              <Search size={32} className="text-[#000000]/20" />
            </div>
            <h3 className="text-[28px] font-semibold text-[#000000] mb-[8px]">No matches found</h3>
            <p className="text-[18px] text-[#000000]/50 font-medium">Try adjusting your filters or search query to discover more properties.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
