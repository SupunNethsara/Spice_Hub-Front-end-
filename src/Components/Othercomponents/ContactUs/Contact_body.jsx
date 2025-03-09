import React from "react";

const Contact_body = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl">Let's Talk</h1>
          <p className="mt-4 text-gray-600">Have questions or need help? Feel free to reach out.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-gray-100 text-center hover:bg-gray-100 transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
                📍
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-900">Our Location</h2>
              <p className="mt-2 text-gray-600">123 Street, Colombo, Sri Lanka</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 text-center hover:bg-gray-100 transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
                📞
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-900">Phone</h2>
              <p className="mt-2 text-gray-600">+94 123 456 789</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 text-center hover:bg-gray-100 transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
                ✉️
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-900">Email</h2>
              <p className="mt-2 text-gray-600">info@example.com</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 text-center hover:bg-gray-100 transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-white">
                ⏰
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-900">Working Hours</h2>
              <p className="mt-2 text-gray-600">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
          <div className="p-8 rounded-lg bg-gray-50">
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <div className="rounded-lg max-w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757686!2d79.8604544153932!3d6.921682495003807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1621234567890!5m2!1sen!2slk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_body;