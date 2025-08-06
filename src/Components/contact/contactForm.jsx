"use client"

import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from "./customInput"
import { Button } from "../button"

const contactSchema = z.object({
  name: z.string().nonempty('This field is required'),
  email: z.email('Format invalid').nonempty('This field is required'),
  companyName: z.string().nonempty('This field is required'),
  title: z.string().nonempty('This field is required'),
  message: z.string().nonempty('This field is required'),
})


export const ContactForm = () => {
  const {register, handleSubmit, formState, reset} = useForm({
    resolver: zodResolver(contactSchema)
  })

  function handleSubmitForm(data) {
    console.log(data)
    reset();
  }

  return (
    <div className="w-full">
      <form 
        onSubmit={handleSubmit(handleSubmitForm)} 
        className="flex flex-col gap-6 items-start"
      >
        <CustomInput placeholder="Name" {...register('name')} errors={formState.errors.name}/>
        <CustomInput placeholder="Email" {...register('email')} errors={formState.errors.email}/>
        <CustomInput placeholder="Company Name" {...register('companyName')} errors={formState.errors.companyName}/>
        <CustomInput placeholder="Title" {...register('title')} errors={formState.errors.title}/>
        <CustomInput placeholder="Message" {...register('message')} errors={formState.errors.message}/>

        <Button variant='secondary'>submit</Button>
      </form>
    </div>
  )
}
