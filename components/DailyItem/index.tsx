import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { DI } from './dailyItem.styled';
import Context from '../shared/ContextMenu';

const DailyItem = (
    { setContext, closeContext, contextId, setContextPosition }: { setContext: Dispatch<SetStateAction<boolean>>; closeContext: () => void; contextId: string; setContextPosition: Dispatch<SetStateAction<{ x: number; y: number; }>>; }
) => {

    return (
        <DI onContextMenu={(event) => {
            event.preventDefault();
            if (contextId.trim().length > 0) {
                closeContext();
            }
            console.log(event.clientX, event.clientY);
            setContextPosition({ x: event.clientX + 5, y: event.clientY + 10 });
            setContext(true);
        }} />
    );



};

export default DailyItem;