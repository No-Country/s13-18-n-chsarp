"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import Link from "next/link";
import { CloseIcon, Logout, UserSettings } from './icons';

interface Props {
    handleOpen: () => void;
}

export const Dropdown = ({ handleOpen }: Props) => {
    return (
        <div className="relative">
            <div className="absolute -top-[119px] left-[154px] flex flex-col gap-12 p-7 w-[584px] rounded-[30px] bg-[#5D8966] shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-[90px] w-[90px]">
                            <AvatarImage alt="@shadcn" />
                            <AvatarFallback className="bg-red-300 text-[45px] font-medium">CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-lg font-semibold">mariana123</p>
                            <p className="font-light">suarezmariana89@gmail.com</p>
                        </div>
                    </div>
                    <div onClick={handleOpen}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <Link href="/chat" className="flex items-center gap-4 text-2xl font-medium">
                        <UserSettings />
                        <span>Configuración de perfil</span>
                    </Link>
                    <Link href="/chat" className="flex items-center gap-4 text-2xl font-medium">
                        <Logout />
                        <span>Cerrar sesión</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
