import {Link} from "react-router-dom"
import {Navbar, Li, FlexContainer } from '../../styled/styledComponents'

export default function Nav() {

  return (
      <Navbar justify="space-between" position="fixed">
        <Li>Your Game</Li>
        <FlexContainer>
         <Li><Link to="/">Home</Link></Li>
         <Li><Link to="#">SignIn</Link></Li>
         <Li><Link to="#">SignUp</Link></Li>
        </FlexContainer>
      </Navbar>
  );
}
