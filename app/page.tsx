"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from "react"

const Home = () => {

  const router = useRouter()

  useEffect(() => {
    router.push("properties")
  }, [])


  return (
    <div className='h-screen w-screen' >
    </div>
  )
}

export default Home
