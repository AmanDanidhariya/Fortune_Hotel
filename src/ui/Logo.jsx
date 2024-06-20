import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Para = styled.p`
  height: 9.6rem;
  width: auto;
  font-weight: 800;
  font-size: x-large;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Img src="/logo-light.png" alt="Logo" /> */}
      <Para>Fortune Hotel</Para>
    </StyledLogo>
  );
}

export default Logo;
