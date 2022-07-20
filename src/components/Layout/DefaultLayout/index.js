import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="w-full">
            <Header />
            <div className="grid grid-cols-12 pt-[70px] h-screen">
                <Sidebar />
                <div className="bg-violet-100 col-span-10 rounded-lg overscroll-auto overflow-y-scroll">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
