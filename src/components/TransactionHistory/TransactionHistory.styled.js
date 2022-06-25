import styled from '@emotion/styled';

export const TableContainer = styled.table`
  width: 1000px;
  border: 1px solid ${props => props.theme.colors.black};
`;

export const TableTitle = styled.thead`
  height: 40px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.table};
`;

export const TableLine = styled.tr`
  height: 50px;
  background-color: ${props => props.theme.colors.accent};
  text-align: center;

  :nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.white};
  }
`;
