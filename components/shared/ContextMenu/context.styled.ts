import styled from 'styled-components';

export const ContextMenu = styled.div`
	z-index: 100;
	border: 1px solid #888;
	display: fixed;
	display: flex;
	flex-flow: column;
	position: absolute;
	top: 30px;
	left: 20px;
	width: 160px;
`;
export const ContextMenuItem = styled.div`
	color: #fff;
	border-bottom: 1px solid #ddd;
	padding: 5px 10px;
	display: flex;
	& > div {
		margin-right: 15px;
		background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
		border: 1px solid #fff;
		border-radius: 50%;
		width: 25px;
		height: 25px;
	}
`;
