import styled from "styled-components";

export const Container = styled.div`
   background-color: #EEF1F1;
   opacity: 0.9;
   width: fit-content;
   padding: 0.5em;
   padding-top: 0%;
   border-radius: 2px;
   display: flex;
   flex-direction: column;
   box-shadow: 4px 6px 12px 5px rgb(31,217,242);
   position: relative;
   &:hover{
    scale: 1.05;
   }
`;

export const Tarjetas = styled.h2`
   border-radius: 10px;
   color: #030642;
   padding; 1em;
   display:flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const Boton = styled.button`
   border: 0px;
   scale: 1.2;
   background-color: #030642;
   color: white;
   width: fit-content; 
   heigth: fit-content;
   display: flex;
   flex-direction: column;
   border-radius: 50%;
   position: relative;
   top: 13px;
   left: -5px;
   &:hover {
    color: red;
    scale: 1.5;
    background-color: #06E7E4; 
    border: 100px;   
   }
`;