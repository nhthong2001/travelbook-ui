import { useState } from 'react';
import axios from 'axios';
function Upload() {
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState({
        create_by: window.localStorage.getItem('username'),
        name: '',
        address: '',
        phone_number: '',
        website: '',
        time_open: '07:00',
        time_close: '21:00',
        type_id: '1',
        ratting: 5,
        description: '',
    });
    let bodyFormData = new FormData();
    const handleUpload = (e) => {
        e?.preventDefault();
        for (var key in location) {
            bodyFormData.set(key, location[key]);
        }
        axios({
            method: 'post',
            url: 'http://localhost:9090/api/location',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data', Authorization: window.localStorage.getItem('token') },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };
    const handleChooseImg = (e) => {
        let file = e.target.files[0];
        // const imageData = new FormData();
        // imageData.append('imageFile', file);
        location.image = file;
    };
    return (
        <>
            <div className="md:grid md:grid-cols-3">
                <div></div>
                <div className="mt-2 md:mt-2">
                    <form onSubmit={handleUpload} method="post" encType="multipart/form-data">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="pl-1 py-5 bg-white space-y-6 sm:p-6">
                                <h1 className="flex justify-center font-semibold text-4xl text-blue-500">Đăng Tải</h1>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Tên địa điểm
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        onInput={(e) => (location.name = e.target.value)}
                                        className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                        defaultValue={''}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        onInput={(e) => (location.address = e.target.value)}
                                        id="address"
                                        className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                        defaultValue={''}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="pn" className="block text-sm font-medium text-gray-700">
                                            Điện thoại
                                        </label>
                                        <input
                                            type="number"
                                            onInput={(e) => (location.phone_number = e.target.value)}
                                            id="pn"
                                            className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="web" className="block text-sm font-medium text-gray-700">
                                            Website
                                        </label>
                                        <input
                                            type="text"
                                            onInput={(e) => (location.website = e.target.value)}
                                            id="web"
                                            className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="openTime" className="block text-sm font-medium text-gray-700">
                                            Giờ mở cửa
                                        </label>
                                        <input
                                            type="time"
                                            onInput={(e) => (location.time_open = e.target.value)}
                                            id="openTime"
                                            className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={'07:00'}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="closeTime" className="block text-sm font-medium text-gray-700">
                                            Giờ đóng cửa
                                        </label>
                                        <input
                                            type="time"
                                            onInput={(e) => (location.time_close = e.target.value)}
                                            id="closeTime"
                                            className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={'21:00'}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                            Loại địa điểm
                                        </label>
                                        <select
                                            id="type"
                                            onInput={(e) => (location.type_id = e.target.value)}
                                            defaultValue="1"
                                            className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                        >
                                            <option value="1">Nơi ăn uống</option>
                                            <option value="2">Khách sạn</option>
                                            <option value="3">Bảo tàng</option>
                                            <option value="4">Trung tâm thương mại</option>
                                            <option value="5">Hot Check-in</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                                            Điểm đánh giá
                                        </label>
                                        <input
                                            type="number"
                                            onInput={(e) => (location.ratting = e.target.value)}
                                            id="rate"
                                            min="1"
                                            max="5"
                                            className="pl-2 h-7 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={5}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Mô tả
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            onInput={(e) => (location.description = e.target.value)}
                                            rows={4}
                                            className="pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hình ảnh</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="w-96">
                                            <input
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                type="file"
                                                onChange={handleChooseImg}
                                                accept="image/*"
                                                id="formFile"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Tải lên
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Upload;
