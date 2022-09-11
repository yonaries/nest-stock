import React from 'react'
import Card from './card'
import { useHorizontalScroll } from './horizontalScroll';

type Props = {}

const Trending = (props: Props) => {
    const scrollRef = useHorizontalScroll();

    return (
        <div ref={scrollRef as any} className='flex overflow-auto'>
            <Card isTrading={false} />
            <Card isTrading={true} />
            <Card isTrading={false} />
            <Card isTrading={true} />
            <Card isTrading={false} />
        </div>
    )
}

export default Trending