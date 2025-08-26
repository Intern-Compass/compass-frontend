import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "@/app/login/login-form";

export default function LoginPage() {
  return (
    <div className="p-8">
      <div className="flex flex-col">
        <div className="mb-12">
          <Image
            src="/assets/images/logo.svg"
            alt="MTN logo"
            width={91}
            height={45}
            priority
            className="w-[91px] h-[45px]"
          />
        </div>
        <div className="flex">
          <div>
            <header>
              <h1 className="font-medium text-4xl leading-10">Y'ello</h1>
              <h2 className="text-xl leading-7">
                Welcome to the Intern-Supervisor Matching Platform
              </h2>
            </header>
            <main className="flex-1">
              <div className="max-w-[416px]">
                <LoginForm />
                <p className="text-muted-foreground text-center text-sm">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="underline leading-5 text-sm text-foreground"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </main>
            <footer>
              <p>© 2025 MTN. All rights reserved.</p>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
            </footer>
          </div>
          <figure className="max-w-[461px] rounded-xl overflow-hidden shadow-[0_4px_94px_0_rgba(0,0,0,0.25)]">
            <Image
              src="/assets/images/auth-hero.jpg"
              alt=""
              width={461}
              height={609}
              priority
              className="w-full max-h-screen mx-auto"
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
    </div>
  );
}
