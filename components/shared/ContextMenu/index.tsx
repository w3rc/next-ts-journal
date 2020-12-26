import { forwardRef, useEffect } from 'react';
import { ContextMenu, ContextMenuItem } from './context.styled';

interface ContextProps {
    setId: any;
    contextPosition: { x: number; y: number; };
}

const Context = ({ setId, contextPosition }: ContextProps) => {

    useEffect(() => {
        const id = Math.floor(Math.random() * 100);
        const ctxId = "ctx-" + id;
        setId(ctxId);
    }, []);

    return (
        <ContextMenu style={{ left: contextPosition.x, top: contextPosition.y }}>
            <ContextMenuItem bgColor="green"><div />Success</ContextMenuItem>
            <ContextMenuItem bgColor="crimson"><div />Failure</ContextMenuItem>
            <ContextMenuItem bgColor="yellow"><div />Unfortunate</ContextMenuItem>
        </ContextMenu>
    );
};

export default Context;