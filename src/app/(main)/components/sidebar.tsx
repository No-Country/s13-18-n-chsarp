import { Modal, NewChannelForm } from "@/components"
import { AddChannel, AvatarIcon } from "."

export const Sidebar = () => {
    return (
        <aside className="h-full min-w-[153px]">
            <div className="flex flex-col gap-5 items-center h-full bg-[#5D8966] rounded-[30px]">
                <AvatarIcon />
                <Modal
                    title="Crear un nuevo canal"
                    description="¡Haz crecer la comunidad del apoyo! 
                    Crea un nuevo canal y cosecha conexiones significativas. 🌱💬."
                    childrenContent={<NewChannelForm />}
                    childrenTrigger={<AddChannel />}
                />

            </div>
        </aside>
    )
}
