import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 40px 20px 10px;
  width: 250px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const AvatarImg = styled.img`
  margin-right: 20px;
`;

export const Status = styled.span`
  margin-right: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
