import { Plus } from "lucide-react"
import Link from "next/link"

export const AddChannel = () => {
    return (
        <Link href="/chat" className="flex items-center justify-center text-[#5D8966] h-[70px] w-[70px] rounded-full bg-white">
            <Plus size={26} />
        </Link>
    )
}