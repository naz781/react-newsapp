import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = () => {
    const { fetchNews } = useNewsContext();
    const timer = useRef(null);
    const [searchValue, setSearchValue] = useState("");

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
        <div className="bg-base-200 sticky top-0 z-20">
            <Wrapper>
                <div className="navbar h-16">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl">
                            ACME
                        </Link>
                    </div>
                    <div className="navbar-end flex gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                            value={searchValue}
                            onChange={searchNews}
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;
