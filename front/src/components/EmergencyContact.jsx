function EmergencyContact() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-slate-49 group/design-root overflow-x-hidden"
            style={{
                "--radio-dot-svg": "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(25,128,230)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
                fontFamily: 'Inter, "Noto Sans", sans-serif',
            }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    {/* Sidebar */}
                    <div className="layout-content-container flex flex-col w-80">
                        <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#0e141b] text-base font-medium leading-normal">Settings</h1>
                                <div className="flex flex-col gap-2">
                                    {[
                                        "Profile",
                                        "Emergency Contacts",
                                        "Alert Preferences",
                                        "Security Settings",
                                        "Data Management",
                                        "Loyalty Program",
                                        "Email & Notifications",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-3 px-3 py-2 ${item === "Emergency Contacts" ? "rounded-xl bg-[#e7edf3]" : ""
                                                }`}
                                        >
                                            <p className="text-[#0e141b] text-sm font-medium leading-normal">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-72 flex-col gap-3">
                                <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">
                                    Emergency Contacts
                                </p>
                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                    Add your emergency contacts and set up alert preferences to receive notifications when you need them most.
                                </p>
                            </div>
                        </div>
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Emergency Contacts
                        </h3>
                        {/* Emergency Contact Form */}
                        {["First name", "Last name", "Phone number", "Email address"].map((label, index) => (
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3" key={index}>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">{label}</p>
                                    <input
                                        placeholder={label === "Phone number" ? "(123) 123-1234" : label} value={label === "First name" ? "abc" : label === "Last name" ? "abc" : label === "Email address" ? "abc@gmail.com" : ""}
                                        readOnly
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
                                    />
                                </label>
                            </div>
                        ))}
                        <div className="flex px-4 py-3 justify-start">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Add Contact</span>
                            </button>
                        </div>
                        {/* Alert Preferences */}
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Alert Preferences
                        </h3>
                        <div className="flex flex-col gap-3 p-4">
                            {["Email", "SMS", "App notification"].map((preference, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-4 rounded-xl border border-solid border-[#d0dbe7] p-[15px]"
                                >
                                    <input
                                        type="radio"
                                        className="h-5 w-5 border-2 border-[#d0dbe7] bg-transparent text-transparent checked:border-[#1980e6] checked:bg-[image:--radio-dot-svg] focus:outline-none"

                                        name="alert-preferences"
                                    />
                                    <div className="flex grow flex-col">
                                        <p className="text-[#0e141b] text-sm font-medium leading-normal">{preference}</p>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Save Changes</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmergencyContact;
