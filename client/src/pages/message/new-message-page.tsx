import React, { useState } from "react";
import { useFormik } from "formik";
import { NavLink, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { Contact } from "../../models/contact";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./new-message-page.css";
import { sendRequest } from "../../services/request";
import { useDispatch } from "react-redux";
import { messageActions } from "../../store/message";

const NewMessage = () => {
  const dispatch = useDispatch();
  const [isSuccessSnackBarOpen, setIsSuccessSnackBarOpen] = useState(false);
  const [isErrorSnackBarOpen, setIsErrorSnackBarOpen] = useState(false);
  const contactData = useLocation().state as Contact;

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await sendRequest({
          method: "POST",
          body: {
            to: contactData.phoneNumber,
            message: values.message,
          },
          endpoint: "/send-message",
        });
        setIsSuccessSnackBarOpen(true);
        dispatch(
          messageActions.addMessage({
            to: contactData.name,
            time: new Date(),
            otp: response.otp,
          })
        );
      } catch (error: any) {
        console.log(error, "error occurred while sending a message");

        setIsErrorSnackBarOpen(true);
      }
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .required("This field is required")
        .min(10, "Message should be at least 10 characters")
        .max(250, "Message can be max 250 characters"),
    }),
  });

  return (
    <div className="new-message-page">
      <nav className="new-message-navigations">
        <NavLink className="generic-button" to={`/contacts`}>
          Back to Contacts
        </NavLink>
        <NavLink className="generic-button" to={`/`}>
          Back to Home Page
        </NavLink>
      </nav>

      <div className="new-message-container">
        <h1 className="new-message-heading">
          {`Send a new message to ${contactData.name}`}
        </h1>
        <form className="new-message-form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            label="Message"
            {...formik.getFieldProps("message")}
            placeholder="Enter your message"
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button
            type="submit"
            sx={{ padding: ".5rem 1rem", margin: "1rem" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </div>

      <Snackbar
        open={isSuccessSnackBarOpen}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ width: "20vw" }}
        onClose={() => {
          setIsSuccessSnackBarOpen(false);
        }}
      >
        <Alert
          variant="filled"
          severity="success"
          sx={{ width: "100%", textAlign: "center" }}
        >
          Message Sent Successfully
        </Alert>
      </Snackbar>

      <Snackbar
        open={isErrorSnackBarOpen}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ width: "20vw" }}
        onClose={() => {
          setIsErrorSnackBarOpen(false);
        }}
      >
        <Alert
          variant="filled"
          severity="error"
          sx={{ width: "100%", textAlign: "center" }}
        >
          Some Error Occurred
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewMessage;
