import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-4">
                <Sidebar />
                <div className="bg-red-500 col-span-3 rounded-lg">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
