import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);

    return query;
};

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};