import React from 'react';

import { News } from '../features/news/ui/News';
import { Disclaimer } from '../widgets/disclaimer';
import { Logotype } from '../widgets/logotype';

import './styles/normalize.css';
import './styles/vars.css';
import './index.css';

const App: React.FC = () => {
    return (
        <div id="app">
            <header className="header">
                <Logotype />
            </header>
            <main className="main">
                <News />
            </main>
            <footer className="footer">
                <Disclaimer />
            </footer>
        </div>
    );
};

export default App;
