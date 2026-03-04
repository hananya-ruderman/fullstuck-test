import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router"
import useStore from "../store/useStore"

export function TestPage(){
    const navigate = useNavigate()
    const data = useStore((s) => s.data)
    const [current, setCurrent] = useState(null)
    const ref = useRef(null)

    useEffect(() => {
        if (data && data.length > 0) ref.current = data
    }, [data])

    function handleSubmit(e) {
        e.preventDefault()
        if (!ref.current || ref.current.length === 0) return
        const idx = Math.floor(Math.random() * ref.current.length)
        const item = ref.current[idx]
        setCurrent(item)
        console.log('submitted item:', item)
    }

    function handleBackClick(){
        navigate('/')
    }

    function handleNextClick() {
        if (!ref.current || ref.current.length === 0) return
        const idx = Math.floor(Math.random() * ref.current.length)
        setCurrent(ref.current[idx])
    }

    return(
        <>
        <div>terror data quiz</div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>{current ? JSON.stringify(current) : 'No question yet'}</div>
                <input type="text" placeholder="type..." />
                <button type="submit">submit</button>
            </form>
        </div>
        <div>
            <button onClick={handleBackClick}>back to data page</button>
            <button onClick={handleNextClick}>next</button>
        </div>
        </>
    )
}

export default TestPage
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
    


    function handleSubmit(e) {
        e.preventDefault()
        if (!ref.current || ref.current.length === 0) return
        const idx = Math.floor(Math.random() * ref.current.length)
        const item = ref.current[idx]
        console.log(item)
    }

    function handleBackClick(){
        navigate('/')
    }
    
    function handleNextClick() {
        if (!ref.current || ref.current.length === 0) return
        const idx = Math.floor(Math.random() * ref.current.length)
        setCurrent(ref.current[idx])
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
                <button type="submit">submit</button>
            </form>
        </div>
        <div>
            <button onClick={handleBackClick}>back to data page</button>
            <button onClick={handlenextClick}>next</button>
        </div>
        </>
    )
}