import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <Wrapper>
                {/* Main footer content - 3 columns side by side */}
                <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 text-base-content">

                    {/* Column 1: Company */}
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-lg font-bold mb-2">Company</h6>
                        <Link to="/about" className="link link-hover">About Us</Link>
                        <Link to="/contact" className="link link-hover">Contact</Link>
                    </nav>

                    {/* Column 2: Legal */}
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-lg font-bold mb-2">Legal</h6>
                        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
                        <Link to="/ethics" className="link link-hover">Editorial Ethics</Link>
                    </nav>

                </footer>
                {/* Newsletter Section - Full Width Below */}
                <div className="px-10 pb-10">
                    <div className="bg-base-300 p-6 rounded-box">
                        <div className="max-w-md mx-auto text-center">
                            <h6 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h6>
                            <p className="text-sm opacity-70 mb-4">Get the latest news delivered to your inbox</p>
                            <form onSubmit={(e) => e.preventDefault()} className="w-full">
                                <div className="join w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered join-item flex-1"
                                    />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <footer className="px-10 py-4 border-t border-base-300 text-base-content">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-sm opacity-70">
                            © {new Date().getFullYear()} ACME News Network. All rights reserved.
                        </p>
                        <p className="text-xs opacity-50">
                            Made with ❤️ for quality journalism
                        </p>
                    </div>
                </footer>
            </Wrapper>
        </div>
    )
}

export default Footer