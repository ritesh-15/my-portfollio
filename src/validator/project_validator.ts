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
    exists: {
      errorMessage: "Is mobile application is required!",
    },
    isBoolean: {
      errorMessage: "Is mobile application must be a boolean value!",
    },
  },
  techStack: {
    in: ["body"],
    exists: {
      errorMessage: "Tech stack is required!",
    },
    isArray: {
      options: {
        min: 1,
      },
      errorMessage: "At least have one tech stack",
    },
  },
};

const removeProjectValidator: Schema = {
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Project id is required to remove the project!",
    },
    isUUID: {
      errorMessage: "Project id must be a valid!",
    },
  },
};

const updateProjectValidator: Schema = {
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Project id is required to remove the project!",
    },
    isUUID: {
      errorMessage: "Project id must be a valid!",
    },
  },
  title: {
    in: ["body"],
    not: true,
    notEmpty: {
      errorMessage: "Title cannot be empty!",
    },
    isString: {
      errorMessage: "Title must be a string!",
    },
  },
  description: {
    in: ["body"],
    not: true,
    notEmpty: {
      errorMessage: "Description cannot be empty!",
    },
    isString: {
      errorMessage: "Description must be a string!",
    },
  },
  gitHubRepo: {
    in: ["body"],
    not: true,
    notEmpty: {
      errorMessage: "Git hub repository link cannot be empty!",
    },
    isString: {
      errorMessage: "Git hub repository link must be a string!",
    },
  },
  demoLink: {
    in: ["body"],
    not: true,
    notEmpty: {
      errorMessage: "Demo link cannot be empty!",
    },
    isString: {
      errorMessage: "Demo link must be a string!",
    },
  },
  isMobileApplication: {
    in: ["body"],
    not: true,
    isBoolean: {
      errorMessage: "Is mobile application must be a boolean value!",
    },
  },
};

export {
  addTechStackValidator,
  updateTechStackValidator,
  deleteTechStackValidator,
  addProjectValidator,
  removeProjectValidator,
  updateProjectValidator,
};
