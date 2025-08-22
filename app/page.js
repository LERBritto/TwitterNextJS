"use client";
import Image from "next/image";
import Link from "next/link";
import { BellIcon, BriefcaseIcon, CheckBadgeIcon, GlobeAltIcon, HomeIcon, ListBulletIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navLinks = [
  {
    id: 0,
    title: "home",
    link: "/home",
    icon: <HomeIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 1,
    title: "explore",
    link: "/explore",
    icon: <GlobeAltIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 2,
    title: "notifications",
    link: "/notifications",
    icon: <BellIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 3,
    title: "messages",
    link: "/messages",
    icon: <BriefcaseIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 4,
    title: "lists",
    link: "/lists",
    icon: <ListBulletIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 5,
    title: "communities",
    link: "/communities",
    icon: <UsersIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 6,
    title: "verified-Orgs",
    link: "/verified-Orgs",
    icon: <CheckBadgeIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 7,
    title: "profile",
    link: "/profile",
    icon: <UsersIcon className="h-8 w-8 stroke-white" />,
  },
  {
    id: 8,
    title: "more",
    link: "/more",
    icon: <PlusCircleIcon className="h-8 w-8 stroke-white" />,
  },
];

export default function Home() {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1 h-full flex flex-col items-start justify-start pt-2 px-10">
        <span className="px-4 mb-4">
          <svg
            className="h-8 w-8 stroke-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </span>
        {navLinks.map((navLink) => (
          // <Link href={navLink.link} key={navLink.id}>
          <span
            onClick={() => setActiveNavLink(navLink.id)}
            className={`flex space-x-4 items-start justify-start text-white hover:bg-[#0f0f0f] rounded-full py-2 cursor-pointer px-4 ${
              activeNavLink === navLink.id ? "font-bold" : "font-normal"
            }`}
          >
            <>{navLink.icon}</>
            <p className="text-xl">{navLink.title}</p>
          </span>
          // </Link>
        ))}
        <span className="w-full items-center justify-center flex mt-4">
          <button className="post-button w-full">
            Post
          </button>
        </span>
      </div>
      <div className="col-span-2 border-x border-[#161616]">
        <h2 className="text-white text-lg md:text-xl px-4 font-bold py-6">
          {activeNavLink}
        </h2>
        <div className="items-center justify-center flex w-full text-white text-lg">
          <span onClick={() => setActiveTab(0) } className={`${activeTab === 0 ? "active-tab" : "tab"}`}>
            For You
          </span>
          <span onClick={() => setActiveTab(1) } className={`${activeTab === 1 ? "active-tab" : "tab"}`}>
            Following
          </span>
        </div>
        <div className="border-y border-[#161616] py-2 w-full">
          <input
            type="text"
            placeholder="What is happening ?"
            className="w-full text-lg lg:text-xl py-6 px-4 bg-transparent text-white placeholder:text-white/40 outline-none"
          />
          <span className="items-end justify-end flex pr-2">
            <button className="post-button w-[4vw] py-2">Post</button>
          </span>
        </div>
      </div>
      <div className="col-span-1 "></div>
    </main>
  );
}
