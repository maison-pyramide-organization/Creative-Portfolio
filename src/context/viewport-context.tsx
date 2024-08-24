import { createContext, useEffect, useState } from "react";

interface IviewportContext {
    width: number;
    height: number;
    device: "mobile" | "tablet" | "laptop";
}

export const viewportContext = createContext<IviewportContext | null>(null);

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleResize = () => {
        const height = document.documentElement.clientHeight || 0;
        const width = document.documentElement.clientWidth || 0;
        setWidth(width);
        setHeight(height);
    };

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const device = "mobile";

    return (
        <viewportContext.Provider value={{ width, height, device }}>
            {children}
        </viewportContext.Provider>
    );
};

export default ViewportProvider;
