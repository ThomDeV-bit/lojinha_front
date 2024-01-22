import styled from "styled-components";

export const InsertProductContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
	background-color:  rgb(4, 166, 211);
    height: 100%;
    min-width: 100%;
    justify-content: center;
    align-items: center;
`


export const InsertProductSection = styled.div`
    display: flex;
    flex-flow:  column wrap;
    justify-content: center;
    justify-content: space-between;
    margin-top: 20px;
    background-color: white;
    width: 70%;
    max-width: 800px;
    min-width: 800px;
    height: 70%;
    border-radius: 8px;
    gap: 5px;
`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: 60px;
    margin-top: 10px;
    margin-bottom: 30px;

`

export const ImageInput = styled.div`
    width: 40%;
    height: 45%;
    background-color: black;
    margin-top: 30px;
`