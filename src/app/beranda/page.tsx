"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { signOut,useSession } from "next-auth/react";
import Image from "next/image";


export default function Beranda() {
  const [email,SetEmail] = useState<string>("")
  const [password,SetPassword] = useState<string>("")
  const session = useSession();

  const loginManual = () => {
      console.log(email)
      console.log(password)
  }

  const GoogleLogin = () => {
    signIn("google")
  }
  const Logout = () => {
    signOut()
  }

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="max-w-lg w-full py-4 mx-auto px-8 bg-white shadow-lg rounded-lg my-20">
            Form Login
            <div className="flex flex-col mt-10">
              <input className="flex-1 p-2 rounded-md border-2" onChange={(e)=>SetEmail(e.currentTarget.value)} placeholder="Email"></input>
              <input className="flex-1 p-2 rounded-md border-2 mt-2" onChange={(e)=>SetPassword(e.currentTarget.value)} placeholder="Password"></input>
            </div>
            <button className="bg-green-100 border-green-500  mt-3
            hover:bg-green-500 
            hover:text-white text-green-500 p-2 px-5 rounded-xl w-full" onClick={loginManual}>Login</button>
            <hr className="mt-3"/>
            {session.status == "unauthenticated" ?   <button className="w-full bg-red-100 border-red-500  mt-3
            hover:bg-red-500 
            hover:text-white text-red-500 p-2 px-5 rounded-xl" onClick={GoogleLogin}>Sign in with Google</button> :   
            <button className="w-full bg-red-100 border-red-500  mt-3
            hover:bg-red-500 
            hover:text-white text-red-500 p-2 px-5 rounded-xl" disabled onClick={GoogleLogin}>You Are Login</button>
            }
              {session.status == "authenticated"  &&
            <button className="w-full bg-red-100 border-red-500  mt-3
            hover:bg-red-500 
            hover:text-white text-red-500 p-2 px-5 rounded-xl" onClick={Logout}>Log Out</button>
            }

        </div>
        {session.status == "authenticated" && 
        <div className="max-w-lg py-4 mx-auto px-8 bg-white shadow-lg rounded-lg my-20">
          <Image width={200} height={200} src={session.data?.user?.image!} alt="Photo Profile"></Image>
          {session.data.user?.name}
          <br/>
          {session.data.user?.email}
        </div>
      }
    </main>
    </>
  );
}
