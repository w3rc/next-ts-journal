import DailyItem from '../../components/DailyItem';
import { useEffect, useState } from 'react';
import Context from '../../components/shared/ContextMenu';

const Dashboard = () => {
    const [showContext, setShowContext] = useState<boolean>(false);
    const [contextId, setContextId] = useState<string>('');
    const [contextPosition, setContextPosition] = useState<{ x: number; y: number; }>({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener('click', () => {
            setShowContext(false);
        });
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
                [...Array(7)].map((_, index) =>
                    <DailyItem
                        key={index}
                        setContext={setShowContext}
                        contextId={contextId}
                        closeContext={closeContext}
                        setContextPosition={setContextPosition} />)
            }
            {showContext &&
                <Context
                    contextPosition={contextPosition}
                    setId={setContextId} />}
        </div></>
    );
};

export default Dashboard;