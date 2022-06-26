import PropTypes from 'prop-types';
import {
  StatisticsBox,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { randomColor } from '../../utils/randomColor.js';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} bgColor={randomColor}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
