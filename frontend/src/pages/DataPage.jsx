import { useState } from "react"
import { useEffect } from "react"
import TableData from "../components/TableData";

export function DataPage() {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch("http://localhost:5001/terrorists")
            .then(response => response.json())
            .then(data => setData(data));
        }, []);
        

    return (
        <>
            <nav className="header">Tettor Data System</nav>
            <div>
                <form className="search-box">
                    <input placeholder="search by city or contry"></input>
                    <input placeholder="events bofore"></input>
                    <input placeholder="events after"></input>
                    <button type="submit">filter</button>
                </form>


            </div>
            <div>
                <TableData data={data}/>
            </div>

        </>
    )
}