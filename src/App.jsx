import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiUpload, FiDollarSign, FiSend, FiShield, FiZap, FiBarChart2, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 shadow">
          <div className="text-2xl font-bold">SoftSell</div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
            Turn Unused Software into Cash Fast!
          </motion.h1>
          <p className="mb-6 max-w-xl">
            SoftSell helps you unlock value from your unused software licenses in just a few clicks.
          </p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            Get a Quote
          </a>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FiUpload size={40} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upload License</h3>
              <p>Submit your unused software license securely through our platform.</p>
            </div>
            <div>
              <FiDollarSign size={40} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
              <p>Receive a fair market valuation within minutes.</p>
            </div>
            <div>
              <FiSend size={40} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p>Get instant payment directly to your account.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <FiShield size={32} className="mx-auto mb-2" />
              <p>Trusted by 1000+ Clients</p>
            </div>
            <div>
              <FiZap size={32} className="mx-auto mb-2" />
              <p>Fast Payments</p>
            </div>
            <div>
              <FiBarChart2 size={32} className="mx-auto mb-2" />
              <p>Top Market Prices</p>
            </div>
            <div>
              <FiLock size={32} className="mx-auto mb-2" />
              <p>Secure & Private</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-4 bg-white dark:bg-gray-700 rounded shadow">
              <p>"SoftSell made it so easy to cash in my unused licenses. Fast and fair!"</p>
              <div className="mt-4 font-semibold">— Jane Doe, IT Manager at TechCorp</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded shadow">
              <p>"I was skeptical at first, but SoftSell delivered exactly as promised."</p>
              <div className="mt-4 font-semibold">— John Smith, Freelancer at DevWorks</div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto grid gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded shadow">
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              className="p-3 rounded border dark:bg-gray-700"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}

            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="p-3 rounded border dark:bg-gray-700"
            />
            {errors.email && <span className="text-red-500">Valid email is required</span>}

            <input
              type="text"
              placeholder="Company"
              {...register('company')}
              className="p-3 rounded border dark:bg-gray-700"
            />

            <select {...register('licenseType')} className="p-3 rounded border dark:bg-gray-700">
              <option value="">Select License Type</option>
              <option value="ms-office">MS Office</option>
              <option value="adobe-suite">Adobe Suite</option>
              <option value="other">Other</option>
            </select>

            <textarea
              placeholder="Message"
              {...register('message')}
              className="p-3 rounded border dark:bg-gray-700"
              rows="4"
            ></textarea>

            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
              Submit
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
