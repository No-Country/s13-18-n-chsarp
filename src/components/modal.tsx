'use client'
import { FC, ReactElement } from "react"
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui"

interface Dialog {
    title: string,
    description: string,
    children: ReactElement,
}

export const Modal: FC<Dialog> = ({ title, description, children }): ReactElement => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center gap-4">
                        {children}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
