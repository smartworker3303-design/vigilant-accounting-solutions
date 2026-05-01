'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitData } from "../actions";

export default function ViewPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitData(formData);
      
      if (result.success) {
        setMessage('Submitted successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage(result.message || 'Failed to submit.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to submit. An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Submit Information</h1>
            <p className="text-gray-500">Please enter your data below. Unlimited characters allowed.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="text" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Input
              </label>
              <textarea
                id="text"
                name="text"
                rows={10}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-y text-gray-800"
                placeholder="Type anything here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {loading ? 'Submitting...' : 'Submit Data'}
            </button>
            
            {message && (
              <p className={`text-center text-sm font-medium p-3 rounded-lg ${message.includes('success') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
