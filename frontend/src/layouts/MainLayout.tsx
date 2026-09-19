import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { CompanyProvider } from '../contexts/Company';


function MainLayout(){

    return(
 
        <CompanyProvider>
            
            <Header /> 

                <main>
                    <Outlet />
                </main>

            <Footer /> 
        
        </CompanyProvider>
 
    )
}
export default MainLayout;