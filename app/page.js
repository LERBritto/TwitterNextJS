"use client"
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    id: 0,
    title: "home",
    link: "/home",
  },
  {
    id: 1,
    title: "explore",
    link: "/explore",
  },
  {
    id: 2,
    title: "notifications",
    link: "/notifications",
  },
  {
    id: 3,
    title: "messages",
    link: "/messages",
  },
  {
    id: 4,
    title: "lists",
    link: "/lists",
  },
  {
    id: 5,
    title: "communities",
    link: "/communities",
  },
  {
    id: 6,
    title: "verified-Orgs",
    link: "/verified-Orgs",
  },
  {
    id: 7,
    title: "profile",
    link: "/profile",
  },
  {
    id: 8,
    title: "more",
    link: "/more",
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1 border space-y-4 h-full flex flex-col items-center justify-center">
        {navLinks.map(navLink => (
          <Link href={navLink.link} key={navLink.id}>
            <span className="flex space-x-4 items-center justify-center text-white">
              <></>
              <p>{navLink.title}</p>
            </span>
          </Link>
        ))}
      </div>
      <div className="col-span-2 border border-white"></div>
      <div className="col-span-1 border"></div>
    </main>
  );
}
