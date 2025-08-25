import Link from "next/link";

import { SignupForm } from "@/app/signup/signup-form";

export default function SignupPage() {
  return (
    <div>
      <div>
        <header>
          <h1>Y'ello</h1>
          <h2>Create an account to get started</h2>
        </header>
        <main>
          <div>
            <SignupForm />
            <p>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </main>
        <footer>
          <p>© 2025 MTN. All rights reserved.</p>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Privacy Policy</Link>
        </footer>
      </div>
      <figure>
        {/* Image goes here */}
        <figcaption>
          <p>Apply & Learn</p>
          <p>Start your learning experience here at MTN</p>
        </figcaption>
      </figure>
    </div>
  );
}
