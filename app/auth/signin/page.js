"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

function signin() {
  return <div onClick={() => signIn("google")}>signin</div>
}

export default signin