import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "@/app/login/login-form";

export default function LoginPage() {
  return (
    <div className="py-6 px-8">
      <div className="mb-8">
        <Image
          src="/assets/images/logo.svg"
          alt="MTN logo"
          width={91}
          height={45}
          priority
          className="w-[91px] h-[45px]"
        />
      </div>
      <div className="flex justify-evenly items-center gap-12">
        <div className="flex flex-col">
          <header className="mb-10">
            <h1 className="font-medium text-4xl leading-10 mb-2">{"Y'ello"}</h1>
            <h2 className="text-xl leading-7">
              Welcome to the Intern-Supervisor Matching Platform
            </h2>
          </header>
          <main className="flex-1 mb-10">
            <div className="md:max-w-[416px]">
              <LoginForm />
              <p className="text-muted-foreground text-center text-sm">
                {"Don't"} have an account?{" "}
                <Link
                  href="/signup"
                  className="underline leading-5 text-sm text-foreground"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </main>
          <footer className="flex flex-wrap justify-center items-center gap-x-3 gap-y-6 text-sm md:flex-row">
            <p className="whitespace-nowrap text-muted-foreground">
              © 2025 MTN. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#">Terms & Conditions</Link>
              <div className="bg-border h-2.5 w-px" />
              <Link href="#">Privacy Policy</Link>
            </div>
          </footer>
        </div>
        <figure className="hidden max-w-[461px] rounded-xl overflow-hidden shadow-[0_4px_94px_0_rgba(0,0,0,0.25)] md:block">
          <Image
            src="/assets/images/auth-hero.jpg"
            alt=""
            width={461}
            height={609}
            priority
            className="w-full max-h-[330px] mx-auto object-[50%_12.5%]"
          />
          <figcaption className="bg-black px-6 py-4">
            <p className="text-white text-4xl font-medium leading-10 mb-3">
              Apply & Learn
            </p>
            <p className="text-xl leading-7 text-muted-foreground">
              Start your learning experience here at MTN
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
