import dynamic from "next/dynamic";
import { Editor } from "./editor";
import { ChatPanel } from "./chat-panel";

export function MainContent() {
    return (
        <div className="flex justify-evenly items-center h-full bg-cyan-100">
            <div className="flex-1 h-full">
                <Editor />

            </div>
            <div className="flex-1 h-full">
                <Editor />

            </div>
            <div className="flex-1 h-full">
                <ChatPanel />

            </div>
        </div>
    )
}