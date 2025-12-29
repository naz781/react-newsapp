import React from "react";
import { useParams, Link } from "react-router-dom";
import Wrapper from "../component/Wrapper";

const Legal = () => {
    const { type } = useParams();

    const content = {
        privacy: {
            title: "Privacy Policy",
            text: `At Daily News Network, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website. 
            We also use cookies to remember your preferences and analyze traffic. Cookies help us improve your experience on our website by enabling personalized content and remembering your settings. By continuing to use our site, you consent to our use of cookies as described in this Privacy Policy.`
        },

        terms: {
            title: "Terms of Service",
            text: "By accessing our website, you agree to be bound by these terms. Please read them carefully before using our services."
        },

        ethics: {
            title: "Editorial Ethics",
            text: "Our reporters adhere to the highest standards of integrity and fact-checking. We are committed to unbiased, accurate journalism."
        }
    };

    const page = content[type] || content.privacy;

    return (
        <Wrapper>
            <div className="py-16 px-4 max-w-5xl mx-auto space-y-8">
                <h1 className="text-5xl font-bold mb-4">{page.title}</h1>
                <p className="text-lg opacity-80">{page.text}</p>

                {/* Contact Button */}
                <div className="mt-8 text-center">
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default Legal;
