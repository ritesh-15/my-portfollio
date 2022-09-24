import { Schema } from "express-validator";

const addTechStackValidator: Schema = {
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
};

const updateTechStackValidator: Schema = {
  name: {
    in: ["body"],
    trim: true,
  },
  id: {
    in: ["params"],
    isUUID: {
      errorMessage: "Must be a valid id!",
    },
  },
};

const deleteTechStackValidator: Schema = {
  id: {
    in: ["params"],
    isUUID: {
      errorMessage: "Must be a valid id!",
    },
  },
};

const addProjectValidator: Schema = {
  title: {
    in: ["body"],
    exists: {
      errorMessage: "Title is required!",
    },
    notEmpty: {
      errorMessage: "Title cannot be empty!",
    },
  },
  description: {
    in: ["body"],
    exists: {
      errorMessage: "Description is required!",
    },
    notEmpty: {
      errorMessage: "Description cannot be empty!",
    },
  },
  gitHubRepo: {
    in: ["body"],
    exists: {
      errorMessage: "Git hub link is required!",
    },
    notEmpty: {
      errorMessage: "Git hub repository link cannot be empty!",
    },
  },
  demoLink: {
    in: ["body"],
    exists: {
      errorMessage: "Demo link is required!",
    },
    notEmpty: {
      errorMessage: "Demo link cannot be empty!",
    },
  },
  isMobileApplication: {
    in: ["body"],
  },
  techStack: {
    in: ["body"],
    exists: {
      errorMessage: "Tech stack is required!",
    },
    isArray: {
      options: {
        min: 0,
      },
      errorMessage: "At least have one tech stack",
    },
  },
};

export {
  addTechStackValidator,
  updateTechStackValidator,
  deleteTechStackValidator,
  addProjectValidator,
};
