import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="w-full h-screen">
            <Header className="h-[20vh]" />
            <div className="h-[8vh]"></div>
            <div className="grid h-[92vh]">
                <div className="bg-violet-100 rounded-lg overscroll-auto overflow-y-scroll">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
