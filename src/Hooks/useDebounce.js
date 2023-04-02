import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounced, setUseDebounced] = useState(value);

    useEffect(() => {
        const handel = setTimeout(() => {
            setUseDebounced(value);
        }, delay);

        return () => clearTimeout(handel);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return useDebounced;
}

export default useDebounce;
