//Layouts
import { HeaderOnly } from '../components/Layout';

//Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import MyUpload from '../pages/MyUpload';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Detail from '../pages/Detail';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/myUpload', component: MyUpload },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: SignUp, layout: null },
    { path: '/detail/:id', component: Detail, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
