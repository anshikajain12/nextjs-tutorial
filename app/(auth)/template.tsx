"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import './style.css';
import { useState } from "react";

const navLink = [
    { name: "Register", href: '/register' },
    { name: "Login", href: '/login' },
    { name: "Forgot Password", href: '/forget-password' },
]
export default function ProductDetailsTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const [input,setInput]=useState('');
    return (
        <>
            <h2>From template.tsx file</h2>
            <div>
                <input value={input} onChange={e=>setInput(e.target.value)} />
            </div>
            <div>
                {navLink.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={link.href} key={link.name}
                            className={isActive ? "font-bold mr-4" : 'text-blue-500 mr-4'}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            {children}
        </>
    )
}