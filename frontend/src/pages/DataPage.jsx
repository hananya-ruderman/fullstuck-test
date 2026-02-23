import { useContext, useState } from "react"
import TableData from "../components/TableData";
import { useNavigate } from "react-router";
import { DataContext } from "../App";

export function DataPage() {
    const dataContext = useContext(DataContext)
    console.log(dataContext)
    const [data, setData] = useState(dataContext)
    const [filter, setFilter] = useState()
    const [name, setName] = useState(null)
    const navigate = useNavigate()


        function handlechange(e){
            const {value, name } = e.target
            setFilter(value)
            setName(name)
            
        }

        function handleSubmit(e){
            e.preventDefault()
            if (name==="city or country"){
                console.log(object)
           setData(data.filter(item => {
               return item.city.includes(filter) || item.country.includes(filter)
            }))}
            console.log(data)
            if (name==="events before"){

            setData(data.filter(item => {
               return item.iyear < filter
            }))}
            if (name==="events after"){

            setData(data.filter(item => {
                return item.iyear > filter
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
                    <input placeholder="search by city or contry" name="city or country" onChange={handlechange}></input>
                    <input placeholder="events bofore" name="events before"  onChange={handlechange}></input>
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