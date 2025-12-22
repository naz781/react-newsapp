import React from 'react'

const Wrapper = ({ children }) => {
    return (
        // max-w-7xl is a valid Tailwind class (1280px wide)
        // mx-auto centers the content
        // px-4 adds padding on left and right
        <div className='max-w-7xl mx-auto px-4'>
            {children}
        </div>
    )
}

export default Wrapper