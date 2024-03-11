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
    name: z.string().min(3, {
        message: "Tu nombre debe contener al menos 3 caracteres.",
    }),
    username: z.string().min(3, {
        message: "Tu nombre de usuario debe contener al menos 3 caracteres.",
    }),
    socialNetwork: z.string().min(3, {
        message: "Debe contener al menos 3 caracteres.",
    }),
})

export const UserEditForm: FC = (): ReactElement => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            username: "",
            socialNetwork: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[55px]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre Apellido" {...field} className='border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Nombre de usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="usuario123" {...field} className='border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="socialNetwork"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Redes sociales</FormLabel>
                            <FormControl>
                                <Input placeholder="Facebook, Instagram, X" {...field} className='border-[#9EC79B] border-b-[3px] border-t-0 border-x-0 rounded-none placeholder:font-light placeholder:text-white placeholder:italic focus-visible:ring-0' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant="default" className="self-end text-[22px] bg-[#FCD07F80] font-normal rounded-full px-[24px] hover:bg-transparent">Guardar</Button>
            </form>
        </Form>
    )
}
