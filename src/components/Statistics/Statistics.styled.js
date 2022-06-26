import styled from '@emotion/styled';

import { randomColor } from '../../utils/randomColor.js';

export const StatisticsBox = styled.section`
  width: fit-content;
  text-align: center;
  margin-bottom: 50px;
  background-color: ${props => props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.black}`};
`;

export const Title = styled.h2`
  padding: 20px;
  color: ${props => props.theme.colors.title};
  font-size: 28px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${randomColor};
  color: ${props => props.theme.colors.white};
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 26px;
`;
