function Detail() {
    return (
        <>
            <section>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold lg:text-3xl">Tên của địa điểm du lịch</h1>
                    </div>
                    <div className="grid gap-8 lg:items-start lg:grid-cols-4">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img
                                    alt=""
                                    src="https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1"
                                    className="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                                />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>
                                    <span className="text-xs ml-1.5">Hover to zoom</span>
                                </div>
                            </div>
                            <ul className="flex gap-1 mt-1">
                                <li>
                                    <img
                                        className="object-cover w-16 h-16 rounded-md"
                                        src="https://i0.wp.com/datvandon.net/wp-content/uploads/2019/11/vinh-ha-long-o-tinh-nao-viet-nam.jpeg?fit=960%2C720&ssl=1"
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
                            <form className="space-y-4 lg:pt-8">
                                <div className="p-4 bg-gray-100 border rounded">
                                    <p className="text-sm">
                                        <span className="block">Đây là địa chỉ chi tiết!!!</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold">FREE</p>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
                                >
                                    Thêm vào yêu thích
                                </button>
                                <button
                                    type="button"
                                    className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                                >
                                    Đánh giá
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="prose max-w-none">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad labore nostrum, a
                                    explicabo iste est dolorem deserunt id ullam magni accusamus saepe, nulla sed sint
                                    reiciendis, aperiam cumque officiis!
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet ipsam mollitia
                                    nesciunt illo! Suscipit, corrupti!
                                </p>
                                <h3>Features</h3>
                                <ul>
                                    <li>Smooth neck design</li>
                                    <li>Breathable fabric</li>
                                    <li>Odour prevention</li>
                                    <li>Made from recycled materials</li>
                                </ul>
                            </div>
                            {/*Commnent */}
                            <div className="pt-10">
                                <form className="w-full bg-white rounded-lg px-4">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                                            <textarea
                                                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                                name="body"
                                                placeholder="Type Your Comment"
                                                required=""
                                                defaultValue={''}
                                            />
                                        </div>
                                        <div className="w-full md:w-full flex items-start md:w-full px-3">
                                            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                                <svg
                                                    fill="none"
                                                    className="w-5 h-5 text-gray-600 mr-1"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                                            </div>
                                            <div className="-mr-1">
                                                <input
                                                    type="submit"
                                                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                                                    defaultValue="Post Comment"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="my-2 mx-1 flex rounded-md bg-white p-2 text-black shadow">
                                    {/* Photo */}
                                    <div className="mt-2">
                                        <img
                                            className="w-56 rounded-full shadow"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt=""
                                            srcSet=""
                                        />
                                    </div>
                                    {/* Content */}
                                    <div>
                                        {/* Header */}
                                        <div className="flex items-center justify-between py-1 pr-2">
                                            {/* Author */}
                                            <div>
                                                <a href="#" className="text-blue-400 hover:underline">
                                                    Alex Friedner
                                                </a>
                                                <span className="text-sm font-thin text-gray-500"> 3 days</span>
                                            </div>
                                            {/* Rate */}
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        className="inline-block h-5 w-5 text-yellow-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>{' '}
                                                    4.5
                                                </div>
                                            </div>
                                        </div>
                                        {/* Context */}
                                        <div className="p-1">
                                            <p className="text-gray-900 border-l-2 px-1 border-blue-500 bg-gray-100 rounded">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quo,
                                                luptas illo nisi sit non! Lorem ipsum dolor, sit amet consectetur
                                                adipisicing elit. Minus qui at eum praesentium quod perspiciatis vitae
                                                nihil velit quaerat repellendus?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;
