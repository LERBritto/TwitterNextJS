"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

function signout() {
  return <div onClick={() => signOut("google")}>signout</div>
}

export default signout