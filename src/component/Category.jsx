import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = () => {
    const { fetchNews } = useNewsContext();
    const categories = [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ];

    return (
        <div className="sticky top-16 bg-base-200 z-10">
            <Wrapper>
                <div className="flex flex-wrap justify-center gap-3 py-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className="btn btn-soft btn-primary capitalize"
                            onClick={() => fetchNews({ category: cat, page: 1 })}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Category;
