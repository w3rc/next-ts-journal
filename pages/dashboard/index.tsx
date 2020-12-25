import { } from './dashboard.styled';
import DailyItem from '../../components/DailyItem';
import { useEffect, useState } from 'react';
import Context from '../../components/shared/ContextMenu';

const Dashboard = () => {

    const [showContext, setShowContext] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('click', () => {
            setShowContext(false);
        });
        window.addEventListener('contextmenu', () => {
            if (showContext) {
                setShowContext(false);
                console.log('in');
            }
            // console.log('out')
        });
        return () => {
            window.removeEventListener('click', () => { });
        };
    });

    return (<>
        <h1 style={{ color: 'white' }}>My Journal</h1>
        <div style={{ display: 'flex' }}>
            {
                [...Array(7)].map((_, index) => <DailyItem context={showContext} setContext={setShowContext} key={index} />)
            }
            {showContext && <Context />}
        </div></>
    );
};

export default Dashboard;