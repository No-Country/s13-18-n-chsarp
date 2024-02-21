"use client"

import { Modal, UserEditForm } from "@/components";
import { Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { CloseIcon, Logout, UserSettings } from "./icons";

export const AvatarIcon = () => {

    return (
        <div className="max-h-[137px] max-w-[95px] pt-6 pb-4 border-white border-b-2">

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="h-[95px] w-[95px] cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" alignOffset={95} sideOffset={-120} className="ml-[58px] font-medium flex flex-col gap-7 w-[584px] p-7 rounded-[30px] text-white bg-[#5D8966] shadow-lg">
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
                        <div>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <Modal
                            title="Crear un nuevo canal"
                            description="¡Haz crecer la comunidad del apoyo! 
                    Crea un nuevo canal y cosecha conexiones significativas. 🌱💬."
                            childrenContent={<UserEditForm />}
                            childrenTrigger={
                                <DropdownMenuItem className="flex items-center gap-4 text-2xl font-medium">
                                    <UserSettings />
                                    <span>Configuración de perfil</span>
                                </DropdownMenuItem>
                            }
                        />
                        <DropdownMenuItem className="flex items-center gap-4 text-2xl font-medium">
                            <Logout />
                            <span>Cerrar sesión</span>
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
