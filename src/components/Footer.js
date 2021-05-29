import styled from "styled-components";

const Footer = (props) => {
  return (
    <MyFooter>
      <Container>
        <Grid className="footer__left">
          <Link>
            <a href="#">About Disney+ Hotstar</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Feedback</a>
          </Link>
          <Copyright>
            <p>
              © 2021 Disney+ Clone. Made with &#x2764; by Maqbul Arif Latama.
            </p>
          </Copyright>
        </Grid>
        <Grid className="footer__right">
          <Social>
            <p>Connect with us</p>
            <div className="social__item">
              <a href="#" className="fb">
                &nbsp;
              </a>
              <a href="#" className="tw">
                &nbsp;
              </a>
            </div>
          </Social>
          <Store>
            <p>Disney+ Hotstar App</p>
            <div className="store__item">
              <a href="#" className="playstore">
                &nbsp;
              </a>
              <a href="#" className="applestore">
                &nbsp;
              </a>
            </div>
          </Store>
        </Grid>
      </Container>
    </MyFooter>
  );
};

const MyFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: #0c111b;
  overflow: hidden;
`;

const Container = styled.div`
  @media screen and (min-width: 870px) {
    display: grid;
    grid-template-columns: 2fr 2fr auto;
  }
  padding: 0 calc(3.5vw + 5px);
  padding-top: 34px;
  padding-bottom: 24px;
`;

const Grid = styled.div`
  &.footer__left {
    grid-row: 1 / span 4;
  }
  &.footer__right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Link = styled.div`
  a {
    font-size: 14px;
    display: inline-block;
    padding: 0 20px 0 0;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.8);
    transition: 0.2s ease-in-out;
    &:hover {
      color: #1f80e0;
    }
  }
`;
const Copyright = styled.div`
  p {
    padding-top: 11px;
    padding-right: 15%;
    font-size: 12px;
    line-height: 1.8;
    margin: 0;
    margin-bottom: 20px;
    color: #dadada;
  }
`;
const Social = styled.div`
  @media screen and (min-width: 870px) {
    justify-self: end;
  }
  p {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    padding-bottom: 7px;
  }
  .social__item {
    width: 100%;
  }
  a {
    height: 40px;
    width: 40px;
    display: inline-block;
    margin-right: 5px;
    background: url("00dd72dcb62378da1988866159d26cca.svg");
    outline: 0;
    color: #1f80e0;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &.fb {
      background-position: 0 0;
      &:hover {
        background-position: 0 -45px;
      }
    }
    &.tw {
      background-position: -45px 0;
      &:hover {
        background-position: -45px -45px;
      }
    }
  }
`;
const Store = styled.div`
  @media screen and (min-width: 870px) {
    padding: 0 0 24px 60px;
    justify-self: end;
  }
  p {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    padding-bottom: 7px;
  }
  a {
    height: 40px;
    width: 135px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    background: url("67764ffe0b6b18e06d60049a00c86335.svg");
    outline: 0;
    color: #1f80e0;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &.playstore {
      background-position: 0 0;
      &:hover {
        background-position: 0 -50px;
      }
    }
    &.applestore {
      background-position: -140px 0;
      &:hover {
        background-position: -140px -50px;
      }
    }
  }
`;
export default Footer;
