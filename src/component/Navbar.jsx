// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Wrapper from "./Wrapper";
// import { useNewsContext } from "../context/NewsContext";

// const Navbar = () => {
//     const { fetchNews } = useNewsContext();
//     const timer = useRef(null);
//     const [searchValue, setSearchValue] = useState("");

//     const searchNews = (e) => {
//         const value = e.target.value;
//         setSearchValue(value)
//         if (!value) return;

//         clearTimeout(timer.current);
//         timer.current = setTimeout(() => {
//             fetchNews(value)
//             setSearchValue("")
//         }, 800);

//     };

//     return (
//         <div className="bg-base-200 sticky top-0 z-20">
//             <Wrapper>
//                 <div className="navbar h-16">
//                     <div className="flex-1">
//                         <Link to="/" className="btn btn-ghost text-xl">
//                             ACME
//                         </Link>
//                     </div>
//                     <div className="navbar-end flex gap-2">
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             className="input input-bordered w-24 md:w-auto"
//                             value={searchValue}
//                             onChange={searchNews}
//                         />
//                     </div>
//                 </div>
//             </Wrapper>
//         </div>
//     );
// };

// export default Navbar;

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = () => {
    const { fetchNews } = useNewsContext();
    const timer = useRef(null);
    const [searchValue, setSearchValue] = useState("");

    // Theme toggle - optimized
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const searchNews = (e) => {
        const value = e.target.value;
        setSearchValue(value)
        if (!value) return;

        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            fetchNews(value)
            setSearchValue("")
        }, 800);
    };

    return (
        <div className="bg-base-200 sticky top-0 z-20 shadow-sm">
            <Wrapper>
                <div className="navbar h-16">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl font-bold">
                            Daily News
                        </Link>
                    </div>
                    <div className="navbar-end flex gap-3 items-center">
                        <input
                            type="text"
                            placeholder="Search news..."
                            className="input input-bordered w-32 md:w-64 focus:w-40 md:focus:w-72 transition-all"
                            value={searchValue}
                            onChange={searchNews}
                        />

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;