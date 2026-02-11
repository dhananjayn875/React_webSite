import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
    const [mobileMenueIsOpen, setMobileMenueIsOpen] = useState(false)

    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20  backdrop-blur-sm border-b border-red-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/*padding 4 below small screen, above small-6, large and above-8*/}
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">{/*height 14 below small screen, above small-16, above medium-20*/}

                <div className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img src="/vite.svg" alt="Logo" className="h-6 w-6 sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white">Code</span>
                        <span className="text-blue-400">HUB</span>
                    </span>
                </div>
                {/*Navigation Links */}
                <div className="hidden md:flex item-center space-x-6 lg:space-x-8">
                    <a href="#features" className="text-grey-300 hover:text-white text-sm lg:text-base">Features</a>
                    <a href="#Pricing" className="text-grey-300 hover:text-white text-sm lg:text-base">Pricing</a>
                    <a href="#Testimonials" className="text-grey-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    <a href="#Contact" className="text-grey-300 hover:text-white text-sm lg:text-base">Contact</a>
                </div>
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:w-6 sm:h-6"
                    onClick={() => setMobileMenueIsOpen((prev) => !prev)}
                >
                    {mobileMenueIsOpen ? (<X />) : (<Menu className="h-5 w-5 sm:w-6 sm:h-6" />)}

                </button>

                {mobileMenueIsOpen && <h>HIII</h>}
            </div>
        </div>
    </nav >
}; 