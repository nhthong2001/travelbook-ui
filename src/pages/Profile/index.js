import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
function Profile() {
    const username = window.localStorage.getItem('username');
    let config = {
        headers: {
            Authorization: window.localStorage.getItem('token'),
        },
    };
    const [info, setInfo] = useState();

    const getInfo = async () => {
        const getInfos = await axios.get(`http://localhost:9090/api/account/${username}`, config);
        setInfo(getInfos.data);
    };
    useLayoutEffect(() => {
        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e?.preventDefault();
        console.log(info);
        axios
            .put('http://localhost:9090/api/account', info, config)
            .then(function (response) {
                alert('Cập nhật thành công');
            })
            .catch(function (error) {
                alert('Cập nhật thất bại');
                console.log(error);
            });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-16 mt-5 mb-5 rounded-2xl">
            {info?.accountType === 'user' ? (
                <form id="frm-changeInfo" onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Họ tên
                            </label>
                            <input
                                type="text"
                                id="name"
                                onInput={(e) => (info.fulname = e.target.value)}
                                defaultValue={info?.fulname}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="gender"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Giới tính
                            </label>
                            <select
                                id="gender"
                                onChange={(e) =>
                                    e.target.value === 'true' ? (info.gender = true) : (info.gender = false)
                                }
                                defaultValue={info?.gender === true ? 'true' : 'false'}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="true">Nữ</option>
                                <option value="false">Nam</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="dob"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Ngày sinh
                            </label>
                            <input
                                type="date"
                                id="dob"
                                onChange={(e) => (info.dob = e.target.value)}
                                defaultValue={info?.dob}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                defaultValue={info?.email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="url"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Link Facebook
                        </label>
                        <input
                            type="text"
                            id="url"
                            onInput={(e) => (info.linkFacebook = e.target.value)}
                            defaultValue={info?.linkFacebook}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></input>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="un" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            readOnly
                            id="un"
                            defaultValue={info?.username}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></input>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
                        >
                            Xác nhận thay đổi
                        </button>
                    </div>
                </form>
            ) : (
                <form id="frm-changeInfo" onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Tên công ty
                            </label>
                            <input
                                type="text"
                                id="name"
                                onInput={(e) => (info.companyName = e.target.value)}
                                defaultValue={info?.companyName}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="pn"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Số điện thoại
                            </label>
                            <input
                                type="number"
                                id="pn"
                                onInput={(e) => (info.phoneNumber = e.target.value)}
                                defaultValue={info?.phoneNumber}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Website
                            </label>
                            <input
                                type="text"
                                id="link"
                                onInput={(e) => (info.website = e.target.value)}
                                defaultValue={info?.website}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                onInput={(e) => (info.email = e.target.value)}
                                defaultValue={info?.email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></input>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="des"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Mô tả
                        </label>
                        <input
                            type="text"
                            id="des"
                            onInput={(e) => (info.description = e.target.value)}
                            defaultValue={info?.description}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></input>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="un" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            readOnly
                            id="un"
                            defaultValue={info?.username}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></input>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
                        >
                            Xác nhận thay đổi
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Profile;
