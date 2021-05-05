import styled from "styled-components";

const Home = (props) => {
  return (
    <MyTitle>
      <h2>Home Page</h2>
    </MyTitle>
  );
};

const MyTitle = styled.section`
  position: relative;
  top: 72px;
  h2 {
    color: white;
  }
`;

export default Home;
