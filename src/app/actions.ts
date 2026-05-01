'use server'

import { supabase } from '../lib/supabase';

export async function submitData(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text) return { success: false, message: 'Text is required' };

  try {
    const { error } = await supabase.from('inquiries').insert([
      {
        first_name: 'View',
        last_name: 'Submission',
        email: 'system-view@vasbpo.net',
        message: text,
        service: 'VIEW_PAGE_SUBMISSION',
        status: 'new'
      }
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, message: 'Database error: ' + error.message };
    }
    
    return { success: true, message: 'Submitted successfully' };
  } catch (e: any) {
    console.error('Server error:', e);
    return { success: false, message: 'Server error: ' + e.message };
  }
}

export async function getSubmissions(email: string, pass: string) {
  if (email !== 'sameer@gmail.com' || pass !== 'AFSafs@123') {
    return { error: 'Invalid credentials' };
  }
  
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .eq('service', 'VIEW_PAGE_SUBMISSION')
      .order('created_at', { ascending: false });

    if (error) {
      return { error: error.message };
    }

    // Map to expected format for the frontend
    const formattedData = data.map(item => ({
      id: item.id,
      text: item.message,
      date: item.created_at
    }));

    return { data: formattedData };
  } catch (e: any) {
    return { error: e.message };
  }
}

export async function deleteSubmission(email: string, pass: string, id: string | number) {
  if (email !== 'sameer@gmail.com' || pass !== 'AFSafs@123') {
    return { error: 'Invalid credentials' };
  }

  try {
    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);

    if (error) {
      return { error: error.message };
    }
    return { success: true };
  } catch (e: any) {
    return { error: e.message };
  }
}
