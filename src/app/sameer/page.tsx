'use client'

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSubmissions, deleteSubmission } from '../actions';
import { RefreshCcw, LogOut, Trash2 } from 'lucide-react';

export default function SameerPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const res = await getSubmissions(email, password);
    if (res.error) {
      setError(res.error);
    } else {
      setSubmissions(res.data || []);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }

  async function handleRefresh() {
    setRefreshing(true);
    const res = await getSubmissions(email, password);
    if (!res.error) {
      setSubmissions(res.data || []);
    }
    setRefreshing(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    setSubmissions(prev => prev.filter(sub => sub.id !== id));
    
    const res = await deleteSubmission(email, password, id);
    if (res.error) {
      alert(res.error);
      handleRefresh();
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center">
        {!isAuthenticated ? (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 mt-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
              <p className="text-gray-500 mt-2 text-sm">Sign in to view submitted data</p>
            </div>
            
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-colors"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              {error && <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl transition-colors mt-4 disabled:opacity-70 shadow-md"
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Submitted Data</h1>
                <p className="text-gray-500 text-sm mt-1">Viewing all user submissions</p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center gap-2 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium px-4 py-2.5 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCcw size={16} className={refreshing ? "animate-spin" : ""} />
                  {refreshing ? 'Refreshing...' : 'Refresh'}
                </button>
                <button 
                  onClick={() => {
                    setIsAuthenticated(false);
                    setEmail('');
                    setPassword('');
                  }}
                  className="flex items-center gap-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium px-4 py-2.5 rounded-lg transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
            
            {submissions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-500 font-medium">No submissions yet.</p>
                <p className="text-gray-400 text-sm mt-1">When users submit data, it will appear here.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {submissions.map((sub: any) => (
                  <div key={sub.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                          Submission
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {new Date(sub.date).toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Delete Submission"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="whitespace-pre-wrap text-gray-800 font-serif leading-relaxed text-lg bg-gray-50 p-4 rounded-lg border border-gray-100">
                      {sub.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
