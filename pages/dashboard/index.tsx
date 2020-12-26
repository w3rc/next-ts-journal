import { } from './dashboard.styled';
import DailyItem from '../../components/DailyItem';
import { useEffect, useRef, useState } from 'react';
import Context from '../../components/shared/ContextMenu';

const Dashboard = () => {

    const [showContext, setShowContext] = useState<boolean>(false);
    const [contextId, setContextId] = useState<string>('');
    const [contextPosition, setContextPosition] = useState<{ x: number; y: number; }>({ x: 0, y: 0 });
    useEffect(() => {
        window.addEventListener('click', () => {
            setShowContext(false);
        });
        // window.addEventListener('contextmenu', () => {
        //     if (showContext) {
        //         setShowContext(false);
        //         console.log('in');
        //     }
        //     // console.log('out')
        // });
        return () => {
            window.removeEventListener('click', () => { });
        };
    });

    const closeContext = () => {
        console.log(contextId);
        if (contextId.trim().length > 0) {
            const elem = document.getElementById(contextId.trim());
            elem?.remove();
        }
    };


    return (<>
        <h1 style={{ color: 'white' }}>My Journal</h1>
        <div style={{ display: 'flex' }}>
            {
                [...Array(7)].map((_, index) => <DailyItem setContext={setShowContext} contextId={contextId} closeContext={closeContext} key={index} setContextPosition={setContextPosition} />)
            }
            {showContext && <Context contextPosition={contextPosition} setId={setContextId} />}
        </div></>
    );
};

export default Dashboard;