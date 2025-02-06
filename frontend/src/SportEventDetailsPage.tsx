import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SportEvent} from "./Types.tsx";
import {useAuth} from "./AuthContext.tsx";

const SportEventDetailsPage = ()=> {
    const {sportEventId} = useParams();
    const [sportEvent, setSportEvent] = useState<SportEvent>();
    useEffect(()=> {
        fetch(`http://localhost/sportEvents/sportEvents/${sportEventId}`).then(res=> res.json()).then(fetchedSportEvent=> setSportEvent(fetchedSportEvent));
    }, [sportEventId]);

    const auth = useAuth();

    const onBuyTicket = () => {
        fetch(`http://localhost/tickets/${sportEventId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token: auth.token}),
        }).then(() => {
            alert("Ticket purchased successfully!");
        }).catch((err) => {
            console.log(err);
            alert("Could not buy ticket!");
        })
    }

    if (!sportEvent) {
        return null;
    }
    return (
        <div>
            <div>
                {
                    sportEvent.eventname + " " + sportEvent.teamsName + " " + sportEvent.location
                }
            </div>
            <div>
                <button onClick={onBuyTicket}> Buy ticket </button>
            </div>
        </div>
    );
}

export default SportEventDetailsPage;