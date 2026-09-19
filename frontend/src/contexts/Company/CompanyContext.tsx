import { createContext } from 'react';

import type { Company } from '../../types/Company';

export interface CompanyContextType {
  company: Company | null;
  loading: boolean;
  error: string | null;
}

export const CompanyContext = createContext<CompanyContextType | undefined>(undefined);