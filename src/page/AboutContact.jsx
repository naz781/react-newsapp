import React from "react";
import Wrapper from "../component/Wrapper";

const AboutContact = () => {
    return (
        <Wrapper>
            <div className="py-16 px-4 max-w-6xl mx-auto space-y-16">

                {/* About Section */}
                <section className="space-y-6">
                    <div className="badge badge-primary">Established 1992</div>
                    <h1 className="text-5xl font-bold">Truth in Tech</h1>
                    <p className="text-lg opacity-80 leading-relaxed">
                        Daily News Network is an independent media organization dedicated to uncovering
                        the stories that shape our digital future. From Silicon Valley to global
                        environmental shifts, we bring you the facts.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        <div className="bg-base-200 p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold">12M+</div>
                            <div className="text-sm opacity-60">Monthly Readers</div>
                        </div>
                        <div className="bg-base-200 p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold">50+</div>
                            <div className="text-sm opacity-60">Global Reporters</div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-base-200 p-8 rounded-3xl border border-base-300">
                    <h2 className="text-2xl font-bold mb-6">Contact the Newsroom</h2>
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Message Type */}
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

                        {/* Message */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Message</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-32 w-full"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        <button className="btn btn-primary mt-2 w-full">Send Message</button>
                    </form>
                </section>
            </div>
        </Wrapper>
    );
};

export default AboutContact;
