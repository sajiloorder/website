export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">YumEats</h2>
          <p className="mt-2 text-sm">Delicious food delivered to your doorstep.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@yumeats.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-sm mt-8 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} YumEats. All rights reserved.
      </div>
    </footer>
  );
}
