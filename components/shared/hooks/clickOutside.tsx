import { useEffect } from 'react';

const useClickOutside = (containerRef, contextMenuRef, callback) => {
    /**
     * if clicked on outside of element
     */
    function handleClickOutside(event: any) {
        if (containerRef?.current?.contains(event.target) &&
            !contextMenuRef?.current?.contains(event.target)
        ) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
};

export default useClickOutside;