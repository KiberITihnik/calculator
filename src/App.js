import { useState } from 'react';
import styles from './styles/App.module.scss';

function App() {
    const [input, setInput] = useState('');
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach((item) => {
        calcBtns.push(<button>{item}</button>);
    });
    return (
        <div className={styles.container}>
            <div className="show-input">{input}</div>
            <div className={styles.btn}>{calcBtns}</div>
            <div className="modifiers subgrid">
                <button className="btn light-gray">AC</button>
                <button className="btn light-gray">%</button>
                <button className="btn light-gray">+/-</button>
                <button className="btn orange">/</button>

                <button className="btn orange">X</button>

                <button className="btn orange">+</button>

                <button className="btn orange">-</button>

                <button className={styles.btn}>=</button>
            </div>
        </div>
    );
}

export default App;
