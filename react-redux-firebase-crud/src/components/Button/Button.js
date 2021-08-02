import { Button as ButtonUI} from "@material-ui/core";
import styled from "styled-components";

const Button = ({ onClick, children}) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClick} variant="contained" color="primary">
        {children}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;

const StyledButton = styled(ButtonUI)`
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
