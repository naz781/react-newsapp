import React from 'react';
import Wrapper from '../component/Wrapper';

const AboutContact = () => {
    return (
        <Wrapper>
            <div className="py-16 px-4 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* About Section */}
                    <div className="flex-1">
                        <div className="badge badge-primary mb-4">Established 1992</div>
                        <h1 className="text-5xl font-bold mb-6">Truth in Tech.</h1>
                        <p className="text-xl leading-relaxed mb-6">
                            ACME News Network is an independent media organization dedicated to
                            uncovering the stories that shape our digital future. From Silicon Valley
                            to global environmental shifts, we bring you the facts.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                            <div className="bg-base-200 p-6 rounded-2xl">
                                <div className="text-3xl font-bold">12M+</div>
                                <div className="text-sm opacity-60">Monthly Readers</div>
                            </div>
                            <div className="bg-base-200 p-6 rounded-2xl">
                                <div className="text-3xl font-bold">50+</div>
                                <div className="text-sm opacity-60">Global Reporters</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-1 bg-base-200 p-8 rounded-3xl border border-base-300">
                        <h2 className="text-2xl font-bold mb-6">Contact the Newsroom</h2>
                        <form className="form-control gap-4" onSubmit={(e) => e.preventDefault()}>
                            {/* Email Input */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Message Type Dropdown */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Message Type</span>
                                </label>
                                <select className="select select-bordered w-full">
                                    <option>General Inquiry</option>
                                    <option>Submit a News Tip</option>
                                    <option>Correction Request</option>
                                    <option>Press Relations</option>
                                </select>
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Your Message</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered h-32 w-full"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className="btn btn-primary w-full mt-2">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </Wrapper>
    );
};

export default AboutContact;