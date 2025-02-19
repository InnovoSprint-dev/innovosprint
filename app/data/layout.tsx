"use client"
import { ReactNode } from "react";

export default function PrivacyPolicyLayout({children}: {children: ReactNode}) {
  return (
   <div className="h-dvh max-h-screen w-dvw  bg-gray-200 justify-center items-center" > {children} </div>
  );
}