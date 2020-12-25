import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DI } from './dailyItem.styled';
import Context from '../shared/ContextMenu';

const DailyItem = (
    { context, setContext }: { context: boolean, setContext: Dispatch<SetStateAction<boolean>>; }
) => {
    return <>
        <DI onContextMenu={(event) => {
            event.preventDefault();
            setContext(true);
        }}>
           
        </DI>


    </>;
};

export default DailyItem;