import styled from "styled-components";

export const Div = styled.div`
	display: flex;
`
export const ImageSection = styled.img`
	display: flex;
	width: 100%;
	height: 100vh;
	background-size: cover;
	z-index: 1;
`

export const LoginSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	justify-content:center;
	right: 0;
	top: 0;
	width: 50%;
	height: 100vh;
	z-index: 2;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: black;
	width: 60%;
	height: 50%;
	justify-content:center;
	align-items: center;
	background-color:  rgb(4, 166, 211);
	border-radius: 20px;
	border-color: black;
	margin: 100px;
	gap: 20px;
	font-size: 15px;
	color: white;
`
export const DivInput = styled.div`
	display: flex;
	flex-direction: column;
`

export const Input = styled.input`
	width:200px;
	height: 30px;
	border-radius: 10px;
	border-color: transparent;
`

export const Button = styled.button`
	width: 30%;
	height: 30px;
	border-radius:10px;
	border-color:black;
	background-color: white;
	color: black;
	cursor: pointer;
`