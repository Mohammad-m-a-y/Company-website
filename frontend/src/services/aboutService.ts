import api from './api';

import type { About } from '../types/About/About';
import type { AboutDetail } from '../types/About/AboutDetail';



export async function getAbout(): Promise<About> {
  const response = await api.get<About>('/about/');

  return response.data;
}



export async function getAboutDetail(): Promise<AboutDetail> {
  const response = await api.get<AboutDetail>('/about/detail/');

  return response.data;
}