

function Loader() {
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="text-center">
                <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 border-4 border-amber-200 border-t-orange-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C12 2 8 6 8 10C8 13.5 10.5 16 13.5 16C16.5 16 19 13.5 19 10C19 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 2V20" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 6V10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 14V16" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>

                <p className="mt-6 text-amber-800 font-medium">Loading SpiceHub...</p>
            </div>
        </div>
    )
}

export default Loader