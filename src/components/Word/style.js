import styled from 'styled-components';

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 65px;

h2{
    font-size: 22px;
    color: #222222;
}

span{
    font-size: 60px;
    color: #222222;
    font-weight: 700;
}

button{
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    background-color: #3299CC;
    color: #222222;
    font-family: 'Roboto';
    font-size: 22px;
    cursor: pointer;
}

article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;

    button{
        margin-top: ${props => props.word !== '' ? '20px' : '80px'};
    }

    span{
        text-align: center;
        word-break: break-word;
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
    font-size: 24px;
    color: #ffffff;
}
button:nth-child(2){
    background-color: rgb(210,0,0);
    width: 135px;
    font-size: 24px;
    color: #ffffff;
}
`;

export const List = styled.div`

display: flex;
justify-content: center;
margin-top: 30px;
gap: 25px;
min-height: 30px;

h3{
    margin-bottom: 10px;
    color: #222222;
    font-weight: 700;
    color: #fff;
}

div:first-child{
    background-color: rgb(0,128,0, 0.7);
    border-radius: 5px;
    padding: 5px;
    width: 160px;
}
div:nth-child(2){
    background-color: rgb(210,0,0, 0.7);
    border-radius: 5px;
    padding: 5px;
    width: 160px;
}
`;

export const Header = styled.header`
height: 60px;
background-color: #5F9F9F;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 25px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

h1{
    font-size: 35px;
    font-weight: 700;
    color: #222222;
    cursor: pointer;
}
`;

export const Footer = styled.footer`
position: fixed;
height: 60px;
background-color: #fafafa;
bottom: 0px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;

button{
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    color: #222222;
    font-family: 'Roboto';
    font-size: 22px;
    cursor: pointer;
    background-color: #808080;
}
`;