import { useState, useEffect } from 'react';

// Hero Slider Component
function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Need Home Repairs?", subtitle: "Professional handyman services in Oakville" },
    { title: "Need Basement Renovation?", subtitle: "Transform your basement into a beautiful living space" },
    { title: "Need Drywall Installation?", subtitle: "Expert drywall services for your home" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')`,
            }}
          ></div>
          <div className="relative z-20 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">{slide.subtitle}</p>
            <a
              href="tel:14163335290"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      ))}
      {/* Slider dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-800">Oakville Handyman</h1>
            <p className="text-xs text-gray-500">Services</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Services</a>
          <a href="#reviews" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Reviews</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:14163335290" className="text-blue-700 font-bold text-lg">416-333-5290</a>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4">
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Services</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-700 font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">Contact</a>
            <a href="tel:14163335290" className="text-blue-700 font-bold">📞 416-333-5290</a>
          </nav>
        </div>
      )}
    </header>
  );
}

// About Section
function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Do you need an Oakville, ON, handyman?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Oakville Handyman Services, a division of Endless Space Solutions is a professional choice for all your home improvement and repair services. We'll be able to have our technicians on the job quickly to resolve any problems you might be facing. When it comes to dependable residential services, make us your choice in Oakville, ON.
        </p>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    { title: "Handyman Services", icon: "🔧", color: "from-blue-500 to-blue-600" },
    { title: "Basement Renovations", icon: "🏠", color: "from-green-500 to-green-600" },
    { title: "Bathroom Renovations", icon: "🚿", color: "from-cyan-500 to-cyan-600" },
    { title: "Deck Installation", icon: "🪵", color: "from-amber-500 to-amber-600" },
    { title: "Drywall Installation", icon: "🧱", color: "from-gray-500 to-gray-600" },
    { title: "Kitchen Renovations", icon: "🍳", color: "from-red-500 to-red-600" },
    { title: "Fence Installation", icon: "🏗️", color: "from-yellow-600 to-yellow-700" },
    { title: "Painting", icon: "🎨", color: "from-purple-500 to-purple-600" },
    { title: "General Repairs", icon: "🛠️", color: "from-indigo-500 to-indigo-600" },
    { title: "Carpentry Work", icon: "🪚", color: "from-orange-500 to-orange-600" },
    { title: "Flooring Services", icon: "🏡", color: "from-teal-500 to-teal-600" },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-lg`}>
                {service.icon}
              </div>
              <h4 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function ReviewsSection() {
  const reviews = [
    {
      name: "Becca Pace",
      rating: 5,
      time: "2 years ago",
      text: "I've used Leonard for a large drywall project and also to hang 2 large mirrors. I've always been really happy with the quality of the work, his professionalism and his quotes. Highly recommend.",
      initial: "BP",
      color: "bg-blue-500",
    },
    {
      name: "leroy duffus",
      rating: 5,
      time: "2 years ago",
      text: "Outstanding",
      initial: "LD",
      color: "bg-green-500",
    },
    {
      name: "Just Myself",
      rating: 5,
      time: "5 years ago",
      text: "Leonard was able to fit a replacement exterior screen that was made by a different company and with slightly imperfect size. He did so with a commitment to a good fit despite the quirky window. He is friendly and happy when working! Thanks Leonard!",
      initial: "JM",
      color: "bg-purple-500",
    },
    {
      name: "Jan Peters",
      rating: 5,
      time: "5 years ago",
      text: "Leonard and James completed a bathroom renovation for us last week. Despite the inevitable challenges along the way, the work was completed on time, on budget and we were very pleased with the result. Leonard was communicative throughout.",
      initial: "JP",
      color: "bg-orange-500",
    },
    {
      name: "Mike Penny",
      rating: 5,
      time: "5 years ago",
      text: "Leonard and his team provide prompt and quality service. As a property manager I constantly have small jobs come up. Oakville Handyman has become a top tier supplier for my company. I can count on Leonard to get the job done for the price he quoted.",
      initial: "MP",
      color: "bg-red-500",
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What our customers say
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-gray-600 font-medium">4.5 (10 reviews)</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Review us on Google</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.time}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              <div className="mt-4 flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-xs text-gray-400">Posted on Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Oakville Handyman Services</h3>
              </div>
            </div>
            <div className="mb-6">
              <a href="tel:14163335290" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">
                416-333-5290
              </a>
            </div>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To book an appointment, please fill out the contact form or call us on <strong>416-333-5290</strong>
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service...</option>
                  <option value="handyman">Handyman Services</option>
                  <option value="basement">Basement Renovations</option>
                  <option value="kitchen">Kitchen Renovations</option>
                  <option value="bathroom">Bathroom Renovations</option>
                  <option value="drywall">Drywall Installation</option>
                  <option value="deck">Deck Installation</option>
                  <option value="fence">Fence Installation</option>
                  <option value="painting">Painting</option>
                  <option value="repairs">General Repairs</option>
                  <option value="carpentry">Carpentry Work</option>
                  <option value="flooring">Flooring Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Describe the work required..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Oakville Handyman Services</h3>
                <p className="text-xs text-gray-400">A division of Endless Space Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional home improvement and repair services in Oakville, ON and the GTA.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Handyman Services</li>
              <li>Basement Renovations</li>
              <li>Kitchen Renovations</li>
              <li>Bathroom Renovations</li>
              <li>Drywall Installation</li>
              <li>Deck Installation</li>
              <li>Painting</li>
              <li>General Repairs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:14163335290" className="hover:text-white transition-colors">416-333-5290</a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Oakville, ON, Canada</span>
              </div>
            </div>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Oakville Handyman Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// CTA Banner
function CTABanner() {
  return (
    <section className="bg-blue-700 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to get started on your project?
        </h3>
        <p className="text-blue-100 mb-6">
          Call us today for a free estimate on any of our services.
        </p>
        <a
          href="tel:14163335290"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
        >
          📞 Call 416-333-5290
        </a>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <HeroSlider />
      </div>
      <AboutSection />
      <ServicesSection />
      <CTABanner />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
