import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="w-full h-screen">
            <Header className="h-[20vh]" />
            <div className="h-[8vh]"></div>
            <div className="grid grid-cols-12 h-[92vh]">
                <Sidebar />
                <div className="bg-violet-100 col-span-10 rounded-lg overscroll-auto overflow-y-scroll">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
