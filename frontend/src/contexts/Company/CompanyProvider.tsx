import {
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { getCompany } from '../../services/companyService';
import type { Company } from '../../types/Company';

import {CompanyContext} from './CompanyContext';


interface CompanyProviderProps {children: ReactNode;}


function CompanyProvider({children,}: CompanyProviderProps) {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCompany() {
      try {
        const data = await getCompany();
        setCompany(data);
      } catch (err) {
        console.error(err);
        setError('خطا در دریافت اطلاعات شرکت.');
      } finally {
        setLoading(false);
      }
    }

    fetchCompany();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        company,
        loading,
        error,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export default CompanyProvider;