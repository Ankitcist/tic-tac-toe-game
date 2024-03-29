import React, { useRef, useState } from "react";
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import { Button } from "semantic-ui-react";

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {
    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    const titleRef = useRef(null)
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)
    const box3Ref = useRef(null)
    const box4Ref = useRef(null)
    const box5Ref = useRef(null)
    const box6Ref = useRef(null)
    const box7Ref = useRef(null)
    const box8Ref = useRef(null)
    const box9Ref = useRef(null)

    let boxesRef = [box1Ref, box2Ref, box3Ref, box4Ref, box5Ref, box6Ref, box7Ref, box8Ref, box9Ref]

    const toggle = (e, box_index) => {
        if(lock || data[box_index] != ''){
            return
        }
        
        if(count % 2 == 0){
            e.target.innerHTML = `<img src='${cross_icon}'>`
            data[box_index] = 'x'
            setCount(++count)
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`
            data[box_index] = '0'
            setCount(++count)
        }
        checkWinner()
    }

    const checkWinner = () => {
        if(data[0] == data[1] && data[1] == data[2] && data[2] != ""){
            win(data[0])
        }
        else if(data[3] == data[4] && data[4] == data[5] && data[5] != ""){
            win(data[3])
        }
        else if(data[6] == data[7] && data[7] == data[8] && data[8] != ""){
            win(data[6])
        }
        else if(data[0] == data[3] && data[3] == data[6] && data[6] != ""){
            win(data[0])
        }
        else if(data[1] == data[4] && data[4] == data[7] && data[7] != ""){
            win(data[1])
        }
        else if(data[2] == data[5] && data[5] == data[8] && data[8] != ""){
            win(data[2])
        }
        else if(data[0] == data[4] && data[4] == data[8] && data[8] != ""){
            win(data[0])
        }
        else if(data[2] == data[4] && data[4] == data[6] && data[6] != ""){
            win(data[2])
        }
    }

    const win = (winner) => {
        setLock(true)
        if(winner == 'x'){
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}>`
        }
        else{
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}>`
        }
    }

    const handleReset = () => {
        setLock(false)
        titleRef.current.innerHTML = 'Tic Tac Toe Game in <span>React</span>'
        data = ["", "", "", "", "", "", "", "", ""]
        boxesRef.map(e => {
            e.current.innerHTML = ''
        })
    }

    return <div className="container">
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1Ref} onClick={(e) => toggle(e, 0)}></div>
                <div className="boxes" ref={box2Ref} onClick={(e) => toggle(e, 1)}></div>
                <div className="boxes" ref={box3Ref} onClick={(e) => toggle(e, 2)}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4Ref} onClick={(e) => toggle(e, 3)}></div>
                <div className="boxes" ref={box5Ref} onClick={(e) => toggle(e, 4)}></div>
                <div className="boxes" ref={box6Ref} onClick={(e) => toggle(e, 5)}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7Ref} onClick={(e) => toggle(e, 6)}></div>
                <div className="boxes" ref={box8Ref} onClick={(e) => toggle(e, 7)}></div>
                <div className="boxes" ref={box9Ref} onClick={(e) => toggle(e, 8)}></div>
            </div>
        </div>

        <Button className="reset" onClick={() => handleReset()}>Reset</Button>
    </div>
}

export default TicTacToe