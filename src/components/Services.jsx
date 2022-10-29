import styled from 'styled-components';
import { FiTruck } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2> Our Services</h2>
        <div className="grid grid-three--column">
          <div className="service-1">
            <div>
              <FiTruck className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="service-2">
            <div className="services-column--2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>

            <div className="services-column--2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="service-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 2rem;
  margin: 2rem;

  h2 {
    text-align: center;
    margin-bottom: 5rem;
    text-transform: uppercase;
  }
  .grid {
    gap: 4rem;
  }

  .service-1,
  .service-2,
  .service-3 {
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .service-2 {
    gap: 2rem;
    background-color: transparent;
    box-shadow: none;

    .services-column--2 {
      background: ${({ theme }) => theme.colors.bg};
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0rem 2rem;
      width: 100%;
    }
  }

  h3 {
    margin-top: 1.4rem;
  }

  .icon {
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services;
