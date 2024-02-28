import { NewChannelForm } from "@/components"
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui"
import Image from "next/image"
import { AddChannel, AvatarIcon } from "."

export const Sidebar = () => {
    return (
        <aside className="h-full min-w-[153px]">
            <div className="flex flex-col gap-5 items-center h-full bg-[#5D8966] rounded-[30px]">
                <AvatarIcon />
                <Dialog>
                    <DialogTrigger className="flex items-center gap-4 text-2xl font-medium">
                        <AddChannel />
                    </DialogTrigger>
                    <DialogContent className="bg-[#5D8966] border-none max-w-[660px] flex items-center sm:rounded-[30px]">
                        <div className="flex flex-col items-center gap-4 mt-[72px] py-[25px] w-[603px] border-white border-2 rounded-[20px]">
                            <DialogHeader className="flex flex-col items-center gap-2">
                                <DialogTitle className="text-center font-bold text-[26px]">Bienestar emocional</DialogTitle>
                                <Image
                                    src="/images/create-chat-modal.svg"
                                    alt="Create chat modal"
                                    width={147}
                                    height={141}
                                />
                                <DialogDescription className="text-white text-center text-lg max-w-[470px] mx-auto">
                                    <p>Este grupo se centra en el bienestar general de la salud mental y emocional, ofreciendo apoyo para lidiar con la ansiedad, la depresión, el estrés y otros desafíos emocionales.</p>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>

                                <Dialog>
                                    <DialogTrigger className="flex items-center gap-4 text-2xl font-medium">
                                        <Button className="text-[22px] bg-[#FCD07F] border-none font-medium rounded-full px-6 hover:bg-transparent">Crear chat +</Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-[#5D8966] border-none max-w-[660px]">
                                        <DialogHeader className="flex flex-col gap-[22px] items-center">
                                            <DialogTitle className="font-bold text-[40px]">Chat de Bienestar Emocional</DialogTitle>
                                            <DialogDescription className="text-white text-xl">
                                                ¡La comunidad espera ansiosa por tu chat de apoyo! 🌟
                                            </DialogDescription>
                                            <Image
                                                src='/images/create-chat-modal.svg'
                                                alt="Create chat modal"
                                                width={269}
                                                height={183}
                                            />
                                        </DialogHeader>
                                        <NewChannelForm />
                                    </DialogContent>
                                </Dialog>

                            </DialogFooter>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </aside>
    )
}
