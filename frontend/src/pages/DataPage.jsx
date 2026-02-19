import { useState } from "react"
import { useEffect } from "react"
import TableData from "../components/TableData";
import { useNavigate } from "react-router";

export function DataPage() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [name, setName] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:5001/terrorists")
            .then(response => response.json())
            .then(data => setData(data));
        }, []);

        function handlechange(e){
            const {value, name } = e.target
            setFilter(value)
            setName(name)
            
        }

        function handleSubmit(e){
            e.preventDefault()
            if (name==="sity or country"){

           setData(data.filter(item => {
                item.city.includes(filter) || item.country.includes(filter)
            }))}
            console.log(data)
            if (name==="events bofore"){

            setData(data.filter(item => {
                item.year < filter
            }))}
            if (name==="events after"){

            setData(data.filter(item => {
                item.year > filter
            }))}
            
        }

        function handleClick(){
            navigate("/test")
        }
        

    return (
        <>
            <nav className="header">Tettor Data System</nav>
            <div>
                <form className="search-box" onSubmit={handleSubmit}>
                    <input placeholder="search by city or contry" name="sity or country" onChange={handlechange}></input>
                    <input placeholder="events bofore" name="events bofore"  onChange={handlechange}></input>
                    <input placeholder="events after" name="events after"  onChange={handlechange}></input>
                    <button type="submit">filter</button>
                    <button onClick={handleClick}>to test</button>
                </form>


            </div>
            <div>
                <TableData data={data}/>
            </div>

        </>
    )
}