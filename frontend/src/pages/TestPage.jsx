import { useState } from "react"
import { useRef, useEffect} from "react"
import { useNavigate } from "react-router"

export function TestPage({data}){
    const [next, setNext] =  useState(false)
    const [data1, setData1] =  useState()
    const ref = useRef()
    const navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:5001/terrorists")
                .then(response => response.json())
                .then(data => setData1(data));
            }, []);
    

    useEffect(() => {
            datafor()
            }, [next]);
    


    function handleSubmit (e){
        e.preventDefoult()
        const item = data[(Math.random() * 50)]
        console.log(item)
    }

    function handleBackClick(){
        navigate('/')
    }
    
    function handlenextClick(){
        setNext(!next)
    }

    function  datafor(){
        const rand = Math.random()*50
        const q = data1
        ref.current = q
    }

    return(
        <>
        <div>teeror tata quize</div>
        <div>
            <form>
                <div>{ref.current}</div>
                <input type="text" placeholder="type..." />
                <button type="submit" onSubmit={handleSubmit}>submit</button>
            </form>
        </div>
        <div>
            <button onClick={handleBackClick}>back to data page</button>
            <button onClick={handlenextClick}>next</button>
        </div>
        </>
    )
}