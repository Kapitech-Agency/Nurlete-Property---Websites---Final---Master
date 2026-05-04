import { Outlet, Link, useLocation } from "react-router";
import { Building2 } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">EstateHub</span>
            </Link>

            <div className="flex gap-8">
              <Link
                to="/"
                className={`text-base font-medium transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/properties"
                className={`text-base font-medium transition-colors ${
                  isActive('/properties')
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Properties
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold">EstateHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in finding the perfect property.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                <li><Link to="/properties" className="hover:text-emerald-500 transition-colors">Properties</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Property Types</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Kompleks Perumahan</li>
                <li>Apartemen & Hotel</li>
                <li>Kost & Kontrakan</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@estatehub.com</li>
                <li>Phone: +62 123 456 789</li>
                <li>Address: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 EstateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
