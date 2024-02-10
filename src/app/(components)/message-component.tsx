
export type MessageProps = {
    message: string,
    time?: string
}

export function Message(props: MessageProps) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() 返回的月份从 0 开始，所以需要 +1
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const currentTime = `${year}-${month}-${date} ${hour}:${minute}:${second}`;

    const { message, time = currentTime } = props;

    return (
        <div className="flex justify-center align-middle bg-slate-100 mt-3.5 rounded-lg">
            <div className="flex flex-col w-full mx-1 my-1 text-black">
                <div className="text-xs text-neutral-500">{time}</div>
                <div className="flex-1">{message}</div>
            </div>
        </div >
    )
}