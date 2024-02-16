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
    channelname: z.string().min(3, {
        message: "Tu nombre debe contener al menos 3 caracteres.",
    }),
})

export const NewChannelForm: FC = (): ReactElement => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            channelname: "",
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
                    name="channelname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre del canal</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre Canal" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este será el nombre de tu canal.
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
