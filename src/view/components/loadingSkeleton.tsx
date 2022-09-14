import React from "react";
import ContentLoader from "react-content-loader";
import { useTheme } from "../../context/ThemeContext";

const CardSkeleton = (props: any) => {

    const { bgPrimary } = useTheme();

    return (<ContentLoader viewBox="0 0 330 180" height={180} width={330} backgroundColor={'#20293d'} speed={1.5} foregroundColor='#404b64' {...props}>
        <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
    </ContentLoader>)
};

export default CardSkeleton;
