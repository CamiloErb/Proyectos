import {
  Dialog as DialogUI,
  DialogTitle,
  DialogContent,
  Input as InputUI,
} from "@material-ui/core";
import Button from "../Button/Button";
import styled from "styled-components";

const Dialog = ({
  open,
  onClose,
  title,
  onChangeUsername,
  onChangePassword,
  onChangeSelection,
  children,
  onChangeRepeatPass
}) => {
  return (
    <DialogUI fullWidth open={open} onClose={onClose}>
      <DialogTitle>
        <Title>{title}</Title>
      </DialogTitle>
      <DialogContent>
        <Input
          onChange={(e) => onChangeUsername(e.target.value)}
          placeholder="User name"
        ></Input>
        <Input
          onChange={(e) => onChangePassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></Input>
        <Input onChange={(e)=> onChangeRepeatPass(e.target.value)} type="password" placeholder="Repeat password"></Input>
        <Button onClick={onChangeSelection}>Create</Button>
        {children}
      </DialogContent>
    </DialogUI>
  );
};

export default Dialog;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 0;
`;

const Input = styled(InputUI)`
  width: 100%;
  margin-bottom: 2rem;
`;
