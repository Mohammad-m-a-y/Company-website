import api from './api';
import type { Company } from '../types/Company';



export async function getCompany():Promise<Company> {
    const response = await api.get<Company>('/company/');

    return response.data;
    
}