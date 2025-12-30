import { createContext, useContext, useState, useCallback } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Store filters for category, query, and page
    const [filters, setFilters] = useState({
        query: "",
        category: "",
        page: 1,
    });

    const fetchNews = useCallback(async (newFilters = {}) => {
        setLoading(true);
        setError(null);

        // 1. Calculate what the NEXT state should be
        // If newFilters has a value, use it. Otherwise, use what's already in state.
        let nextQuery = newFilters.query !== undefined ? newFilters.query : filters.query;
        let nextCategory = newFilters.category !== undefined ? newFilters.category : filters.category;
        const nextPage = newFilters.page || 1;

        // 2. Logic Fix: Clear conflicts
        // If the user starts a NEW SEARCH, clear the category
        if (newFilters.query && newFilters.query.trim() !== "") {
            nextCategory = "";
        }
        // If the user clicks a NEW CATEGORY, clear the search query
        else if (newFilters.category) {
            nextQuery = "";
        }

        // 3. Update the state so the UI stays in sync
        setFilters({
            query: nextQuery,
            category: nextCategory,
            page: nextPage
        });

        // try {
        // NewsAPI logic: 
        // If there is a search query, use /everything. 
        // If not, use /top-headlines.
        // const isSearching = nextQuery && nextQuery.trim().length > 0;
        // const endpoint = isSearching ? "/everything" : "/top-headlines";

        // const res = await api.get(endpoint, {
        //     params: {
        //         apiKey: import.meta.env.VITE_NEWS_API_KEY,
        //         page: nextPage,
        //         pageSize: 8,
        //         language: "en",
        //         ...(isSearching
        //             ? { q: nextQuery }
        //             : { category: nextCategory || "general", country: "us" }
        //         ),
        //     },
        // });

        try {
            const isSearching = nextQuery && nextQuery.trim().length > 0;

            // GNews uses /search for keywords and /top-headlines for categories
            const endpoint = isSearching ? "/search" : "/top-headlines";

            const res = await api.get(endpoint, {
                params: {
                    token: import.meta.env.VITE_GNEWS_API_KEY, // GNews uses 'token'
                    page: nextPage,
                    max: 8, // GNews uses 'max' instead of 'pageSize'
                    lang: "en",
                    ...(isSearching
                        ? { q: nextQuery }
                        : { category: nextCategory || "general" }
                    ),
                },
            });
            const rawArticles = res.data.articles || [];

            // --- DEDUPLICATION LOGIC ---
            // We filter the array to ensure every title is unique
            const uniqueArticles = rawArticles.filter((article, index, self) =>
                index === self.findIndex((a) => (
                    // Use title and description for a stricter check
                    a.title === article.title || a.url === article.url
                ))
            );

            setNews(uniqueArticles);
        } catch (err) {
            console.log(err)
            setError("Failed to fetch news.");
            setNews([]);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    return (
        <NewsContext.Provider value={{ news, fetchNews, loading, error, filters }}>
            {children}
        </NewsContext.Provider>
    );
};

const useNewsContext = () => useContext(NewsContext);

export { NewsContextProvider, useNewsContext };
