import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../input";


export default () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    return (
        <Input
            placeholder="Filtruj zadania"
            value={query || ""}
        />
    )
};