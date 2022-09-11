import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el: any = elRef.current;
        if (el) {
            const onWheel = (event: any) => {
                event.preventDefault();
                el.scrollBy({
                    left: event.deltaY < 0 ? -30 : 30,
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}