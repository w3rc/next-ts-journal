import { ContextMenu, ContextMenuItem } from './context.styled';

const Context = () => {
    return (
        <ContextMenu>
            <ContextMenuItem bgColor="green"><div />Success</ContextMenuItem>
            <ContextMenuItem bgColor="crimson"><div />Failure</ContextMenuItem>
            <ContextMenuItem bgColor="yellow"><div />Unfortunate</ContextMenuItem>
        </ContextMenu>
    );
};

export default Context;