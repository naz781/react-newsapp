import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = () => {
    const { fetchNews } = useNewsContext();
    const timer = useRef(null);
    const [search, setSearch] = useState("");

    const [theme, setTheme] = useState(() =>
        localStorage.getItem("theme") || "light"
    );
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const searchNews = (e) => {
        const value = e.target.value;
        setSearch(value);

        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            if (value) fetchNews({ query: value, page: 1 });
            setSearch('')
        }, 600);
    };

    return (
        <div className="bg-base-200 sticky top-0 z-20 shadow">
            <Wrapper>
                <div className="navbar h-16">
                    <Link to="/" className="btn btn-ghost text-xl font-bold">
                        Daily News
                    </Link>

                    <input
                        value={search}
                        onChange={searchNews}
                        className="input input-bordered ml-auto w-40 md:w-64"
                        placeholder="Search news..."
                    />
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle ml-4"
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;
