export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#2c3e50] text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">GIS Pro</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-gray-300 transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300 transition duration-300">Maps</a></li>
                <li><a href="#" className="hover:text-gray-300 transition duration-300">Analysis</a></li>
                <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Explore the World with GIS Pro</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Discover powerful mapping tools and spatial analysis capabilities to make informed decisions.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#2c3e50] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">Get Started</button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2c3e50] transition duration-300">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-4xl text-[#2c3e50] mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-gray-600">Create and customize interactive maps with our powerful mapping tools.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-4xl text-[#2c3e50] mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Spatial Analysis</h3>
              <p className="text-gray-600">Perform advanced spatial analysis to gain insights from your geographic data.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-4xl text-[#2c3e50] mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600">Visualize your data in stunning charts and graphs for better understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://via.placeholder.com/600x400" alt="GIS Pro" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">About GIS Pro</h2>
              <p className="text-gray-600 mb-4">GIS Pro is a leading provider of geographic information systems and spatial analysis tools. Our mission is to empower businesses and organizations with the tools they need to make data-driven decisions.</p>
              <p className="text-gray-600 mb-4">With years of experience in the industry, we have helped countless clients across various sectors to leverage the power of geographic data.</p>
              <button className="bg-[#2c3e50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a252f] transition duration-300">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2c3e50] flex items-center justify-center text-white font-bold mr-4">JD</div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-gray-600">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"GIS Pro has revolutionized the way we analyze our spatial data. The tools are intuitive and the support team is fantastic."</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2c3e50] flex items-center justify-center text-white font-bold mr-4">AS</div>
                <div>
                  <h3 className="font-semibold">Alice Smith</h3>
                  <p className="text-gray-600">GIS Specialist, EcoSolutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"I've been using GIS Pro for years and it's always been a reliable partner in our environmental projects."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GIS Pro</h3>
              <p className="text-gray-300">Empowering businesses with geographic information systems and spatial analysis tools.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Maps</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Analysis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300">123 GIS Street, Tech City, TC 12345</p>
              <p className="text-gray-300">Email: info@gispro.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full text-gray-800" />
                <button className="bg-white text-[#2c3e50] px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-200 transition duration-300">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 GIS Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}