"use client";

import EnvelopeIcon from "@/components/icons/envelope-icon";
import LockIcon from "@/components/icons/lock-icon";
import GoogleLogo from "@/components/shared/google-logo";
import Logo from "@/components/shared/logo";
import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5 sm:px-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full flex-col items-center gap-5 rounded-lg bg-slate-900 p-5 md:w-2/3"
      >
        <div className="flex w-full items-center justify-center pb-10 pt-5">
          <div className="relative aspect-[16/5] w-[30%]">
            <Image src={"/logo.png"} alt="Logo" fill />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Login to Your Account</h1>

        <div className="flex w-full flex-col gap-2">
          <div className="flex grow items-center gap-2 rounded-lg border-2 border-transparent bg-slate-800 px-4 focus-within:border-white">
            <EnvelopeIcon className="h-5 w-5 text-slate-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 py-2 focus:outline-none"
            />
          </div>
          <div className="flex grow items-center gap-2 rounded-lg border-2 border-transparent bg-slate-800 px-4 focus-within:border-white">
            <LockIcon className="h-5 w-5 text-slate-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-800 py-2 focus:outline-none"
            />
          </div>
        </div>

        <button className="w-full rounded-lg bg-sky-500 py-2 font-bold">
          Login
        </button>

        <div className="flex w-full items-center justify-center gap-3 text-slate-500">
          <div className="h-[1px] w-full bg-slate-700"></div>
          <span>or</span>
          <div className="h-[1px] w-full bg-slate-700"></div>
        </div>

        <div className="flex w-full flex-col items-center gap-2 text-sm">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2 font-bold text-slate-950">
            <GoogleLogo />
            <span>Login with Google</span>
          </button>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth/register"}
              className="font-semibold text-sky-500 underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
