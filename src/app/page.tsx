import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingCart, Image as ImageIcon, Folder, ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Tributes", href: "/tributes" }
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1530103862676-de3c9de59a9f?w=1600&q=80",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1600&q=80",
    "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1600&q=80",
  ];

  const floatingButtons = [
    { icon: <ShoppingCart className="w-5 h-5 text-white" />, label: "Buy Gift" },
    { icon: <ImageIcon className="w-5 h-5 text-white" />, label: "View Gallery" },
    { icon: <Folder className="w-5 h-5 text-white" />, label: "Send Memory" },
  ];

  const galleryItems = [
    { category: "MEMORIES", title: "Childhood", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80", link: "/childhood" },
    { category: "BONDING", title: "Family", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80", link: "/family" },
    { category: "SERVICE", title: "Ministry", image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80", link: "/ministry" },
    { category: "IMPACT", title: "Legacy", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80", link: "/legacy" },
    // { category: "CELEBRATION", title: "Birthday", image: "https://images.unsplash.com/photo-1530103862676-de3c9de59a9f?w=600&q=80", link: "/birthday" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF5E6] text-[#0A192F] font-sans selection:bg-[#1D4A77] selection:text-white relative overflow-hidden">




      {/* Floating Scroll to Top */}
      <button className="fixed right-8 bottom-8 z-50 bg-[#0A192F] hover:bg-[#1D4A77] text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105 pointer-events-auto">
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="slider-track h-full">
            {[...heroImages, ...heroImages].map((src, i) => (
              <div key={i} className="w-[100vw] h-full flex-shrink-0 relative">
                <img src={src} className="w-full h-full object-cover object-center" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDF5E6] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDF5E6]/80 via-transparent to-[#FDF5E6]/80"></div>
              </div>
            ))}
          </div>
        </div>

        <header className="absolute top-0 w-full z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          {/* Custom Luminous Lambent Logo */}
          <div className="flex flex-col items-center justify-center mt-2 group cursor-pointer relative top-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C49B5A] font-semibold mb-[-8px] transition-all group-hover:tracking-[0.4em] z-10 bg-[#FDF5E6]/80 px-2 rounded-full">Celebrating The</span>
            <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[#C49B5A] leading-none text-center" style={{ fontFamily: "Georgia, serif" }}>
              Luminous <br />
              <span className="ml-12 italic">Lambent</span>
            </div>
            <div className="text-[10px] tracking-widest font-black self-end mt-[-10px] mr-2 text-[#0A192F] bg-[#FDF5E6]/80 px-1">
              TRAVIS<br />UCHE
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold hover:text-[#C49B5A] transition-colors uppercase tracking-widest relative group text-[#0A192F]">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C49B5A] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-[#0A192F] hover:text-[#C49B5A] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <div className="relative z-10 text-center flex flex-col items-center px-4 mt-20">
          <p className="text-lg md:text-xl font-bold tracking-widest mb-6 text-[#C49B5A] uppercase">Honoring a remarkable life</p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter leading-none text-[#0A192F]">
            Travis <span className="italic block mt-[-20px] md:mt-[-40px]">Uche</span>
          </h1>
        </div>
      </section>

      {/* Services Section Now Milestones */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative">
        <div className="absolute top-10 left-0 text-[#C49B5A]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></svg>
        </div>

        <div>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
            A Journey of<br />
            <span className="italic">purpose</span>
          </h2>
          <div className="relative mt-20">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80" alt="Milestones" className="relative z-10 w-48 h-48 object-cover rounded-full ml-10 border-4 border-white shadow-xl" />
          </div>
        </div>

        <div className="flex flex-col gap-16 pt-10">
          {[
            { title: 'Dedication', desc: 'A lifelong commitment to uplifting those around him through selfless service and love.' },
            { title: 'Leadership', desc: 'Guiding by example with wisdom, patience, and a vision that inspires generations.' },
            { title: 'Compassion', desc: 'Always putting family and community first, creating a welcoming space for everyone.' }
          ].map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <h3 className="text-4xl font-serif mb-4 flex items-center justify-between group-hover:text-[#1D4A77] transition-colors">
                {item.title}
              </h3>
              <p className="text-lg text-[#1D4A77]/70 leading-relaxed mb-4 max-w-md">
                {item.desc}
              </p>
              <div className="w-8 h-8 rounded-full border border-[#0A192F] flex items-center justify-center group-hover:bg-[#0A192F] group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanding Gallery Section - Links to subpages */}
      <section id="gallery" className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#C49B5A]">Life Galleries</h2>
          <h3 className="text-4xl font-serif text-[#0A192F]">Explore the memories</h3>
        </div>
        <div className="flex w-full h-[500px] md:h-[600px] gap-2 md:gap-4">
          {galleryItems.map((item, index) => (
            <Link href={item.link} key={index} className="group flex flex-col flex-1 hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer h-full bg-white shadow-md rounded-md overflow-hidden">
              <div className="w-full h-full group-hover:h-[70%] transition-all duration-700 ease-in-out overflow-hidden relative">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="w-full h-0 group-hover:h-[30%] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-white overflow-hidden flex flex-col justify-center">
                <div className="pt-4 md:pt-6 px-4 md:px-8">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#C49B5A] mb-1 md:mb-2">{item.category}</p>
                  <h3 className="text-2xl md:text-4xl font-serif text-[#0A192F] mb-2 md:mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</h3>
                  <span className="text-xs md:text-sm font-medium border-b border-black md:pb-1 inline-flex items-center gap-1 w-max">
                    View Album <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-[#C49B5A]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Us Slider & Images Section Now Biography */}
      <section className="py-24 max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="w-full md:w-1/3">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Travis Portrait" className="w-full h-auto object-cover rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="w-full md:w-2/3 mt-12 md:mt-24">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&q=80" alt="Group of friends" className="w-full h-[500px] object-cover rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative mb-24">
          <div className="md:col-span-3">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[#C49B5A]">Biography</p>
            <h2 className="text-5xl font-serif text-[#0A192F]">Travis Uche</h2>
          </div>
          <div className="md:col-span-4 md:col-start-5 text-[#1D4A77]/90 text-lg leading-relaxed font-medium">
            <p className="mb-4">Travis Uche has been a beacon of light and a source of inspiration to everyone who has had the privilege of knowing him. From his early childhood marked by boundless curiosity, to his impactful years of leadership and ministry, his journey is a testament to the power of unwavering faith and dedication.</p>
          </div>
          <div className="md:col-span-4 text-[#1D4A77]/90 text-lg leading-relaxed font-medium">
            <p>He carries a legacy of kindness, always prioritizing the needs of his family and community. As we celebrate this remarkable milestone, we look back at the beautiful memories shared and look forward to the luminous chapters still to be written in his incredible story.</p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-[#C49B5A]/20 hidden md:block mt-8"></div>
        </div>
      </section>

      {/* Banner CTA Section */}
      <section className="w-full relative h-[600px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1509305717900-84f40c4ca3ee?w=1600&q=80" alt="Celebration party" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A192F]/70"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <p className="text-[#C49B5A] text-sm font-bold tracking-widest uppercase mb-6">Join the Celebration</p>
          <h2 className="text-5xl md:text-7xl font-serif text-white max-w-4xl leading-tight mb-12">
            Celebrating the legacy <br />
            <span className="italic">of Travis Uche</span>
          </h2>
          <Button className="bg-[#C49B5A] hover:bg-[#b08b51] text-white rounded-full px-10 py-6 text-lg font-bold border-none cursor-pointer">
            RSVP Now
          </Button>
        </div>
      </section>

      {/* Planning Steps Vertical Timeline Section */}
      <section id="schedule" className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative bg-[#FAF0E6]/50">
        <div className="md:col-span-4 pl-4 md:pl-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#C49B5A]">Event Schedule</p>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-[#0A192F]">
            The Grand <br />
            Celebration
          </h2>
          <p className="text-lg text-[#1D4A77]/70 leading-relaxed max-w-sm">
            Join us as we walk through a carefully curated sequence of events designed to honor Travis and create unforgettable memories.
          </p>
        </div>

        <div className="md:col-span-8 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-[#1D4A77]/10 z-0 hidden md:block"></div>

          <div className="flex flex-col gap-16 relative z-10 w-full max-w-2xl">
            {[
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" /></svg>, title: "Arrival & Welcome" },
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>, title: "Tributes & Testimonials" },
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg>, title: "Gala Dinner" },
              { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>, title: "Dance & Celebration" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg border border-[#1D4A77]/10 z-10 mx-auto md:mx-0 text-[#0A192F]">
                  {step.icon}
                </div>
                <div className="pt-2 text-center md:text-left">
                  <h3 className="text-3xl font-serif mb-4 text-[#0A192F]">{step.title}</h3>
                  <p className="text-base text-[#1D4A77]/70 leading-relaxed max-w-lg">
                    An elegant sequence of events dedicated to celebrating a lifetime of achievements, surrounded by friends, family, and loved ones.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-[#0A192F] text-[#FDF5E6] py-16 text-center border-t-4 border-[#C49B5A]">
        <div className="flex flex-col items-center justify-center mt-2 group cursor-pointer mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C49B5A] font-semibold mb-[-8px] transition-all group-hover:tracking-[0.4em] z-10">Celebrating The</span>
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[#C49B5A] leading-none text-center" style={{ fontFamily: "Georgia, serif" }}>
            Luminous <br />
            <span className="ml-12 italic">Lambent</span>
          </div>
        </div>
        <p className="text-[#FDF5E6]/60 mb-8">© 2026 Travis Uche Celebration. All rights reserved.</p>
      </footer>

    </div>
  );
}
