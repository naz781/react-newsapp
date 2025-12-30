import React, { useState, useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";

const Banner = () => {
    const { news, loading } = useNewsContext();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Take the top 5 articles for the banner
    const bannerItems = news.slice(0, 5);

    // Auto-play logic
    useEffect(() => {
        if (bannerItems.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [bannerItems.length]);

    if (loading || bannerItems.length === 0) {
        return <div className="h-64 md:h-96 w-full bg-base-300 animate-pulse rounded-2xl mb-8"></div>;
    }

    return (
        <div className="relative w-full h-80 md:h-125 overflow-hidden rounded-2xl mb-8 group">
            {bannerItems.map((article, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={article.urlToImage || article.image || "https://via.placeholder.com/1200x600?text=News+Today"}
                        alt={article.title}
                        className="w-full h-full  object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Content Box */}
                    <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3 text-white">
                        <div className="badge badge-primary mb-2">Latest Today</div>
                        <h2 className="text-xl md:text-3xl font-bold line-clamp-2 mb-2 leading-tight">
                            {article.title}
                        </h2>
                        <p className="hidden md:block text-sm opacity-80 line-clamp-2 mb-4">
                            {article.description}
                        </p>
                        <button
                            onClick={() => window.open(article.url, "_blank")}
                            className="btn btn-primary btn-sm md:btn-md"
                        >
                            Read Full Story
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 right-6 z-20 flex gap-2">
                {bannerItems.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;