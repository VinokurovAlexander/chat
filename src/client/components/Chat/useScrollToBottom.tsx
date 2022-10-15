import { useEffect, useRef } from "react";

export const useScrollToBottom = <T, >(dependency: Array<T>): JSX.Element => {
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        nodeRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [dependency])

    return <div ref={nodeRef} />;
}