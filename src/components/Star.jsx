import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span>
        {stars >= index + 1 ? (
          <BsStarFill className="icon" />
        ) : stars >= number ? (
          <BsStarHalf className="icon" />
        ) : (
          <BsStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="iconStyle">
        {ratingStar}
        <p>{reviews} Customer Reviews</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iconStyle {
    display: flex;
    gap: 1rem;
    font-size: 2.5rem;
    align-items: center;
  }

  .icon {
    color: #fdb71e;
  }
`;
export default Star;
