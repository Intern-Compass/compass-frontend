"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import { LoginFormSchema } from "@/lib/zod";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    // toast("You submitted the following values", {
    //   description: (
    //     <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5 mb-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="font-medium text-sm leading-5 text-muted-foreground"
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="firstname.lastname@mtn.com"
                  className="text-foreground border border-input p-3 leading-6 placeholder:text-muted-foreground-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="password"
                className="font-medium text-sm leading-5 text-muted-foreground"
              >
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    aria-describedby="password-constraints"
                    autoComplete="current-password"
                    id="password"
                    placeholder="*********"
                    className="text-foreground border border-input p-3 pr-11 leading-6 placeholder:text-muted-foreground-50"
                    {...field}
                  />
                  <Button
                    type="button"
                    id="toggle-password"
                    aria-label="Show password as plain text. Warning: this will display your password on the screen."
                    variant="ghost"
                    size="icon"
                    onClick={togglePasswordVisibility}
                    disabled={form.getValues("password").length === 0}
                    className="absolute right-2 top-1/2 -translate-y-1/2 disabled:cursor-not-allowed"
                  >
                    {showPassword ? (
                      <EyeOffIcon aria-hidden="true" className="w-4 h-4" />
                    ) : (
                      <EyeIcon aria-hidden="true" className="w-4 h-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide" : "Show"} password
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center gap-x-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:text-foreground"
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />

          <Link href="/" className="underline leading-5 text-sm">
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className={cn(
            "w-full py-2 px-8 rounded-[9999px] font-medium leading-5 text-muted-foreground hover:bg-transparent",
            form.formState.isValid
              ? "bg-primary cursor-pointer text-foreground hover:bg-primary"
              : "bg-muted cursor-not-allowed hover:bg-muted"
          )}
        >
          Login
        </Button>
      </form>
    </Form>
  );
};
