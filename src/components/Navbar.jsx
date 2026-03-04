import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [mobileMenueIsOpen, setMobileMenueIsOpen] = useState(false)

    return (
        <nav className="fixed rounded-2xl top-2 left-2 right-2 z-50 transition-all duration-300 bg-slate-950/20  backdrop-blur-sm border-b border-red-950/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/*padding 4 below small screen, above small-6, large and above-8*/}
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">{/*height 14 below small screen, above small-16, above medium-20*/}

                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img src="/vite.svg" alt="Logo" className="h-6 w-6 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Dhananjay</span>

                            <span className="text-blue-400"> N</span>
                        </span>
                    </div>

                    {/*Navigation Links */}

                    <div className="hidden md:flex justify-start items-center space-x-6 lg:space-x-8">
                        <a href="#Home" className="text-grey-300 hover:text-white text-sm lg:text-base">Home</a>
                        <a href="#About" className="text-grey-300 hover:text-white text-sm lg:text-base">About</a>
                        <a href="#Projects" className="text-grey-300 hover:text-white text-sm lg:text-base">Projects</a>
                        <a href="#Resume" className="text-grey-300 hover:text-white text-sm lg:text-base">Resume</a>
                        <a href="#Contact" className="text-grey-300 hover:text-white text-sm lg:text-base">Contact</a>
                    </div>
                    <button
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setMobileMenueIsOpen((prev) => !prev)}
                    >
                        {mobileMenueIsOpen ? (
                            <X className="h-5 w-5 sm:w-6 sm:h-6" />
                        ) : (
                            <Menu className="h-5 w-5 sm:w-6 sm:h-6" />)}

                    </button>

                    {mobileMenueIsOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/90 backdrop-blur-sm">
                            {/* mobile nav links could go here */}
                            <a href="#features" className="block px-4 py-2 text-gray-300 hover:text-white">Features</a>
                            <a href="#Pricing" className="block px-4 py-2 text-gray-300 hover:text-white">Pricing</a>
                            <a href="#Testimonials" className="block px-4 py-2 text-gray-300 hover:text-white">Testimonials</a>
                            <a href="#Contact" className="block px-4 py-2 text-gray-300 hover:text-white">Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </nav >
    )
}; 