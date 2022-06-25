import PropTypes from 'prop-types';
import {
  TableContainer,
  TableTitle,
  TableLine,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <TableTitle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableTitle>

      <tbody>
        {items.map(item => (
          <TableLine key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableLine>
        ))}
      </tbody>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
