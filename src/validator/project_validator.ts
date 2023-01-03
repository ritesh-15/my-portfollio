import { Schema } from "express-validator"

const addTechStackValidator: Schema = {
  name: {
    exists: {
      errorMessage: "Tech stack name is required!",
    },
    isString: {
      errorMessage: "Name must be a string!",
    },
    in: ["body"],
    notEmpty: {
      errorMessage: "Tech stack name cannot be empty!",
    },
    trim: true,
  },
}

const updateTechStackValidator: Schema = {
  name: {
    in: ["body"],
    trim: true,
  },
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Tech stack id is required!",
    },
  },
}

const getTechStackByIdValidator: Schema = {
  id: {
    in: ["body"],
    exists: {
      errorMessage: "Tech stack id is required!",
    },
  },
}

const deleteTechStackValidator: Schema = {
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Tech stack id is required!",
    },
  },
}

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
}

const removeProjectValidator: Schema = {
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Project id is required to remove the project!",
    },
  },
}

const updateProjectValidator: Schema = {
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Project id is required to remove the project!",
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
  tags: {
    in: ["body"],
    isArray: {
      errorMessage: "Please provide array of tags",
    },
  },
}

const getSingleProjectSchema: Schema = {
  id: {
    in: ["params"],
    exists: {
      errorMessage: "Project id is required!",
    },
  },
}

export {
  addTechStackValidator,
  updateTechStackValidator,
  deleteTechStackValidator,
  addProjectValidator,
  removeProjectValidator,
  updateProjectValidator,
  getSingleProjectSchema,
  getTechStackByIdValidator,
}
