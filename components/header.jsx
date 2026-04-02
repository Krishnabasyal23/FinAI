import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, PenBox } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b"> 
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="FinAI"
                        width={200}
                        height={60}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center space-x-4">

                    <SignedIn>

                        <Link href="/dashboard">
                            <Button variant="outline" className="flex items-center gap-2">
                                <LayoutDashboard size={18}/>
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link href="/transaction/create">
                            <Button className="flex items-center gap-2">
                                <PenBox size={18}/>
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>

                    </SignedIn>

                    <SignedOut>

                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">
                                Login
                            </Button>
                        </SignInButton>

                        <SignUpButton>
                            <Button className="bg-[#6c47ff] text-white rounded-full font-medium h-10 px-5">
                                Sign Up
                            </Button>
                        </SignUpButton>

                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>

            </nav>
        </div>
    )
}

export default Header