import {Route} from 'react-router';
import Layout from '../Layout.tsx';

export const getRoutes = () => {
    return (
        <Route path="/" element={<Layout />}>
            <Route index element={<div>Микрофронт-1. Главная</div>} />
            <Route path="info" element={<div>Микрофронт-1. Инфо</div>} />
            <Route path="micro-1" element={<div>micro-1 !!!!!</div>} />
        </Route>
    );
};
