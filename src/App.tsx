import {BrowserRouter, Routes} from 'react-router';
import {getRoutes} from './app/routes.tsx';

interface IProps {
    baseUrl: string;
}

const App = (props: IProps) => {
    const {baseUrl} = props;
    
    return (
        <BrowserRouter basename={baseUrl}>
            <Routes>{getRoutes()}</Routes>
        </BrowserRouter>
    );
};

export default App;
