import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="w-full">
            <Header />
            <div className="grid pt-[70px] h-screen">
                <div className="bg-violet-100 rounded-lg">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
