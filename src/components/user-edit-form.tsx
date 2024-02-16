'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FC, ReactElement } from 'react'
import {
    Button,
    Form,
    FormControl,
    FormDescription,
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre Apellido" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu nombre.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre de usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="usuario123" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu nombre de usuario.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="socialNetwork"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Redes sociales</FormLabel>
                            <FormControl>
                                <Input placeholder="usuario20" {...field} />
                            </FormControl>
                            <FormDescription>
                                Esta es tu cuenta de instagram.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Guardar</Button>
            </form>
        </Form>
    )
}
