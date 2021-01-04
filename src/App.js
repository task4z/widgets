import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is react?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use react?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use react?',
        content: 'You use React by creating components'
    }
];
const App = () => {
    return (
        <div>
            <Search />
        </div>
    );
};

export default App;