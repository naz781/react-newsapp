import { useEffect } from 'react'
import Wrapper from '../component/Wrapper'
import { useNewsContext } from '../context/NewsContext'

const News = () => {

    const { news, fetchNews, loading } = useNewsContext()
    // console.log(news)

    useEffect(() => {
        fetchNews('america')
    }, [fetchNews])
    if (loading) return <p className="text-center py-10">Loading...</p>;
    return (
        <Wrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                {news.map((item, index) =>
                    item.image ? <NewsCard key={index} details={item} /> : null
                )}
            </div>
        </Wrapper>
    )
}

const NewsCard = ({ details }) => {
    return (
        <div className="card bg-base-200 shadow-sm">
            <figure>
                <img className='w-full aspect-video object-cover contian '
                    src={details?.image}
                    alt={details?.title || "News article"} />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{details?.title}</h2>
                <p className="line-clamp-3">{details?.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => { window.open(details.url, "_blank") }} className="btn btn-soft btn-primary w-full sm:w-auto capitalize">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default News

