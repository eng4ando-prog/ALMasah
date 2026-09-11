import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Drawing from "./pages/Drawing.jsx";
import Layers from "./pages/Layers.jsx";
import Properties from "./pages/Properties.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/80 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 px-4 py-3 overflow-x-auto">
          <Link to="/" className="font-bold text-base mr-2 whitespace-nowrap">masah-pro</Link>
          <div className="flex gap-1 ml-auto">
          <Link to="/" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Home</Link>
          <Link to="/drawing" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Drawing</Link>
          <Link to="/layers" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Layers</Link>
          <Link to="/properties" className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition">Properties</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/layers" element={<Layers />} />
        <Route path="/properties" element={<Properties />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 masah-pro
      </footer>
    </div>
  );
}
