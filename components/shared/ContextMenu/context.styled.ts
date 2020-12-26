import styled from 'styled-components';

export const ContextMenu = styled.div`
	z-index: 100;
	border: 1px solid rgba(20, 20, 20, 0.3);
	display: flex;
	border-radius: 20px;
	background-color: rgba(20, 20, 20, 0.3);
	flex-flow: column;
	position: absolute;
	width: 160px;
	animation: scaleUp 0.3s linear;
	@keyframes scaleUp {
		0% {
			transform-origin: 0% 0%;
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
`;
export const ContextMenuItem = styled.div`
	color: #fff;
	/* border-bottom: 0.1px solid #555; */
	padding: 10px;
	border-radius: 20px;
	display: flex;
	cursor: pointer;
	&:hover {
		background-color: #555;
	}
	& > div {
		margin-right: 15px;
		background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
		border: 1px solid #fff;
		border-radius: 50%;
		width: 25px;
		height: 25px;
	}
`;
