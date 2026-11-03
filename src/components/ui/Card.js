import styled from 'styled-components';
import { pixelBox } from '../../styles/pixel';

const Card = styled.div`
  ${pixelBox(4)}
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: ${({ theme }) => theme.space(5)};
`;

Card.displayName = 'Card';
export default Card;
