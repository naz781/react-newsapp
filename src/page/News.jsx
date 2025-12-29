import { useEffect } from "react";
import Wrapper from "../component/Wrapper";
import Loader from "../component/Loader";
import Banner from "../component/Banner";
import { useNewsContext } from "../context/NewsContext";

const News = () => {
    const { news, fetchNews, loading, error, filters } = useNewsContext();

    useEffect(() => {
        fetchNews({ page: filters.page || 1 });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Loader />
            </div>
        );
    }

    if (error) {
        return <p className="text-center py-10 text-error">{error}</p>;
    }

    return (
        <Wrapper>
            <div>
                {!filters.query && filters.page === 1 && <Banner />}
                {/* 2. News Grid Header */}
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    {filters.query ? `Results for "${filters.query}"` : "Recent Stories"}
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {/* {news.map(
                    (item, i) =>
                        item.image && <NewsCard key={i} details={item} />
                )} */}

                {news.map((item, i) => (
                    // Remove the 'item.image &&' check or change it to 'item.urlToImage'
                    item.urlToImage && <NewsCard key={i} details={item} />
                ))}
            </div>

            <div className="flex justify-center gap-4 py-6">
                <button
                    className="btn btn-outline"
                    disabled={filters.page === 1}
                    onClick={() =>
                        fetchNews({ page: filters.page - 1 })
                    }
                >
                    Previous
                </button>

                <span className="flex items-center">Page {filters.page}</span>

                <button
                    className="btn btn-outline"
                    onClick={() =>
                        fetchNews({ page: filters.page + 1 })
                    }
                >
                    Next
                </button>
            </div>
        </Wrapper>
    );
};

const NewsCard = ({ details }) => {
    return (
        <div className="card bg-base-200 shadow">
            <figure>
                <img
                    // src={details.image}
                    // alt={details.title}
                    // className="aspect-video object-cover"
                    // USE urlToImage for NewsAPI
                    src={details.urlToImage || "https://via.placeholder.com/400x225?text=No+Image"}
                    alt={details.title}
                    className="aspect-video object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{details.title}</h2>
                <p className="line-clamp-3">{details.description}</p>
                <button
                    onClick={() => window.open(details.url, "_blank")}
                    className="btn btn-primary btn-soft"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default News;
