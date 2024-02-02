import dynamic from "next/dynamic";
import { Editor } from "./editor";

export function MainContent() {
    return (
        <div className="flex justify-evenly items-center h-full">
            <Editor/>
            <Editor/>
            <Editor/>
        </div>
    )
}