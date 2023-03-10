import styled from "styled-components";

export const Container = styled.div`
   position: relative;
   width: fit-content;
   padding: 0px;
   cursor: pointer;
   display: flex;
   flex-direction: column;
   opacity: 0.9;
   transition: 0.8s ease;
   &: hover {
      scale: 1.15;
      box-shadow: 10px 10px 20px 0px rgb(31,217,242);
      border: 0.5px solid;
      background-color: #DED0BD;
      opacity: 1;
   }
`;

export const Tarjetas = styled.h2`  
   position: absolute;
   top: 64%;
   display: flex;
   color: #030642;
   padding-left: 0.5em;
   &: hover{
      text-shadow: 0px 2px 7px rgb(31,217,242,1);
      transition: 0.8s ease;
      scale: 1.2;
      padding-left: 3em;
   }
`;

export const Tarjetas2 = styled.h2`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   scale: 0.8;
   color: #030642;
   background-color: white;
   border-radius: 20px;
   margin: 4px;
   margint-top: 0px;
   &: hover{
      background-color: transparent;
      transition: 0.6s ease;
   }
`;

export const Boton = styled.button`
   position: absolute;
   left: 90%;
   border: 0px;
   background-color: transparent;
   font-size: 30px;
   display: flex;
   &: hover {
      transition: 0.5s ease;
      scale: 2;
      color: red;
      font-weight: bold;
   }
`;
