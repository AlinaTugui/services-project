import {useEffect, useState} from "react";
import {useAuth} from "./AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import {SportEvent} from "./Types.tsx";

const SportEventsList = ()=> {
    const [sportEvents, setSportEvents] = useState<SportEvent[]>([]);
    useEffect(()=> {
        fetch("http://localhost/sportEvents/sportEvents").then(res=> res.json()).then(fetchedSportEvents=> setSportEvents(fetchedSportEvents));
    }, []);
    const auth = useAuth();
    const navigate = useNavigate();

    return (

        <div>
            {
                auth.isAuthenticated ? "User logged in" : "Please log in before buying tickets"
            }
            {
                !auth.isAuthenticated &&
                <button onClick={()=> navigate("/login")}> Log in </button>
            }
            {
                sportEvents.map((sportEvent, index)=>(
                    <div key={index}>
                        {sportEvent.eventname + " " + sportEvent.teamsName}
                        {
                            auth.isAuthenticated &&
                            <button onClick={() => navigate(`/sportEvents/${sportEvent._id}`)}> See details </button>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default SportEventsList;