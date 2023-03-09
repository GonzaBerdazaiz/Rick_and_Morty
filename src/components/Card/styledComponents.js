import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   opacity: 0.9;
   width: fit-content;
   border-radius: 2px;
   position: relative;
   &: hover {
    scale: 1.15;
   }
`;

export const Tarjetas = styled.h2`  
   color: black;
   text-shadow: 0px 2px 7px  rgb(31,217,242);
   display: flex;
   width: fit-content;
   padding:0.5em;
   position: absolute;
   top: 60%;
`;

export const Tarjetas2 = styled.h2`
//    position: absolute;
   background-color: white;
   margin: auto;
   margin-top: 0.5em;
   width: fit-content;
   padding-left: 0.5em;
   padding-right: 0.5em;
   border-radius: 20px;
   color: #030642;
   display: flex;
//    top: 100%;
`;

export const Boton = styled.button`
   border: 0px;
   scale: 2;
   background-color: transparent;
   color: black;
   width: fit-content; 
   heigth: fit-content;
   display: flex;
   flex-direction: column;
   position: relative;
   top: 9.5px;
   left:90%;
   &:hover {
    color: red;
    font-weight: bold;
    border: 0px;
    scale: 4;
    background-color: transparent;   
   }
`;
