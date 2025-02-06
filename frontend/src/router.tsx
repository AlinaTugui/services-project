import {createBrowserRouter} from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import SportEventsList from "./SportEventsList.tsx";
import SportEventsDetailsPage from "./SportEventDetailsPage.tsx";

export const router = createBrowserRouter([{path: "/login", Component: LoginPage}, {path: "/", Component: SportEventsList}, {path:"/sportEvents/:sportEventId", Component: SportEventsDetailsPage}])