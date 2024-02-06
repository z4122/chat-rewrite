'use client';

export function ChatPanel() {
    return (
        <div className="size-full flex justify-center align-middle">
            <div className="flex flex-col w-full mx-5 my-5 bg-white rounded-lg text-black">
                <div className="flex-1">ssss</div>
                <div className="position: relative flex">
                    <input className="w-full h-8 border-solid border-2 border-sky-600" onChange={(event) => { }}></input>
                    <div className="position: absolute top-1 right-1 w-4 h-4 border-solid border-2 border-sky-500"></div>
                </div>
            </div>
        </div>
    )
}