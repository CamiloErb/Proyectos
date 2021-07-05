import styled from "styled-components";
import { TextField, Button } from "@material-ui/core/";
import { Alert, AlertTitle } from '@material-ui/lab';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import data from "../../data/data";
import ClipLoader from "react-spinners/ClipLoader";
import Dialog from "../Dialog/Dialog"

const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({ username: "", password: "" });
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [isPending, setIsPending] = useState(false);

  const handleUsername = (text) => {
    setUser({ ...user, username: text });
  };

  const handlePassword = (text) => {
    setUser({ ...user, password: text });
  };

  const successsHandler = () => {
    setIsPending(false)
    setSuccess(true)
    setFailure(false)
  }

  const failureHandler = () => {
    setIsPending(false)
    setFailure(true)
    setSuccess(false)  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    if (
      data.some(
        (element) =>
          element.username === user.username &&
          element.password === user.password
      )
    ) {
      setTimeout(successsHandler, 2000);
    } else {
      setTimeout(failureHandler, 2000);
    }
  
  };
  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  const handleButtonClick = () => {
    setIsOpen(true);
  };

  console.log(isOpen)
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isOpen} onClose={handleCloseDialog}></Dialog>
      <PageWrapper>
        <LoginWrapper>
          <Title>Access your account</Title>
          <Form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => handleUsername(e.target.value)}
              InputLabelProps={style.labelStyle}
              label="Username"
              InputProps={style.textStyle}
            ></TextField>
            <TextField
              type="password"
              onChange={(e) => handlePassword(e.target.value)}
              InputLabelProps={style.labelStyle}
              InputProps={style.textStyle}
              label="Password"
            ></TextField>
            {success ? <Alert variant="filled" severity="success"><AlertTitle>Success</AlertTitle></Alert> : null}
            {failure ? <Alert variant="filled" severity="error">Username or password are incorrect.</Alert> : null}
            {!isPending ? (
              <Button
                type="submit"
                value="Submit"
                variant="outlined"
                color="primary"
              >
                Log in
              </Button>
            ) : (
              <Button
                type="submit"
                value="Submit"
                variant="outlined"
                color="primary"
                disabled={true}
              >
                Login in <ClipLoader color={"#337f83"} size={10} />
              </Button>
            )}
          </Form>
          <ResetButtonWrapper><ResetPasswordButton onClick={handleButtonClick} >Reset password</ResetPasswordButton></ResetButtonWrapper>
        </LoginWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Login;

const style = {
  labelStyle: { style: { color: "#fff" } },
  textStyle: { style: { color: "white" } },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#35baf6",
    },
    action: {
      disabledBackground: "#337f83",
      disabled: "#337f83",
    },
  },
});

const ResetButtonWrapper = styled.div`
    margin-top: 1em;
    width:70%;
    display: flex;
    justify-content: flex-end;
    
 `

const ResetPasswordButton = styled(Button)`
  && {
    margin:  0;
    padding: 0;
  }

  &&.MuiButton-text {
    color: white;
    font-size: 0.7em
  }
`


const Form = styled.form`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 50%;
`;

const Title = styled.h1`
  margin-top: 2.5em;
  font-weight: 100;
  letter-spacing: 0.1em;
`;

const PageWrapper = styled.div`
  height: 100vh;
  margin: 0;
  background-color: #1f222e;
  display: flex;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-top: 4em;
  border: 1px solid white;
  width: 40em;
  height: 40em;
  background: -webkit-linear-gradient(45deg, #35394a -70%, #1f222e 100%);
`;
