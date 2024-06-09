import styled from "styled-components";

export const Container = styled.section`
    background-color: white;
    margin-bottom: 10px;
    box-shadow: 0 0 7px #dddddd;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 0 20px;
    margin: 0;
    border-bottom: 2px solid #eeeeee;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        text-align: center;
        grid-gap: 0;
    }
`;

export const Body = styled.div`
    padding: 20px;

    @media (max-width: 767px) {
        padding: 20px 10px;
    }
`;