import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    .header {
        text-align: center;
        margin-bottom: 30px;
    }
    .creatInput {
        width: 100%;
        height: 33px;
        padding-left: 15px;
        box-sizing: border-box;
        margin-bottom: 5px;
    }
    .error-formik {
        font-size: 12px;
        color: #d9534f;
        height: 25px;
    }
    .errorDate {
        font-size: 12px;
        color: #d9534f;
    }
    .label {
        font-weight: bold;
    }
    .textarea {
        width: 100%;;
        max-width: 100%;
        min-height: 70px;
        padding: 5px 10px;
        box-sizing: border-box;
    }
    .selectBlock{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    .selectBlockElement{
        width: 40%;
    }
    .selectInput{
        width: 100%;
        height: 25px;
        margin-top: 8px;
    }
    .btn{
        border: none;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }
    .addBtn{
        margin-top: 50px;
        width: 100%;
        height: 28px;
        background-color: #5cb85c;
        font-weight: bold;
    }

    @media only screen and (max-width: 1200px) {
        .creatInput {
            padding-left: 10px;
            margin-bottom: 20px;
        }
        .header{
            margin-bottom: 20px;
        }
    }

    @media only screen and (max-width: 800px){
        .creatInput {
            margin-bottom: 30px;
        }
    }
`;    

export { Styles };