import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="container grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button className=" .contact-short-btn">Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>WBK Chaudhary</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              recusandae expedita sit inventore voluptatem dolorem hic quisquam
              esse est pariatur ad dolore eveniet debitis natus, assumenda
              quidem. Omnis, asperiores rem!
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#" className="form">
              <input type="email" placeholder="Email" required />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icon" />
              </div>
              <div>
                <FaInstagram className="icon" />
              </div>
              <div>
                <FaYoutube className="icon" />
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact us</h3>
            <p>+92 3058995952</p>
            <p>waleedbinkhalidch@gmail.com</p>
          </div>
        </div>

        {/* Bottom section */}

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid drid-two-column">
            <p>
              @{new Date().getFullYear()} WBK Chaudhary All Rights Resvered.
            </p>
            <div>
              <p>Privacy Policy</p>
              <p>Trems and Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    .contact-short {
      max-width: 60vw;
      margin: auto;
      padding: 4rem 5rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: translateY(50%);

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-weight: bold;
          text-transform: capitalize;
        }
      }
    }

    footer {
      padding: 12rem 0rem 4rem 0rem;
      background-color: ${({ theme }) => theme.colors.footer_bg};

      .container {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */

        h3 {
          color: ${({ theme }) => theme.colors.hr};
          margin-bottom: 1rem;
          text-transform: capitalize;
        }
        p {
          color: ${({ theme }) => theme.colors.white};
        }
        .footer-about {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 45rem;

          p{
            line-height: 1;
          }
        }

        .footer-subscribe {
          display: flex;
          flex-direction: column;
          align-items: center;
          .form {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
          }
        }

        .footer-social--icons {
          display: flex;
          gap: 1rem;
          cursor: pointer;
          div {
            padding: 1rem;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.colors.white};
            .icon {
              color: ${({ theme }) => theme.colors.white};
              width: 2rem;
              height: 2rem;
              position: relative;
             
            }
          }
        }
      }

      .footer-bottom--section {
        padding-top: 1rem;
        hr {
          margin-bottom: 1rem;
          color: ${({ theme }) => theme.colors.hr};
          height: 0.1px;
        }
      }
    }
  `;

export default Footer;
