"use client"
import { SendHorizonalIcon } from "lucide-react";
import { Button, Input } from "./ui";

export function ChatInput() {
    return (
        <div className="flex gap-4 px-10 py-4">
            <Input />
            <Button>
                <SendHorizonalIcon />
            </Button>
        </div>
    )
}
