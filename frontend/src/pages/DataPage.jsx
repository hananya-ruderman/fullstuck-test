import { useEffect } from "react"
import TableData from "../components/TableData";
import { useNavigate } from "react-router"
import useStore from "../store/useStore"

export function DataPage() {
    const navigate = useNavigate()
    const data = useStore((s) => s.data)
    const setData = useStore((s) => s.setData)
    const filter = useStore((s) => s.filter)
    const setFilter = useStore((s) => s.setFilter)
    const name = useStore((s) => s.name)
    const setName = useStore((s) => s.setName)

    useEffect(() => {
        fetch("http://localhost:5001/terrorists")
            .then(response => response.json())
            .then(d => setData(d))
            .catch(err => console.error('fetch error', err));
    }, [setData]);

    function handleChange(e){
        const { value, name } = e.target
        setFilter(value)
        setName(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        // if no filter provided, refetch original data or do nothing
        if (!filter) return

        // apply filters immutably by creating a filtered array
        if (name === "sity or country"){
            setData(prev => prev.filter(item => {
                const city = (item.city || '').toString().toLowerCase()
                const country = (item.country || item.country_txt || '').toString().toLowerCase()
                const f = filter.toLowerCase()
                return city.includes(f) || country.includes(f)
            }))
        }

        if (name === "events bofore"){
            const num = Number(filter)
            if (!Number.isNaN(num)){
                setData(prev => prev.filter(item => Number(item.iyear || item.year) < num))
            }
        }

        if (name === "events after"){
            const num = Number(filter)
            if (!Number.isNaN(num)){
                setData(prev => prev.filter(item => Number(item.iyear || item.year) > num))
            }
        }
    }

    function handleClick(){
        navigate("/test")
    }

    return (
        <>
            <nav className="header">Terror Data System</nav>
            <div>
                <form className="search-box" onSubmit={handleSubmit}>
                    <input placeholder="search by city or country" name="sity or country" onChange={handleChange} />
                    <input placeholder="events bofore" name="events bofore"  onChange={handleChange} />
                    <input placeholder="events after" name="events after"  onChange={handleChange} />
                    <button type="submit">filter</button>
                    <button type="button" onClick={handleClick}>to test</button>
                </form>
            </div>
            <div>
                <TableData data={data}/>
            </div>

        </>
    )
}