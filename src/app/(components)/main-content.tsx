import dynamic from "next/dynamic";
import { Editor } from "./editor";
import { ChatPanel } from "./chat-panel";

export function MainContent() {
    return (
        <div className="flex flex-grow-1 justify-evenly h-full bg-slate-100">

            <div className="flex-1 ">
                <Editor />
            </div>

            <div className="flex-1 ">
                <Editor />
            </div>

            <div className="w-96">
                <ChatPanel />
            </div>
        </div>
    )
}