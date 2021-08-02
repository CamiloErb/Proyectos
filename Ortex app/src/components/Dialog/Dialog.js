import {
  Dialog as DialogUI,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";

const Dialog = ({ open, onClose }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("error");
  };
  return (
    <StyledDialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>
        <Title>Change your password</Title>
      </DialogTitle>
      <DialogContent>
        <Form onSubmit={handleOnSubmit}>
          <TextField
            type="text"
            InputLabelProps={style.labelStyle}
            InputProps={style.textStyle}
            label="Username"
          ></TextField>
          <TextField
            type="password"
            InputLabelProps={style.labelStyle}
            InputProps={style.textStyle}
            label="Old password"
          ></TextField>
          <TextField
            type="password"
            InputLabelProps={style.labelStyle}
            InputProps={style.textStyle}
            label="New password"
          ></TextField>
          <Button
                type="submit"
                value="Submit"
                variant="outlined"
                color="primary"
            >Submit changes</Button>
        </Form>
      </DialogContent>
    </StyledDialog>
  );
};

export default Dialog;

const style = {
  labelStyle: { style: { color: "#fff" } },
  textStyle: { style: { color: "white" } },
};

const Form = styled.form`
  height: 25em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const StyledDialog = styled(DialogUI)`
  .MuiDialog-paper {
    background: -webkit-linear-gradient(45deg, #35394a -70%, #1f222e 100%);
    color: white;
  }
`;

const Title = styled.h2`
  font-weight: 300;
  letter-spacing: 0.2em;
  display: flex;
  justify-content: center;
  margin-top: 0;
`;

