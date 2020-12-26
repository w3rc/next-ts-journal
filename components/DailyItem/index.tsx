import { Dispatch, SetStateAction } from 'react';
import { DI } from './dailyItem.styled';

interface DailyItemProps {
    setContext: Dispatch<SetStateAction<boolean>>;
    closeContext: () => void;
    contextId: string;
    setContextPosition: Dispatch<SetStateAction<{ x: number; y: number; }>>;
}

const DailyItem = (
    { setContext, closeContext, contextId, setContextPosition }: DailyItemProps
) => {

    return (
        <DI onContextMenu={(event) => {
            event.preventDefault();
            if (contextId.trim().length > 0) {
                closeContext();
            }
            setContextPosition({ x: event.clientX + 5, y: event.clientY + 10 });
            setContext(true);
        }} />
    );
};

export default DailyItem;