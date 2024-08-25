import { createContext, useEffect, useState } from "react";

interface IviewportContext {
    width: number;
    height: number;
    breakpoint: "sm" | "md" | "lg" | null;
}

export const viewportContext = createContext<IviewportContext | null>(null);

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [breakpoint, setBreakpoint] = useState<any>(null);

    const handleResize = () => {
        const height = document.documentElement.clientHeight || 0;
        const width = document.documentElement.clientWidth || 0;
        setWidth(width);
        setHeight(height);
        if (width >= 1024) setBreakpoint("lg");
        else if (width >= 768) setBreakpoint("md");
        else setBreakpoint("sm");
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <viewportContext.Provider value={{ width, height, breakpoint }}>
            {children}
        </viewportContext.Provider>
    );
};

export default ViewportProvider;
