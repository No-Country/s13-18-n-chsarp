'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FC, ReactElement } from 'react'
import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input
} from './ui'

const formSchema = z.object({
    channelname: z.string().min(3, {
        message: "Tu nombre debe contener al menos 3 caracteres.",
    }),
    chatdescription: z.string().min(3, {
        message: "Tu nombre debe contener al menos 3 caracteres.",
    }),
    datetime: z.string().min(3, {
        message: "Tu nombre debe contener al menos 3 caracteres.",
    }),
})

export const NewChannelForm: FC = (): ReactElement => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            channelname: "",
            chatdescription: "",
            datetime: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[45px] px-[67px]">
                <FormField
                    control={form.control}
                    name="datetime"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <FormLabel className='text-lg'>Fecha y hora de mentoreo:</FormLabel>
                                <FormControl>
                                    <Input type='datetime-local' {...field} className='border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0 w-auto' />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="channelname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Nombre del chat:</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe un nombre para tu chat de apoyo" {...field} className='border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="chatdescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Descripción del chat:</FormLabel>
                            <FormControl>
                                <Input placeholder="Cuéntanos brevemente de qué se trata tu chat de apoyo" {...field} className='border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' variant="default" className="self-end text-[22px] bg-[#FCD07F80] font-normal rounded-full px-[24px] hover:bg-transparent">Crear chat +</Button>
            </form>
        </Form>
    )
}
