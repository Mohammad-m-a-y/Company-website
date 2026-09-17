import api from './api';
import type { ContactFormData } from '../types/Contact';

export async function sendContactMessage(
  data: ContactFormData
) {
  const response = await api.post('/contact/', data);

  return response.data;
}