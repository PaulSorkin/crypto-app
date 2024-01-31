import {Layout} from 'antd';
import AppHeader from "./components/layouts/AppHeader";
import AppSider from "./components/layouts/AppSider.jsx";
import AppContent from "./components/layouts/AppContent.jsx";
import {CryptoContextProvider} from "./context/crypto-context.jsx";

function App() {
    return(
        <CryptoContextProvider>
            <Layout>
                <AppHeader/>
                <Layout>
                    <AppSider/>
                    <AppContent />
                </Layout>
            </Layout>
        </CryptoContextProvider>
    )
}

export default App
