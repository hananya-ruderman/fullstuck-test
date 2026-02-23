import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { DataContext } from "../App"

export function TestPage(){
    const dataContext = useContext(DataContext)
    const [question, setQuestion ] = useState(null)
    const [isCorrect, setIsCorrect] = useState(false)
    const score= useRef(0)
    const navigate = useNavigate()

    const prevScore = JSON.parse(localStorage.getItem("score"))

    if (prevScore){
        score.current = prevScore
        localStorage.removeItem("score")
    }

    if(question) localStorage.setItem("current", JSON.stringify(question))
    
    if(!question && dataContext.length > 0) {
        const current = JSON.parse(localStorage.getItem("current"))

        if(current){
            setQuestion(current)
        }
        else{

            setQuestion(dataContext[randomIntFromInterval(0,49)])
        }
    }    
    
    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async function checkAnswers(formData){
        const answer = formData.get("answer")
        if (question.attacktype1_txt === answer){
            await fetch("http://localhost:5001/tester", {
                method: "POST",
                headers:{"content-type": "application/json"},
                body: JSON.stringify({score: 1})
            })
            setIsCorrect(true)
            score.current +=1
            setTimeout(()=>{
                setIsCorrect(false)
                setQuestion(dataContext[randomIntFromInterval(0,49)])
            }, 3000)

        }
        else{
            JSON.parse(localStorage.getItem("current"))
        }
    }


    function handleBackClick(){
        localStorage.setItem("score", JSON.stringify(score.current))
        navigate('/')
    }
    
    function handlenextClick(){
        setQuestion(dataContext[randomIntFromInterval(0,49)])
    }

    return(
        <>
        <div>teeror tata quize</div>
        <div>
            <p>{question && `when country = ${question.country_txt} and year = ${question.iyear} what is attack type?`}</p>
            <form action={checkAnswers}>
                <input type="text" name="answer" placeholder="type..." />
                <button type="submit" >submit</button>
            </form>
        </div>
        <div>
            <div>{isCorrect? `your answer is correct, your score ${score.current}`: null}</div>
            <button onClick={handleBackClick}>back to data page</button>
            <button onClick={handlenextClick}>next</button>
        </div>
        </>
    )
}