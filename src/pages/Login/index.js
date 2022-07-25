import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/signup`;
        navigate(path);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:9090/auth/login', {
                username,
                password,
            })
            .then(function (response) {
                console.log(response.data);
                // let config = {
                //     headers: {
                //         Authorization: response.data,
                //     },
                // };
                window.localStorage.setItem('token', response.data);
                window.localStorage.setItem('username', username);
                navigate('/');
                // axios
                //     .get('http://localhost:9090/api/account', config)
                //     .then(function (response) {
                //         // handle success
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         // handle error
                //         console.log(error);
                //     });
            })
            .catch(function (error) {
                console.log(error);
                alert('Tài khoản hoặc mật khẩu sai');
            });
    };
    return (
        <section className="h-screen w-screen flex justify-center">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone"
                        />
                    </div>
                    <form onSubmit={login} className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <h1 className="text-5xl mb-6 text-center uppercase font-semibold">Đăng nhập</h1>
                        <div>
                            {/* Email input */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    value={username}
                                    onInput={(e) => setUsername(e.target.value)}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Username"
                                />
                            </div>
                            {/* Password input */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    value={password}
                                    onInput={(e) => setPassword(e.target.value)}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck3"
                                        defaultChecked=""
                                    />
                                    <label
                                        className="form-check-label inline-block text-gray-800"
                                        htmlFor="exampleCheck2"
                                    >
                                        Nhớ mật khẩu
                                    </label>
                                </div>
                                <a
                                    href="#!"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >
                                    Quên mật khẩu?
                                </a>
                            </div>
                            {/* Submit button */}
                            <button
                                onClick={login}
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Đăng nhập
                            </button>
                            <button
                                onClick={routeChange}
                                className="mt-4 inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Đăng ký
                            </button>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">HOẶC</p>
                            </div>
                            <button
                                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                style={{ backgroundColor: '#3b5998' }}
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {/* Facebook */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-3.5 h-3.5 mr-2"
                                >
                                    {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    />
                                </svg>
                                Đăng nhập với Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
