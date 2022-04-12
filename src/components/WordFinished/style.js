import styled from 'styled-components';

export const Li = styled.li`
color: #222222;
margin-bottom: 3px;
text-decoration-line: ${props => props.remember ? 'line-through' : ''};
font-size: 24px;
color: #ffffff;
`;