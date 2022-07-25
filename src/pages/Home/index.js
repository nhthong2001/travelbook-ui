import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Home() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:9090/api/location/all')
            .then(function (response) {
                // handle success
                console.log(
                    response.data.sort((a, b) => {
                        return a.id - b.id;
                    }),
                );
                setPost(
                    response.data.sort((a, b) => {
                        return a.id - b.id;
                    }),
                );
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    let navigate = useNavigate();
    const handleDetail = (item) => {
        console.log(item);
        window.localStorage.setItem('detaiId', item.id);
        const jwt = window.localStorage.getItem('token');
        //const jwt =
        //  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiaWF0IjoxNjU2OTAxNjU2LCJleHAiOjE2NTY5ODgwNTZ9.g5xyCrJQ7U61EUiF93JOcx-ifV44g93jECVhbbXibdBynNRBu-BB0QT_hqDg9Sbq8LOzZNQevLM4AOWcwiXf2w';
        console.log(jwt);
        if (jwt === null || jwt === '') {
            navigate('/login');
            return;
        }
        const jwtPayload = JSON.parse(window.atob(jwt.split('.')[1]));
        console.log(new Date(jwtPayload.exp * 1000));
        console.log(new Date());
        if (new Date(jwtPayload.exp * 1000) < new Date()) {
            navigate('/login');
        } else navigate(`/detail/${item.id}`);
    };
    return (
        <div className="justify-center grid">
            {post.map((item) => (
                <div className="w-[65rem] h-[40rem]  mt-4 mb-4 bg-yellow-50 rounded-xl" key={item.id}>
                    <div className="h-full border-2 border-gray-200 rounded-lg">
                        {/*Thông tin ngày đăng người đăng*/}
                        <div className="w-full">
                            <div className="w-full flex p-2">
                                <div className="p-2 ">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                                        alt="author"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </div>
                                <div className="pl-2 pt-2 ">
                                    <p className="font-bold">{item.create_by}</p>
                                    <p className="text-xs">2 June 2022</p>
                                </div>
                            </div>
                        </div>
                        {/*Ảnh*/}
                        <img
                            className="p-2 w-full h-[24rem] rounded-[20px] object-cover object-center"
                            src={
                                item.link_avatar ||
                                'https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1'
                            }
                            alt="blog cover"
                        />
                        {/*Thông tin cơ bản về địa điểm*/}
                        <div className="p-4">
                            <h2 className="tracking-widest text-lg title-font font-bold text-green-400 mb-1 uppercase ">
                                {item.name}
                            </h2>
                            <h1 className="title-font text-xl font-medium text-gray-900 mb-12">{item.name}</h1>
                            <div className="text-lg flex items-center flex-wrap ">
                                <button onClick={() => handleDetail(item)} className="text-green-800  md:mb-2 lg:mb-0">
                                    <p className="inline-flex items-center">
                                        Chi tiết
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </p>
                                </button>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
                                    </svg>
                                    4.9
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>
                                    89
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
