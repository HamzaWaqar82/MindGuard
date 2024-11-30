const ProfilePage = () => {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                Edit Profile
                            </p>
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Back</span>
                            </button>
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
                                <div className="text-[#0e141b]" data-icon="Camera" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="truncate">Add a profile photo</span>
                            </button>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-center justify-start gap-2 overflow-hidden rounded-xl py-3 px-5 bg-[#e7edf3] text-[#b2bbc2] text-sm leading-normal tracking-[0.015em]">
                            <span>Upload image </span>
                            <div className="text-[#b2bbc2]" data-icon="Image" data-size="20px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M208,48H48A16,16,0,0,0,32,64V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48ZM48,64H208V192H48ZM96,128a16,16,0,1,1-16-16A16,16,0,0,1,96,128Zm97.65,34.18L152,129.7a16,16,0,0,0-22.63,0l-40,40A8,8,0,0,1,80.34,164l40-40a16,16,0,0,1,22.63,0l41.31,41.29,24.37-24.37a8,8,0,0,1,11.31,11.32Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-3"></div>
                        <div className="flex flex-col gap-6 p-4">
                            <label className="block">
                                <span className="text-[#0e141b] text-sm font-medium">First Name</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full px-4 py-2 bg-[#f5f7f9] border border-[#e7edf3] rounded-xl text-sm leading-normal text-[#0e141b] focus:outline-none focus:ring-2 focus:ring-[#0e141b]"
                                    placeholder="Enter your first name"
                                />
                            </label>
                            <label className="block">
                                <span className="text-[#0e141b] text-sm font-medium">Last Name</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full px-4 py-2 bg-[#f5f7f9] border border-[#e7edf3] rounded-xl text-sm leading-normal text-[#0e141b] focus:outline-none focus:ring-2 focus:ring-[#0e141b]"
                                    placeholder="Enter your last name"
                                />
                            </label>
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;
