'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-corporate-blue text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link href="/">Aviato</Link>
        </div>
        <div className="space-x-6">
          <Link href="/">
            <span className="hover:text-slate-blue transition-colors duration-200 text-lg">
              home
            </span>
          </Link>
          <Link href="/add-user">
            <span className="hover:text-slate-blue transition-colors duration-200 text-lg">
              add founder
            </span>
          </Link>
          <Link href="/about">
            <span className="hover:text-slate-blue transition-colors duration-200 text-lg">
              about
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
