import styled from 'styled-components';

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 0px;

header{
    height: 60px;
    background-color: #5F9F9F;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}

h1{
    font-size: 24px;
    font-weight: 700;
    color: #222222;
}

h2{
    font-size: 22px;
    color: #222222;
}

span{
    font-size: 20px;
    color: #222222;
    font-weight: 700;
}

button{
    border: none;
    border-radius: 5px;
    width: 120px;
    height: 30px;
    background-color: #3299CC;
    color: #222222;
    font-family: 'Roboto';
    font-size: 13px;
    cursor: pointer;
}

article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

footer{
    position: fixed;
    bottom: 30px;
    button{
        background-color: #808080;
    }
}
`;

export const Btns = styled.div`

margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
gap: 50px;

button:first-child{
    background-color: rgb(0,128,0);
    width: 135px;
}
button:nth-child(2){
    background-color: rgb(210,0,0);
    width: 135px;
}
`;

export const List = styled.div`

display: flex;
justify-content: center;
margin-top: 30px;
gap: 50px;
min-height: 30px;

h3{
    margin-bottom: 10px;
    color: #222222;
    font-weight: 700;
}

div:first-child{
    background-color: rgb(0,128,0, 0.7);
    border-radius: 5px;
    padding: 5px;
    min-width: 135px;
}
div:nth-child(2){
    background-color: rgb(210,0,0, 0.7);
    border-radius: 5px;
    padding: 5px;
    min-width: 135px;
}
`;