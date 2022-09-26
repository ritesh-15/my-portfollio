import { Schema } from "express-validator";

const contactValidator: Schema = {
  name: {
    in: ["body"],
    exists: {
      errorMessage: "Name is required!",
    },
    isString: {
      errorMessage: "Name must be a string!",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Name cannot be empty!",
    },
  },
  email: {
    in: ["body"],
    exists: {
      errorMessage: "Email address is required!",
    },
    isEmail: {
      errorMessage: "Must be a valid email!",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Email address cannot be empty!",
    },
  },
  message: {
    in: ["body"],
    exists: {
      errorMessage: "Message is required!",
    },
    isString: {
      errorMessage: "Message must be a string!",
    },
    trim: true,
    notEmpty: {
      errorMessage: "Message cannot be empty!",
    },
  },
};

export { contactValidator };
