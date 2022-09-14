import React from 'react'
import Heading from './heading';
import { useHorizontalScroll } from './horizontalScroll';
import SmallCard from './smallCard'

type Props = {}

const Popular = (props: Props) => {
    const scrollRef = useHorizontalScroll();

    return (
        <>
            <Heading />
            <div ref={scrollRef as any} className='flex overflow-x-scroll'>
                <SmallCard isTrading={false} />
                <SmallCard isTrading={true} />
                <SmallCard isTrading={true} />
                <SmallCard isTrading={false} />
                <SmallCard isTrading={true} />
                <SmallCard isTrading={false} />
            </div>
        </>
    )
}

export default Popular