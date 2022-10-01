import React, { ReactElement } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { Dialog, Fab, DialogTitle } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import { NextPageWithLayout } from "../../_app";
import { useGetAllProjectsQuery } from "../../../app/services/project/project.service";
import AddProject from "../../../components/admin/AddProject";
import Layout from "../../../components/admin/Layout";

const style = {
  display: "flex",
  flexDirection: "column",
  m: "auto",
  width: "95%",
};

const Projects: NextPageWithLayout = () => {
  const { data } = useGetAllProjectsQuery(undefined);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-full p-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Git Hub Link</TableCell>
              <TableCell align="right">Demo Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.projects.map((project) => {
              return (
                <TableRow
                  key={project.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link href={`/admin/projects/${project.id}`}>
                      {project.id}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{project.title}</TableCell>
                  <TableCell align="right">{project.gitHubRepo}</TableCell>
                  <TableCell align="right">{project.demoLink}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Add a new project!</DialogTitle>

        <Box sx={style}>
          <AddProject />
        </Box>
      </Dialog>

      <Fab
        className="absolute right-4 bottom-4 bg-primary"
        color="primary"
        size="large"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Projects;