import Link from "next/link";

import { LoginForm } from "@/app/login/login-form";

export default function LoginPage() {
  return (
    <div>
      <div>
        <header>
          <h1>Y'ello</h1>
          <h2>Welcome to the Intern-Supervisor Matching Platform</h2>
        </header>
        <main>
          <div>
            <LoginForm />
            <p>
              Don't have an account? <Link href="/signup">Sign Up</Link>
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
