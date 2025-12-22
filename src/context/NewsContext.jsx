import { createContext, useContext, useState, useCallback } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchNews = useCallback(async (query = "america") => {
        if (!import.meta.env.VITE_GNEWS_API_KEY) {
            setError("API key is missing. Please check your .env file.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await api.get(
                `/search?q=${query}&lang=en&token=${import.meta.env.VITE_GNEWS_API_KEY}`
            );

            if (res.status === 200) {
                setNews(res.data.articles);
            } else {
                setError("Failed to fetch news. Status: " + res.status);
                setNews([]);
            }
        } catch (err) {
            console.error("API error:", err.response?.status, err.message);

            if (err.response?.status === 403) {
                setError(
                    "API limit reached or invalid key. Free plan allows 50 requests/day."
                );
            } else {
                setError("Something went wrong. Please try again later.");
            }
            setNews([]);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <NewsContext.Provider value={{ news, fetchNews, loading, error }}>
            {children}
        </NewsContext.Provider>
    );
};

const useNewsContext = () => useContext(NewsContext);

export { NewsContextProvider, useNewsContext };
