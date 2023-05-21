import { useState } from 'react';
import styles from './styles/App.module.scss';
import plusMinus from './assets/plusMinus.svg';
import clear from './assets/clear.svg';

function App() {
    const [input, setInput] = useState('');
    // const calcBtns = [];
    // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach((item) => {
    //     calcBtns.push(<button>{item}</button>);
    // });
    return (
        <div className={styles.container}>
            <div className={styles.showInput}>0</div>
            <div className={styles.down}>
                <div className={styles.left}>
                    <button className={styles.btn}>AC</button>
                    <button className={styles.btn}>
                        <img src={plusMinus} alt="" />
                    </button>
                    <button className={styles.btn}>%</button>
                    <button className={styles.btn}>7</button>
                    <button className={styles.btn}>8</button>
                    <button className={styles.btn}>9</button>
                    <button className={styles.btn}>4</button>
                    <button className={styles.btn}>5</button>
                    <button className={styles.btn}>6</button>
                    <button className={styles.btn}>1</button>
                    <button className={styles.btn}>2</button>
                    <button className={styles.btn}>3</button>
                    <button className={styles.btn}>,</button>
                    <button className={styles.btn}>0</button>
                    <button className={styles.btn}>=</button>
                </div>
                <div className={styles.right}>
                    <button className={styles.btnOrange}>
                        <img src={clear} alt="" />
                    </button>
                    <button className={styles.btnOrange}>÷</button>
                    <button className={styles.btnOrange}>×</button>
                    <button className={styles.btnOrange}>-</button>
                    <button className={styles.btnOrange}>+</button>
                </div>
            </div>
        </div>
    );
}

export default App;
