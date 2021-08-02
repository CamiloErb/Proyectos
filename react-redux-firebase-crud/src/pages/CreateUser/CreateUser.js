import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import Dialog from "../../components/Dialog/Dialog";
import createUser from "../../redux/actions/createUser";

const CreateUser = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const [repeatPass, setRepeatPass] = useState("");

  const onChangePassword = (text) => {
    setUser({ ...user, password: text });
  };
  const onChangeUsername = (text) => {
    setUser({ ...user, username: text });
  };
  const onChangeRepeatPass = (text) => {
    setRepeatPass(text);
  };
  const onChangeSelection = () => {
    if (user.username === "" || user.password === "" || repeatPass === "") {
      alert("Please fill with your information");
    } else if (repeatPass !== user.password) {
      alert("Passwords don't match");
    } else {
      props.createUser(user);
      setIsOpen(false)
    }
  };
  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Create User</Button>
      <Dialog
        open={isOpen}
        title="CREATE USER"
        onClose={handleCloseDialog}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onChangeSelection={onChangeSelection}
        onChangeRepeatPass={onChangeRepeatPass}
      ></Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
};

const mapDispatchToProps = {
  createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
