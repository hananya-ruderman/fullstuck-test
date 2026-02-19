

export default function Row({ event }) {
    return (
        <tr>
            <td>{event.eventId}</td>
                
            <td>{event.iyear}</td>
            <td>{event.country_txt}</td>
            <td>{event.city}</td>
            <td>{event.attacktype1_txt}</td>
            <td>{event.motive}</td>

        </tr>

    )
}