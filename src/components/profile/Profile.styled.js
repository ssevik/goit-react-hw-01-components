import styled from '@emotion/styled';

export const Profiles = styled.div`
  display: grid;
  grid-template-columns: max-content;
  padding: 10px 20px;
  background-color: #919191;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  color: #96912e;
`;

export const Location = styled.p`
  font-size: 18px;
  color: #96912e;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  background-color: #eff0f0;
  border-top: 1px solid #000;
`;

export const StatsList = styled.li`
  padding: 20px;

  :not(:last-child) {
    border-right: 1px solid #000;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  color: #96912e;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
