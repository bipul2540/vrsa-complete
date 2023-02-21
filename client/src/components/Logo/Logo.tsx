import logo from "./../../assets/png/letter-v (1).png";

import styled from "styled-components";

const Image: any = styled.img`
  width: 50px;
  height: 50px;
`;

const Logo = () => {
  return (
    <>
      <Image src={logo} alt='' />
    </>
  );
};

export default Logo;
