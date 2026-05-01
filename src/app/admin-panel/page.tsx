"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Building2, Clock, CheckCircle2, Search, Filter, Lock, User, LogOut, ChevronDown, ChevronUp, Trash2, CornerUpRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

// Define the shape of our data
interface Inquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'replied'>('all');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchInquiries();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput === 'fahad@gmail.com' && passwordInput === 'AFSafs@123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setLoginError('');
      setLoading(true);
      fetchInquiries();
    } else {
      setLoginError('Invalid Administrator credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setEmailInput('');
    setPasswordInput('');
  };

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .neq('service', 'VIEW_PAGE_SUBMISSION')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching inquiries:", error);
      } else {
        setInquiries(data as Inquiry[] || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you certain you want to permanently delete this inquiry? This action cannot be reversed.')) {
      try {
        const { error } = await supabase.from('inquiries').delete().eq('id', id);
        if (error) throw error;
        setInquiries(prev => prev.filter(i => i.id !== id));
      } catch (err) {
        console.error("Error deleting inquiry:", err);
        alert('Failed to delete inquiry. Please try again.');
      }
    }
  };

  const handleMarkReplied = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const { error } = await supabase.from('inquiries').update({ status: 'replied' }).eq('id', id);
      if (error) throw error;
      setInquiries(prev => prev.map(i => i.id === id ? { ...i, status: 'replied' } : i));
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const filteredInquiries = inquiries.filter(i => {
    if (filterStatus === 'all') return true;
    return i.status === filterStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen border-t-[8px] border-accent flex flex-col justify-center items-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent -z-10 rounded-bl-full"></div>
          
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-primary rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
              <Lock className="text-accent" size={32} />
            </div>
            <h1 className="text-3xl font-black text-primary mb-2">Admin Portal</h1>
            <p className="text-gray-500 font-medium">Please sign in to securely access data.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 text-center shadow-inner">
                {loginError}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input 
                  type="email" 
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium" 
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all group active:scale-[0.98]"
            >
              Sign In Securely
            </button>
            
            <div className="text-center pt-4">
              <Link href="/" className="text-sm text-gray-500 hover:text-accent font-bold transition-colors">
                &larr; Return to Website
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen border-t-[8px] border-accent flex flex-col antialiased">
      {/* Top Admin Navigation */}
      <header className="bg-primary px-8 py-4 flex items-center justify-between shadow-md z-20 sticky top-0">
        <div className="flex items-center gap-4">
          <Link href="/" className="bg-white p-1 rounded-md overflow-hidden h-10 w-28 flex items-center justify-center transition-transform hover:scale-105">
            <img src="/logo.jpg" alt="Logo" className="w-[120%] mix-blend-darken" />
          </Link>
          <div className="h-6 w-px bg-gray-600 hidden sm:block"></div>
          <span className="text-white font-bold tracking-wider text-sm uppercase hidden sm:block">Secure Admin Portal</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
             <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg">
               F
             </div>
             <div>
               <p className="text-white text-sm font-bold leading-tight">fahad@gmail.com</p>
               <p className="text-gray-400 text-[11px] uppercase tracking-wider font-bold mt-0.5">Administrator</p>
             </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 border border-transparent hover:border-red-600 text-red-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="flex-1 bg-gray-50 flex items-stretch">
        
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col shadow-sm hidden lg:flex">
          <nav className="space-y-2 flex-1 pt-4">
            <button className="w-full flex items-center gap-3 bg-accent/10 text-accent font-bold px-4 py-3 rounded-xl border border-accent/20 shadow-sm transition-transform hover:-translate-y-0.5">
              <Mail size={20} />
              Inquiries
              <span className="ml-auto bg-accent text-white text-xs py-0.5 px-2 rounded-full shadow-sm">
                {inquiries.filter(i => i.status === 'new').length}
              </span>
            </button>
          </nav>
          
          <div className="pt-6 border-t border-gray-100 pb-2">
             <Link href="/" className="w-full flex justify-center text-primary hover:text-accent text-sm font-bold transition-colors">
               &larr; View Live Website
             </Link>
          </div>
        </div>

        {/* Dashboard Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-gray-200 pb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-primary mb-2">Form Submissions</h1>
                <p className="text-gray-500 font-medium text-lg">Manage and review incoming database inquiries.</p>
              </div>
              <div className="flex gap-3 relative">
                 <div className="relative">
                   <button 
                     onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                     className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl flex items-center gap-2 font-bold shadow-sm hover:border-accent/40 hover:bg-gray-50 transition-colors h-full"
                   >
                     <Filter size={18} className="text-primary" /> 
                     {filterStatus === 'all' ? 'All Inquiries' : filterStatus === 'new' ? 'New Only' : 'Replied Only'}
                     <ChevronDown size={16} className="text-gray-400 ml-1" />
                   </button>
                   
                   {/* Dropdown Menu */}
                   {isFilterDropdownOpen && (
                     <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden">
                       <button onClick={() => {setFilterStatus('all'); setIsFilterDropdownOpen(false);}} className="w-full text-left px-4 py-3 hover:bg-gray-50 font-bold text-gray-700 border-b border-gray-50 flex items-center space-x-2">
                         <Mail size={16} className="text-gray-400"/> <span>All Inquiries</span>
                       </button>
                       <button onClick={() => {setFilterStatus('new'); setIsFilterDropdownOpen(false);}} className="w-full text-left px-4 py-3 hover:bg-gray-50 font-bold text-gray-700 border-b border-gray-50 flex items-center space-x-2">
                         <div className="w-2 h-2 rounded-full bg-accent"></div> <span>New Only</span>
                       </button>
                       <button onClick={() => {setFilterStatus('replied'); setIsFilterDropdownOpen(false);}} className="w-full text-left px-4 py-3 hover:bg-gray-50 font-bold text-gray-700 flex items-center space-x-2">
                         <CheckCircle2 size={16} className="text-green-500"/> <span>Replied Only</span>
                       </button>
                     </div>
                   )}
                 </div>

                 <button onClick={fetchInquiries} className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 border border-primary-dark h-full">
                   Refresh Data
                 </button>
              </div>
            </div>

            {/* Submissions List */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-32 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-gray-200 border-t-accent rounded-full animate-spin mb-6 shadow-sm"></div>
                  <p className="text-gray-500 font-bold text-lg">Synchronizing secure database...</p>
                </div>
              ) : filteredInquiries.length === 0 ? (
                <div className="text-center py-20 bg-white border border-dashed border-gray-300 rounded-[2rem] shadow-sm">
                  <div className="w-20 h-20 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-gray-100">
                    <Search size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">No Inquiries Found</h3>
                  <p className="text-gray-500 font-medium text-lg">No submissions match the current filter.</p>
                </div>
              ) : (
                filteredInquiries.map((sub) => {
                  const isExpanded = expandedIds.includes(sub.id);
                  
                  return (
                    <div 
                      key={sub.id} 
                      onClick={(e) => toggleExpand(sub.id, e)}
                      className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group cursor-pointer
                        ${isExpanded ? 'border-accent/40 shadow-md ring-1 ring-accent/10' : 'border-gray-200 hover:border-accent/30'}
                      `}
                    >
                      {/* Left vertical accent bar for new inquiries */}
                      {sub.status === 'new' && (
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent z-10"></div>
                      )}

                      {/* Header (Always Visible) */}
                      <div className={`p-6 md:p-8 flex flex-col lg:flex-row gap-4 lg:items-center justify-between ${isExpanded ? 'bg-gray-50/50' : ''}`}>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h2 className={`text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 ${sub.status === 'new' ? 'text-gray-900' : 'text-gray-600'}`}>
                              {sub.first_name} {sub.last_name}
                            </h2>
                            {sub.status === 'new' && (
                              <span className="bg-accent text-white text-[10px] font-black uppercase tracking-wider py-1 px-3 rounded-md shadow-sm">New</span>
                            )}
                            {sub.status === 'replied' && (
                              <span className="bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-md flex items-center gap-1">
                                <CheckCircle2 size={12} /> Replied
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                            <p className="text-gray-500 text-sm font-semibold flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                              <Building2 size={14} className="text-gray-400"/> 
                              {sub.company || 'No Company'}
                            </p>
                            <p className="text-gray-500 text-sm font-semibold flex items-center gap-1.5 relative top-0.5">
                              <span className="text-xs uppercase tracking-widest text-gray-400 font-extrabold mr-1">Service:</span> 
                              <span className="text-accent">{sub.service || 'General Inquiry'}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between lg:justify-end gap-6 min-w-max">
                          <p className="text-gray-400 font-bold text-sm flex items-center gap-2">
                            <Clock size={14} className="text-gray-300" />
                            {new Date(sub.created_at).toLocaleDateString(undefined, {
                              month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
                            })}
                          </p>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-gray-500 group-hover:bg-accent/5 group-hover:text-accent'}`}>
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details Body */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 md:p-8 bg-white grid grid-cols-1 lg:grid-cols-4 gap-8">
                          
                          <div className="lg:col-span-3">
                            <span className="text-xs uppercase tracking-widest font-extrabold text-gray-400 mb-3 block">Client Message</span>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
                              <p className="text-gray-700 font-medium leading-relaxed text-base whitespace-pre-wrap">
                                "{sub.message}"
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-6 flex flex-col justify-between border-l-2 border-gray-50 pl-8">
                            <div className="space-y-6">
                              <div>
                                 <span className="text-[10px] uppercase tracking-widest font-extrabold text-gray-400 mb-2 block">Direct Email</span>
                                 <a href={`mailto:${sub.email}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-3 text-[15px] text-primary hover:text-accent font-bold transition-colors group/link break-all">
                                   <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover/link:bg-accent/10">
                                     <Mail size={14} className="text-primary group-hover/link:text-accent" /> 
                                   </div>
                                   {sub.email}
                                 </a>
                              </div>
                              {sub.phone && (
                                <div>
                                   <span className="text-[10px] uppercase tracking-widest font-extrabold text-gray-400 mb-2 block">Direct Phone</span>
                                   <a href={`tel:${sub.phone}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-3 text-[15px] text-primary hover:text-accent font-bold transition-colors group/link tracking-wide">
                                     <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover/link:bg-accent/10">
                                       <Phone size={14} className="text-primary group-hover/link:text-accent" /> 
                                     </div>
                                     {sub.phone}
                                   </a>
                                </div>
                              )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-gray-100">
                              {sub.status === 'new' && (
                                <button
                                  onClick={(e) => handleMarkReplied(sub.id, e)}
                                  className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm"
                                >
                                  <CornerUpRight size={16} /> Mark as Replied
                                </button>
                              )}
                              <button
                                onClick={(e) => handleDelete(sub.id, e)}
                                className="w-full bg-white hover:bg-red-50 text-gray-500 hover:text-red-600 border border-gray-200 hover:border-red-200 px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm"
                              >
                                <Trash2 size={16} /> Delete Data
                              </button>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
