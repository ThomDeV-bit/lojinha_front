import styled from "styled-components";

export const ContainerTooltip = styled.div`
	position: relative;
	:hover {
		div {
			display: block;
		}
	}
`;

export const ContainerExternal = styled.div`
	position: absolute;
	bottom: -36px;
	padding: 1px;
	border-radius: 4px;
	background-color: rgba(0,0,0,0.1);
`;