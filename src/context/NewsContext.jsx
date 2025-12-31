import { createContext, useContext, useState, useCallback } from "react";
// FIX: Only one 'api' import. Assuming it is in your project root or config folder.
import api from "../api";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({
        query: "",
        category: "",
        page: 1,
    });

    const fetchNews = useCallback(async (newFilters = {}) => {
        setLoading(true);
        setError(null);

        let nextQuery = newFilters.query !== undefined ? newFilters.query : filters.query;
        let nextCategory = newFilters.category !== undefined ? newFilters.category : filters.category;
        const nextPage = newFilters.page || 1;

        if (newFilters.query && newFilters.query.trim() !== "") {
            nextCategory = "";
        }
        else if (newFilters.category) {
            nextQuery = "";
        }

        setFilters({
            query: nextQuery,
            category: nextCategory,
            page: nextPage
        });

        try {
            const isSearching = nextQuery && nextQuery.trim().length > 0;
            const endpoint = isSearching ? "/search" : "/top-headlines";

            const res = await api.get("/api/news", {
                params: {
                    endpoint: endpoint,
                    page: nextPage,
                    max: 8,
                    lang: "en",
                    // The backend (api/news.js) expects 'q' or 'category'
                    ...(isSearching
                        ? { q: nextQuery }
                        : { category: nextCategory || "general" }
                    ),
                },
            });

            const rawArticles = res.data.articles || [];

            // --- DEDUPLICATION LOGIC ---
            const uniqueArticles = rawArticles.filter((article, index, self) =>
                index === self.findIndex((a) => (
                    a.title === article.title || a.url === article.url
                ))
            );

            setNews(uniqueArticles);
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to fetch news.");
            setNews([]);
        } finally {
            setLoading(false);
        }
    }, [filters]); // Keeping your existing dependency logic

    return (
        <NewsContext.Provider value={{ news, fetchNews, loading, error, filters }}>
            {children}
        </NewsContext.Provider>
    );
};

const useNewsContext = () => useContext(NewsContext);

export { NewsContextProvider, useNewsContext };