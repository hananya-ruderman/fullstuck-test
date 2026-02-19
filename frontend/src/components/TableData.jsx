
import Row from "./Row";

export default function TableData({ data }) {
  

    return (

        <>
            <table className="table">
                <thead>
                    <tr>
                        <th className="first-col">
                        event_id 
                        
                        </th>
                        <th>
                        year
                        </th>
                        <th>
                        country
                        </th>
                        <th>
                            city
                        </th>
                        <th>
                            attack type
                        </th>
                        <th>
                            motive
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item,index) =>

                        (<Row key={index} event={item} />)

                    )}
                </tbody>
            </table>

        </>


    )

}