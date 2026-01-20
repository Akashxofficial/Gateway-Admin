"use client"
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className='bg-[#fffaf7]'>
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center overflow-hidden" style={{ backgroundColor: '#f46c44', borderTop: 'none', boxShadow: 'none', isolation: 'isolate', zIndex: 1 }}>
        <div className="absolute left-[1px] top-[-288px] h-full w-8 bg-[#FF6B35] hidden lg:block z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg leading-relaxed max-w-xl text-white">
              Get in touch with Gateway Abroad today. Our team is ready to help you 
              start your journey to global education excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <div className="bg-[#FF6B35] inline-block" style={{ borderTopRightRadius: '25px', overflow: 'hidden' }}>
                <button className="bg-[#f9f5f2] hover:bg-orange-600 text-[#FF6B35] px-8 py-3 font-bold transition-all" style={{ borderTopRightRadius: '25px' }}>
                  Book Consultation
                </button>
              </div>
              <button className="bg-white hover:bg-gray-100 text-[#FF6B35] px-10 py-3 font-bold transition-all" style={{ borderTopRightRadius: '25px' }}>
                Call Now
              </button>
            </div>
          </div>
          <div className="relative w-[760px] h-full">
            <div
              className="w-full h-[550px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop')",
                WebkitMaskImage: "url('images/about-hero-shape.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
                maskImage: "url('images/about-hero-shape.png')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
                maskPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      <div className="relative w-full mt-12 h-[260px] sm:h-[320px] lg:absolute lg:right-0 lg:top-[37px] lg:mt-0 lg:w-auto lg:max-w-[50vw]">
        <img className="w-full h-auto max-w-full object-contain" src="images/about-hero-shape.png" alt="" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Contact Information Section */}
      <section className="py-20 mt-35 relative" style={{ isolation: 'isolate', zIndex: 0, position: 'relative' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[3.6rem] font-bold mb-2" style={{ color: '#FF6B35' }}>
              Get in Touch with
            </h2>
            <h2 className="text-4xl lg:text-[3.6rem] font-bold" style={{ color: '#FF6B35' }}>
              Gateway Abroad
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              Our dedicated team is here to answer your questions and guide you through 
              every step of your study abroad journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Contact Card 1 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Phone Support</h3>
              <p className="text-gray-600 text-center mb-4">Call us for immediate assistance</p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-center" style={{ color: '#FF6B35' }}>+1 (555) 123-4567</p>
                <p className="text-lg font-semibold text-center" style={{ color: '#FF6B35' }}>+1 (555) 987-6543</p>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Mon-Sat: 9 AM - 8 PM</p>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Email Support</h3>
              <p className="text-gray-600 text-center mb-4">Send us your queries</p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-center" style={{ color: '#FF6B35' }}>info@gawayglobal.com</p>
                <p className="text-lg font-semibold text-center" style={{ color: '#FF6B35' }}>support@gawayglobal.com</p>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Response within 24 hours</p>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Visit Our Office</h3>
              <p className="text-gray-600 text-center mb-4">Meet us in person</p>
              <p className="text-center text-gray-700">
                123 Education Street,<br />
                New York, NY 10001<br />
                United States
              </p>
              <p className="text-sm text-gray-500 text-center mt-4">By appointment only</p>
            </motion.div>

            {/* Contact Card 4 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Working Hours</h3>
              <p className="text-gray-600 text-center mb-4">We're here for you</p>
              <div className="space-y-1 text-center">
                <p className="text-gray-700">Monday - Friday: 9 AM - 7 PM</p>
                <p className="text-gray-700">Saturday: 10 AM - 5 PM</p>
                <p className="text-gray-700">Sunday: 11 AM - 4 PM</p>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Emergency support available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#f9f5f2]">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Have questions about studying abroad? Fill out the form below and our 
                education experts will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6" style={{ color: '#FF6B35' }} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Why Choose Us?</h4>
                    <p className="text-gray-600">
                      Personalized guidance from experienced counselors who understand 
                      your unique goals and aspirations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6" style={{ color: '#FF6B35' }} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Quick Response</h4>
                    <p className="text-gray-600">
                      We guarantee a response within 24 hours. For urgent matters, 
                      please call our support line.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Preferred Study Destination
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent">
                    <option value="">Select Destination</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    How can we help you? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="Tell us about your study abroad goals and questions..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms-contact"
                    className="mt-1 mr-3"
                    required
                  />
                  <label htmlFor="terms-contact" className="text-sm text-gray-700">
                    I agree to receive updates and promotional materials from Gateway Abroad
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-6 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
                  style={{ backgroundColor: '#FF6B35', borderTopRightRadius: '25px' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-7xl mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-[3.6rem] font-bold mb-4" style={{ color: '#FF6B35' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Find quick answers to common questions about our services and processes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              question: "What is the best time to start my study abroad application?",
              answer: "We recommend starting your application process at least 12-18 months before your intended start date. This gives you ample time for test preparation, university selection, and visa processing."
            },
            {
              question: "Do you help with scholarship applications?",
              answer: "Yes, we provide comprehensive guidance on scholarship applications. Our team helps identify suitable scholarships, prepare applications, and write compelling essays to maximize your chances of receiving financial aid."
            },
            {
              question: "How long does the visa process take?",
              answer: "Visa processing times vary by country. Typically, student visas take 4-8 weeks to process, but we recommend starting the visa application 3-4 months before your intended travel date."
            },
            {
              question: "What if my English test scores are low?",
              answer: "We offer personalized test preparation services and can help you improve your scores. We also work with universities that offer conditional admission or pathway programs for students with lower English scores."
            },
            {
              question: "Do you provide accommodation assistance?",
              answer: "Yes, we offer comprehensive post-admission support including accommodation assistance. We help you find suitable housing options near your university campus."
            },
            {
              question: "What is your success rate for visa applications?",
              answer: "We maintain a 95% success rate for student visa applications through careful preparation, thorough documentation, and mock interview sessions with our visa experts."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Didn't find your question? Contact us directly
          </p>
          <button
            className="text-white px-8 py-3 font-bold transition-all inline-flex items-center gap-2"
            style={{ backgroundColor: '#FF6B35', borderTopRightRadius: '25px' }}
          >
            <MessageSquare className="h-5 w-5" />
            Ask a Question
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-1 rounded-lg shadow-lg overflow-hidden">
                {/* Placeholder for map - Replace with actual map component */}
                <div className="w-full h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 font-semibold">Interactive Map Location</p>
                    <p className="text-gray-500 text-sm">123 Education Street, New York</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Office Locations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-700">Head Office</h4>
                    <p className="text-gray-600">123 Education Street, New York, NY 10001</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Branch Office</h4>
                    <p className="text-gray-600">456 Learning Avenue, San Francisco, CA 94107</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">International Office</h4>
                    <p className="text-gray-600">789 Knowledge Road, London, UK EC1V 2NX</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Contact</h3>
                <p className="text-gray-600 mb-4">For urgent matters outside business hours:</p>
                <div className="space-y-2">
                  <p className="font-semibold" style={{ color: '#FF6B35' }}>Emergency: +1 (555) 999-8888</p>
                  <p className="text-sm text-gray-500">Available 24/7 for enrolled students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FF6B35' }}>
        <div className="max-w-7xl mx-auto px-2 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of successful students who have achieved their study abroad 
            dreams with Gateway Abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#FF6B35] px-10 py-4 font-bold text-lg hover:bg-gray-100 transition-all" style={{ borderTopRightRadius: '25px' }}>
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white hover:text-[#FF6B35] transition-all" style={{ borderTopRightRadius: '25px' }}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}