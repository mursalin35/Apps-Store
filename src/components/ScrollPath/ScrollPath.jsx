import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollPath = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant', // অথবা instant: behavior: 'auto'
        });
    }, [pathname]);

    return null;
};

export default ScrollPath;
