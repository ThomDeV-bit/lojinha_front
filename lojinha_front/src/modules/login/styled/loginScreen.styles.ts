import styled from "styled-components";


export const BackGoundImage = styled.img`
	position: absolute;
	background-color: black;
	left: 0;
	top: 0;
	width: 50%;
	height: 100vh;
	object-fit: cover;
	z-index: 1;
`

export const LoginSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	right: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: 2;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 50%;
	justify-content:center;
	align-items: center;
	background-color:  rgb(4, 166, 211);
	border-radius: 20px;
	border-color: black;
	margin: 100px;
	gap: 30px;
	padding: 10px;
`
export const DivInput = styled.div`
	display: flex;
	flex-direction: column;
`


export const Input = styled.input`
	width:200px;
	height: 30px;
	border-radius: 10px;
`

export const Button = styled.button`
	width: 150px;
	height: 40px;
	border-radius:10px;
	border-color:transparent;
	background-color: blue;
	color: white;
	font-size: 18px;
`