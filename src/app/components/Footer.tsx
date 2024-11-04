import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-corporate-blue text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* left col */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Aviato</h2>
          <p className="text-sm">
            © {new Date().getFullYear()} Aviato, All rights reserved.
          </p>
        </div>

        {/* right col */}
        <div className="flex space-x-6">
          {/* nav links */}
          <div className="flex space-x-4">
            <Link href="/about">
              <span className="hover:text-slate-blue transition-colors duration-200">
                about
              </span>
            </Link>
          </div>

          {/* socials */}
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="hover:text-slate-blue transition-colors duration-200"
            >
              {/* facebooooooook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://x.com"
              aria-label="x"
              className="hover:text-slate-blue transition-colors duration-200"
            >
              {/* x */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482A13.947 13.947 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/huntersraffety/"
              aria-label="LinkedIn"
              className="hover:text-slate-blue transition-colors duration-200"
            >
              {/* li */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.693a2.028 2.028 0 110-4.056 2.028 2.028 0 010 4.056zM20.452 20.452h-3.499v-5.569c0-1.328-.026-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.938v5.667h-3.5V9h3.36v1.561h.048c.468-.889 1.61-1.828 3.31-1.828 3.544 0 4.2 2.33 4.2 5.362v6.283z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
