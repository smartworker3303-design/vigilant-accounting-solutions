'use server'

import fs from 'fs';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'submissions.json');

export async function submitData(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text) return { success: false, message: 'Text is required' };

  let data: any[] = [];
  try {
    if (fs.existsSync(FILE_PATH)) {
      const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
      if (fileData) {
         data = JSON.parse(fileData);
      }
    }
  } catch (e) {
    console.error('Error reading file', e);
  }

  data.push({
    id: Date.now(),
    text,
    date: new Date().toISOString()
  });

  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  
  return { success: true, message: 'Submitted successfully' };
}

export async function getSubmissions(email: string, pass: string) {
  if (email !== 'sameer@gmail.com' || pass !== 'AFSafs@123') {
    return { error: 'Invalid credentials' };
  }
  
  let data: any[] = [];
  try {
    if (fs.existsSync(FILE_PATH)) {
      const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
      if (fileData) {
         data = JSON.parse(fileData);
      }
    }
  } catch (e) {
    console.error('Error reading file', e);
  }
  return { data: data.reverse() }; // Return newest first
}

export async function deleteSubmission(email: string, pass: string, id: number) {
  if (email !== 'sameer@gmail.com' || pass !== 'AFSafs@123') {
    return { error: 'Invalid credentials' };
  }

  let data: any[] = [];
  try {
    if (fs.existsSync(FILE_PATH)) {
      const fileData = fs.readFileSync(FILE_PATH, 'utf-8');
      if (fileData) {
         data = JSON.parse(fileData);
      }
    }
  } catch (e) {
    console.error('Error reading file', e);
  }

  const newData = data.filter((item) => item.id !== id);
  fs.writeFileSync(FILE_PATH, JSON.stringify(newData, null, 2));
  
  return { success: true };
}
