import styled from "styled-components";

const TodolistStyle = styled.div`
    margin-left: 40vw;
    width: 60vw;
    height: 100vh;
    
    .wrapperTodoist {
        padding: 0 130px 80px 80px;
        box-sizing: border-box; 
    }

    .bulkBlock {
        position: fixed;
        width: 60%;
        bottom: 0px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: #e0e0e0;
        padding-left: 40px;
        padding-right: 20px;      
    }
    .doneBtn {
        background-color: #2196f3;
    }

    .bulkBtn {
        width: 130px;
        height: 30px;
        font-weight: bold;
        margin: 20px;
    }

    .removeBtn { 
        background-color: #d9534f;
    }

    .todo {
        margin-top: 20px;
        border: solid 1px black;
    }
    .todoContent {
        display: flex;
        padding: 13px;
    }
    .checkbox {
        width: 16px;
        height: 16px;
    }
    .todoLabel{
        margin-left: 10px;
        flex: 1;
    }
    .todoBtn{
        width: 90px;
        height: 27px;
        margin: 0 10px;
    }
    .detailBtn{
        background-color: #00bcd4;
    }
    .todoDetail{
        border-top: solid 1px black;
        padding: 20px;
    }
    @media only screen and (max-width: 1200px) { 
        .wrapperTodoist{
            padding: 0 60px 80px 40px;   
        }
        .todoBtn{
            width: 60px;
        }
        .bulkBtn{
            width: 100px;
            margin: 15px 20px;
        }
    }
  @media only screen and (max-width: 800px){  
    margin-left: 0;
    width: 100%;
    height: auto;
    .wrapperTodoist{
        padding: 0 50px 80px 50px;
    }
    .bulkBlock{
        width: 100%;
    }
  }
`;

export { TodolistStyle };
