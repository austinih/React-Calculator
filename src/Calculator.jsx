import { useState } from 'react'

export default function Calculator() {

    const [display, setDisplay] = useState(0);
    const [currentCalc, setCurrentCalc] = useState('')


    const handleClick = (event) => {
        event.preventDefault();
        const newValue = currentCalc + event.target.value
        console.log(newValue)
        setCurrentCalc(newValue)
        setDisplay(newValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(eval(currentCalc))
        let total = eval(currentCalc)
        setCurrentCalc(total)
    }

    const resetCalc = (event) =>{
        event.preventDefault();
        setDisplay(0);
        setCurrentCalc('');
    }
    const backSpace = (event) => {
        event.preventDefault();
        const newValue = currentCalc.slice(0, -1);
        setCurrentCalc(newValue)
        setDisplay(newValue)
    }

    return (
        <div id="calcContainer">
            <div id="display"><h1>{display}</h1></div>
            
                <div className='row'>
                    <button className="special" id="clear" onClick={resetCalc}>AC</button>
                    <button className="special" id="delete" onClick={backSpace}>CE</button>
                    <button className="operators" value="/" onClick={handleClick} >/</button>
                </div>
                <div className='row'>
                    <button className="numbers" value="7" onClick={handleClick} >7</button>
                    <button className="numbers" value="8" onClick={handleClick} >8</button>
                    <button className="numbers" value="9" onClick={handleClick} >9</button>
                    <button className="operators" value="*" onClick={handleClick} >&times;</button>
                </div>
                <div className='row'>
                    <button className="numbers" value="4" onClick={handleClick} >4</button>
                    <button className="numbers" value="5" onClick={handleClick} >5</button>
                    <button className="numbers" value="6" onClick={handleClick} >6</button>
                    <button className="operators" value="-" onClick={handleClick} >&minus;</button>
                </div>
                <div className='row'>
                    <button className="numbers" value="1" onClick={handleClick} >1</button>
                    <button className="numbers" value="2" onClick={handleClick} >2</button>
                    <button className="numbers" value="3" onClick={handleClick} >3</button>
                    <button className="operators" value="+" onClick={handleClick} >+</button>
                </div>
            
                <div className='row'>
                    <button className="numbers" id="zero-btn" value="0" onClick={handleClick}>0</button>
                    <button className="numbers" value="." onClick={handleClick} >.</button>
                    <button className="equals" onClick={handleSubmit}>=</button>
                </div>
              
        </div>
    )
}
