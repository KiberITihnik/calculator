import { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import plusMinus from './assets/plusMinus.svg';
import clear from './assets/clear.svg';
import { NumericFormat } from 'react-number-format';

function App() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive((current) => !current);
    };

    const [preState, setPreState] = useState('0');
    const [curState, setCurState] = useState('');
    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
        if (curState.includes(',') && e.target.innerText === ',') return;

        if (total) {
            setPreState('');
        }

        curState ? setCurState((pre) => pre + e.target.innerText) : setCurState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(curState);
    }, [curState]);

    useEffect(() => {
        setInput('0');
    }, []);
    const operatorType = (e) => {
        setTotal(false);
        setOperator(e.target.innerText);
        if (curState === '') return;
        if (preState !== '') {
            equals();
        } else {
            setPreState(curState);
            setCurState('');
        }
    };

    const equals = (e) => {
        if (e?.target.innerText === '=') {
            setTotal(true);
        }
        let cal;
        switch (operator) {
            case '÷':
                cal = String(parseFloat(preState) / parseFloat(curState));
                break;

            case '+':
                cal = String(parseFloat(preState) + parseFloat(curState));
                break;
            case '×':
                cal = String(parseFloat(preState) * parseFloat(curState));
                break;
            case '-':
                cal = String(parseFloat(preState) - parseFloat(curState));
                break;
            default:
                return;
        }
        setInput('');
        setPreState(cal);
        setCurState('');
    };

    const minusPlus = () => {
        if (curState.charAt(0) === '-') {
            setCurState(curState.substring(1));
        } else {
            setCurState('-' + curState);
        }
    };

    const percent = () => {
        preState
            ? setCurState(String((parseFloat(curState) / 100) * preState))
            : setCurState(String(parseFloat(curState) / 100));
    };

    const back = () => {
        setCurState(curState.slice(0, -1));
    };

    const reset = () => {
        setPreState('0');
        setCurState('');
        setInput('0');
    };

    return (
        <div className={styles.container}>
            <div className={styles.showInput}>
                {input !== '' || input === '0' ? input : preState}
            </div>
            <div className={styles.down}>
                <div className={styles.left}>
                    <button onClick={reset} className={styles.btn}>
                        AC
                    </button>
                    <button onClick={minusPlus} className={styles.btn}>
                        <img src={plusMinus} alt="" />
                    </button>
                    <button onClick={percent} className={styles.btn}>
                        %
                    </button>
                    {/* 0-7 and , */}
                    <>
                        <button onClick={inputNum} className={styles.btn}>
                            7
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            8
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            9
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            4
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            5
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            6
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            1
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            2
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            3
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            ,
                        </button>
                        <button onClick={inputNum} className={styles.btn}>
                            0
                        </button>
                    </>
                    <button onClick={equals} className={styles.btn}>
                        =
                    </button>
                </div>
                <div className={styles.right}>
                    <button onClick={back} className={styles.btnOrange}>
                        <img src={clear} alt="" />
                    </button>
                    <button onClick={operatorType} className={styles.btnOrange}>
                        ÷
                    </button>
                    <button onClick={operatorType} className={styles.btnOrange}>
                        ×
                    </button>
                    <button onClick={operatorType} className={styles.btnOrange}>
                        -
                    </button>
                    <button onClick={operatorType} className={styles.btnOrange}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
