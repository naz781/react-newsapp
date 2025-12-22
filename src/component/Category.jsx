import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Category = () => {

    const { fetchNews } = useNewsContext()
    // Renamed to 'categories' to avoid conflict with component name 'Category'
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    return (
        <div className="sticky top-16 z-10 bg-base-200">
            <Wrapper>
                <div className="flex flex-wrap justify-center gap-3 py-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => fetchNews(category)}
                            className="btn btn-soft btn-primary w-full sm:w-auto capitalize"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default Category