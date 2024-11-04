import React from "react"

export default function Layout({ children }:any) {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center text-[#EFEFEF]">
    <div className="w-full max-w-4xl py-8">
      {children}
    </div>
  </div>
  )
}