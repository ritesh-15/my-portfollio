import React from "react";
import {
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const AddProject = () => {
  const [age, setAge] = React.useState("");
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="">
      <form action="" className="flex gap-4 w-full ">
        <div className="flex-1">
          <div className="mb-6">
            <TextField
              fullWidth
              variant="filled"
              label="Title"
              id="fullWidth"
              required
            />
          </div>
          <div className="mb-6">
            <TextField
              id="filled-textarea"
              label="Description"
              multiline
              variant="filled"
              fullWidth
              required
              rows={10}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <TextField
              variant="filled"
              fullWidth
              label="Git Hub Link"
              id="fullWidth"
              required
            />
          </div>
          <div className="mb-6">
            <TextField
              variant="filled"
              fullWidth
              label="Demo Link"
              id="fullWidth"
              required
            />
          </div>
          <div className="mb-6">
            <FormControl variant="filled" required fullWidth>
              <InputLabel id="demo-multiple-name-label">
                Choose tech stack
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<FilledInput />}
                label="Choose tech stack"
                variant="filled"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mb-6">
            <FormControlLabel
              control={<Switch />}
              label="Is mobile application?"
            />
          </div>
          <div className="mb-6">
            <Button
              color="primary"
              className="bg-primary"
              size="large"
              fullWidth
              variant="contained"
            >
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
