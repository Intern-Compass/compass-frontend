"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { UsersRound } from "lucide-react"


const FormSchema = z.object({
  skills: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  experience: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  interests: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  expectations: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
})

export default function AccountPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      skills: "",
      experience: "",
      interests: "",
      expectations: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-muted-foreground">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex-1 bg-white p-4 md:p-8">
      {/* Profile Section */}
      <div className="mb-8 bg-card rounded-lg p-6">
         <div className="mb-4 flex items-center">
           <UsersRound />
           <h2 className="text-2xl font-medium ml-2">Profile</h2>
         </div>
         {/* Intern Details */}
         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className= "p-4">
             <h3 className="text-foreground font-medium mb-2">Name</h3>
             <p className="text-muted-foreground">John Doe</p>
           </div>         
           <div className= "p-4">
             <h3 className="text-foreground font-medium mb-2">Email</h3>
             <p className="text-muted-foreground">johndoe@gmail.com</p>
           </div>         
           <div className= "p-4">
             <h3 className="text-foreground font-medium mb-2">Internship Duration</h3>
             <p className="text-muted-foreground">6 months</p>
           </div>         
           <div className= "p-4">
             <h3 className="text-foreground font-medium mb-2">School</h3>
             <p className="text-muted-foreground">Convenant University</p>
           </div>         
           <div className= "p-4">
             <h3 className="text-foreground font-medium mb-2">Phone no</h3>
             <p className="text-muted-foreground">08062061234</p>
           </div>         
           <div className= "p-4">
             <h3 className="text-foreground font-medium mb-2">Department</h3>
             <p className="text-muted-foreground">Information Technology</p>
           </div>         
         </div>
       </div>

      {/* More Information Section */}
      <div className="bg-card rounded-lg p-6">
         <h2 className="text-2xl font-medium mb-6">More Information</h2>

         {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 space-y-6 flex flex-col px-4">
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-muted-foreground">Skills</FormLabel>
                  <FormControl>
                    <Input  type="text" className="w-full p-3 text-foreground  border border-muted-foreground-50 rounded-md placeholder:text-muted-foreground-50" placeholder="Tap to select" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                    <FormLabel className="block text-muted-foreground">Experience</FormLabel>
                    <FormControl>
                      <Input type="text" className="w-full p-3 text-foreground  border border-muted-foreground-50 rounded-md placeholder:text-muted-foreground-50" placeholder="Enter experience acquired" {...field}/>
                    </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                    <FormLabel className="block text-muted-foreground">Interests</FormLabel>
                    <FormControl>
                      <Input type="text" className="w-full p-3 text-foreground  border border-muted-foreground-50 rounded-md placeholder:text-muted-foreground-50" placeholder="Enter interests" {...field}/>
                    </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectations"
              render={({ field }) => (
                <FormItem>
                    <FormLabel className="block text-muted-foreground">Expectations</FormLabel>
                    <FormControl>
                      <Textarea className="w-full p-3 text-foreground border border-muted-foreground-50 rounded-md placeholder:text-muted-foreground" placeholder="Describe your expectations for your internship period" {...field}/>
                    </FormControl>
                </FormItem>
              )}
            />
            <Button className="bg-muted text-muted-foreground px-6 py-3 rounded-3xl transition self-end hover:bg-primary hover:text-foreground">Upload</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}




