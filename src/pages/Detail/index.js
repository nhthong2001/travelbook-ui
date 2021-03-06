import axios from 'axios';
import { useState, useEffect } from 'react';

function Detail() {
    let config = {
        headers: {
            Authorization: window.localStorage.getItem('token'),
        },
    };
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [isVoted, setIsVoted] = useState(false);
    const [rate, setRate] = useState(0);
    const [rateInfo, setRateInfo] = useState({ create_by: null, pointRating: 0 });

    const location = JSON.parse(window.localStorage.getItem('detailPost'));
    const username = window.localStorage.getItem('username');

    useEffect(() => {
        axios
            .get(`http://localhost:9090/api/location/${location.id}`, config)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setPost(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios
            .get(`http://localhost:9090/api/location/comment/${location.unique_id}`, config)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setComments(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios
            .get(`http://localhost:9090/api/location/ratting/${location.unique_id}/${username}`, config)
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.data !== null) {
                    setRateInfo(response.data);
                    setRate(response.data.pointRating);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    const handleComment = (e) => {
        e.preventDefault();
        if (comment !== null && comment !== '') {
            console.log(comment);
            axios
                .post(
                    'http://localhost:9090/api/location/comment',
                    {
                        create_by: window.localStorage.getItem('username'),
                        location_id: location.unique_id,
                        content: comment,
                    },
                    config,
                )
                .then(function (response) {
                    console.log(response);

                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                    alert('C?? l???i x???y ra khi b??nh lu???n');
                });
        }
    };
    const handleVote = () => {
        setIsVoted(!isVoted);
    };

    const handleRate = () => {
        const now = new Date();
        const yyyy = now.getFullYear();
        let mm = now.getMonth() + 1; // Months start at 0!
        let dd = now.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = yyyy + '-' + mm + '-' + dd;
        if (rateInfo.pointRating !== rate) {
            const data = {
                create_by: username,
                location_id: location.unique_id,
                pointRating: rate,
                date: formattedToday,
            };
            if (typeof rateInfo.id === 'number') {
                data.id = rateInfo.id;
            }

            axios
                .post('http://localhost:9090/api/location/ratting', data, config)
                .then(function (response) {
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        setIsVoted(!isVoted);
    };
    return (
        <>
            <section>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">{post.name}</h1>
                    </div>
                    <div className="grid gap-8 lg:items-start lg:grid-cols-4">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img
                                    alt=""
                                    src="https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1"
                                    className="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                                />
                            </div>
                            <ul className="flex gap-1 mt-1">
                                <li>
                                    <img
                                        className="object-cover w-16 h-16 rounded-md"
                                        src={
                                            post.link_avatar ||
                                            'https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1'
                                        }
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="object-cover w-16 h-16 rounded-md"
                                        src="https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="lg:top-0 lg:sticky">
                            <div className="space-y-4 lg:pt-8">
                                <div className="p-4 bg-gray-100 border rounded">
                                    <p className="text-sm">
                                        <span className="block">{post.address}</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold">FREE</p>
                                </div>
                                <button
                                    type="button"
                                    className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
                                >
                                    Th??m v??o y??u th??ch
                                </button>
                                <button
                                    type="button"
                                    onClick={handleVote}
                                    className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-yellow-200 border border-gray-300 rounded"
                                >
                                    ????nh gi??
                                </button>
                                {isVoted && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="number"
                                            id="point"
                                            defaultValue={rateInfo?.pointRating}
                                            onChange={(e) => {
                                                setRate(e.target.value === null ? 0 : +e.target.value);
                                            }}
                                            min="1"
                                            max="5"
                                            className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                                        ></input>
                                        <button
                                            type="button"
                                            onClick={handleRate}
                                            className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                                        >
                                            B??nh ch???n
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="prose max-w-none">
                                <p>M?? t???: {post.description}</p>
                                <p>
                                    Ng?????i ????ng: <a href="/#">{post.create_by}</a>
                                </p>
                                <h3>Th??ng tin:</h3>
                                <ul>
                                    <li>S??? ??i???n tho???i: {post.phone_number}</li>
                                    <li>Gi??? m??? c???a: {post.time_open}</li>
                                    <li>Gi??? ????ng c???a: {post.time_close}</li>
                                    <li>Website: {post.website}</li>

                                    <li>??i???m: {post.rating} sao</li>
                                </ul>
                            </div>
                            {/*Commnent */}
                            <div className="pt-10">
                                <form onSubmit={handleComment} className="w-full bg-white rounded-lg px-4">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                                            <textarea
                                                onChange={(e) => {
                                                    setComment(e.target.value);
                                                }}
                                                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                                name="body"
                                                placeholder="Nh???p b??nh lu???n..."
                                                required=""
                                                defaultValue={''}
                                            />
                                        </div>
                                        <div className="w-full md:w-full flex items-start px-3">
                                            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
                                            <div className="-mr-1 mb-2">
                                                <button
                                                    type="submit"
                                                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                                                    defaultValue="Post Comment"
                                                >
                                                    B??nh lu???n
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {comments.map((item) => (
                                    <div
                                        className="my-2 mx-1 flex rounded-md bg-white p-2 text-black shadow"
                                        key={item.id}
                                    >
                                        {/* Photo */}
                                        <div className="mt-2">
                                            <img
                                                className="h-12 w-12 rounded-full shadow mx-2"
                                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                alt=""
                                                srcSet=""
                                            />
                                        </div>
                                        {/* Content */}
                                        <div className="w-full">
                                            {/* Header */}
                                            <div className="w-full flex justify-between">
                                                {/* Author */}
                                                <div>
                                                    <a href="#" className="text-blue-400 hover:underline">
                                                        {item.create_by}
                                                    </a>
                                                </div>
                                                {/* Rate */}
                                                <div>
                                                    {item.point === -1 ? (
                                                        <></>
                                                    ) : (
                                                        <div className="flex items-center gap-1">
                                                            <svg
                                                                className="inline-block h-5 w-5 text-yellow-400"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>{' '}
                                                            {item.point}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Context */}
                                            <div className="p-1">
                                                <p className="py-2 text-gray-900 border-l-2 px-2 border-blue-500 bg-gray-100 rounded">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;
