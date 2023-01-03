import { Schema } from "express-validator"

const loginValidator: Schema = {
  email: {
    isEmail: {
      errorMessage: "Invalid email address!",
    },
    trim: true,
    in: ["body"],
    notEmpty: {
      errorMessage: "Email address cannot be empty!",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty!",
    },
    isString: {
      errorMessage: "Password must be a string!",
    },
    trim: true,
    in: ["body"],
    isLength: {
      errorMessage: "Password should be at least 7 chars long",
      options: { min: 7 },
    },
  },
}

const addUserValidator: Schema = {
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty!",
    },
    isString: {
      errorMessage: "Password must be a string!",
    },
    trim: true,
    in: ["body"],
    isLength: {
      errorMessage: "Password should be at least 7 chars long",
      options: { min: 7 },
    },
  },
  email: {
    isEmail: {
      errorMessage: "Invalid email address!",
    },
    trim: true,
    in: ["body"],
    notEmpty: {
      errorMessage: "Email address cannot be empty!",
    },
  },
  name: {
    isString: {
      errorMessage: "Name must be a string!",
    },
    in: ["body"],
    notEmpty: {
      errorMessage: "Name cannot be empty!",
    },
    trim: true,
  },
  about: {
    isString: {
      errorMessage: "About must be a string!",
    },
    in: ["body"],
    notEmpty: {
      errorMessage: "About cannot be empty!",
    },
    trim: true,
  },
}

const updateUserValidator: Schema = {
  email: {
    in: ["body"],
  },
  heading: {
    in: ["body"],
  },
  subHeading: {
    in: ["body"],
  },
  about: {
    in: ["body"],
  },
  contactHeading: {
    in: ["body"],
  },
  contactSubHeading: {
    in: ["body"],
  },
}

export { loginValidator, addUserValidator, updateUserValidator }
