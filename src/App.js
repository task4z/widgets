import React from 'react';
import Accordion from './components/Accordion';

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
            <br/>
            <Accordion items={items}></Accordion>
        </div>
    );
};

export default App;