"use client"

import { Avatar, AvatarFallback, AvatarImage, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui";
import { UserEditForm } from '../../../components/user-edit-form';
import { CloseIcon, Logout, UserHelp, UserIcon, UserSettings } from "./icons";

export const AvatarIcon = () => {

    return (
        <div className="max-h-[137px] max-w-[95px] pt-6 pb-4 border-white border-b-2">

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="h-[95px] w-[95px] cursor-pointer">
                        <AvatarImage src="" alt="User image" />
                        <AvatarFallback className="bg-white"><UserIcon /></AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" alignOffset={95} sideOffset={-120} className="ml-[58px] font-medium flex flex-col items-start gap-7 w-[584px] p-7 rounded-[30px] text-white bg-[#5D8966] shadow-lg">
                    <div className="flex justify-between w-full">
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
                    <Dialog>
                        <DialogTrigger className="flex items-center gap-4 text-2xl font-medium">
                            <UserSettings />
                            <span>Configuración de perfil</span>
                        </DialogTrigger>
                        <DialogContent className="bg-[#5D8966] border-none space-y-4">
                            <DialogHeader className="space-y-4">
                                <DialogTitle className="text-[44px] text-center">Configuración de perfil</DialogTitle>
                                <DialogDescription className="text-white text-xl text-center">Esta es la descripción</DialogDescription>
                            </DialogHeader>
                            <UserEditForm />
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger className="flex items-center gap-4 text-2xl font-medium">
                            <UserHelp />
                            <span>Ayuda</span>
                        </DialogTrigger>
                        <DialogContent className="bg-[#5D8966] border-none w-[700px]">
                            <DialogHeader>
                                <DialogTitle className="text-center font-bold text-[40px]">Ayuda</DialogTitle>
                                <DialogDescription className="text-white text-center text-xl">
                                    <p>¿Necesitas ayuda?</p>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="default" className="text-white text-[22px] bg-[#0F7D7C59] font-normal rounded-full px-[21px] hover:bg-transparent">Cancelar</Button>
                                </DialogClose>
                                <Button className="text-white text-[22px] bg-[#0F7D7C59] font-normal rounded-full px-[21px] hover:bg-transparent" onClick={() => console.log('Cerrando sesión')}>Ir al panel de ayuda</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger className="flex items-center gap-4 text-2xl font-medium">
                            <Logout />
                            <span>Cerrar sesión</span>
                        </DialogTrigger>
                        <DialogContent className="bg-[#5D8966] border-none w-[700px]">
                            <DialogHeader>
                                <DialogTitle className="text-center font-bold text-[40px]">Cerrar sesión</DialogTitle>
                                <DialogDescription className="text-white text-center text-xl">
                                    <p>¿Estás seguro de cerrar la sesión?</p>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="default" className="text-white text-[22px] bg-[#0F7D7C59] font-normal rounded-full px-[21px] hover:bg-transparent">Cancelar</Button>
                                </DialogClose>
                                <Button className="text-white text-[22px] bg-[#0F7D7C59] font-normal rounded-full px-[21px] hover:bg-transparent" onClick={() => console.log('Cerrando sesión')}>Cerrar sesión</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </DropdownMenuContent>
            </DropdownMenu>
        </div >
    )
}
