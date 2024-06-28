import { useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const useQueryParameters = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);

    return query
};