import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <Wrapper>
                {/* Top Section: Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-gray-700">

                    {/* Column 1: Company */}
                    <div className="flex flex-col gap-3">
                        <h6 className="font-semibold text-lg text-white mb-3">Company</h6>
                        <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                        <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
                    </div>

                    {/* Column 2: Legal */}
                    <div className="flex flex-col gap-3">
                        <h6 className="font-semibold text-lg text-white mb-3">Legal</h6>
                        <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/legal/ethics" className="hover:text-white transition-colors">Editorial Ethics</Link>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="font-semibold text-lg text-white mb-3">Subscribe</h6>
                        <p className="text-sm opacity-70 mb-4">
                            Get the latest news and updates delivered to your inbox.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered flex-1 bg-gray-800 text-gray-100 placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Column 4: Social Media */}
                    <div className="flex flex-col gap-3">
                        <h6 className="font-semibold text-lg text-white mb-3">Follow Us</h6>
                        <div className="flex gap-4 text-gray-400">
                            <a href="https://www.facebook.com" className="hover:text-white transition-colors"><FaFacebookF size={20} /></a>
                            <a href="https://www.twitter.com" className="hover:text-white transition-colors"><FaTwitter size={20} /></a>
                            <a href="https://www.instagram.com" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
                            <a href="https://www.linkedin.com" className="hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
                        </div>
                        <p className="text-sm opacity-70 mt-4">
                            Stay connected with us for the latest updates.
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="py-6 text-center text-sm opacity-60">
                    © {new Date().getFullYear()} Daily News Network. All rights reserved.
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
