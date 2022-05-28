import styled from "styled-components";

const NewTaskStyle = styled.div`
    position: fixed;
    top:0px;
    left: 0px;
    width: 40vw;
    height: 100vh;
    border-right: solid 1px black;
    padding: 0 50px;
    box-sizing: border-box;

    @media only screen and (max-width: 1200px) {      
        padding: 0 35px;
    }
    @media only screen and (max-width: 800px){
        position: static;
        width: 100%;
        height: auto;
        border-right: none;
        padding: 0 50px 30px 50px;
    }
`;

export { NewTaskStyle };
