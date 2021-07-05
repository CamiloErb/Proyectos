import styled from "styled-components"
import Logo from "../logo/logo";
import EURUSDrate from "../EURUDSrate/EURUSDrate";

const NavBar = () => {
    return <Section><Title><Logo/>ORTEX</Title> <EURUSDrate></EURUSDrate></Section>
}

export default NavBar;

const Section = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 5.5rem;

`

const Title = styled.h1`
    width: 50%;
    padding-top: 0.3em;
    font-weight: 200;
    letter-spacing: 10px;
    display: flex;
`   

