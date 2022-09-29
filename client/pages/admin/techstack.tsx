import React, { ReactElement } from "react";
import Layout from "../../components/admin/Layout";
import { NextPageWithLayout } from "../_app";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from "@mui/material";
import Box from "@mui/material/Box";
import AddTechStack from "../../components/admin/AddTechStack";
import { useGetAllTechStacksQuery } from "../../app/services/project/project.service";
import Head from "next/head";
import Image from "next/image";

const style = {
  display: "flex",
  flexDirection: "column",
  m: "auto",
  width: "95%",
};

const TechStack: NextPageWithLayout = () => {
  const { data } = useGetAllTechStacksQuery(undefined);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>ritesh</title>
        <meta name="description" content="My personal portfollio" />
      </Head>

      <div className="h-full p-4">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.techStacks.map((row) => {
                return (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">
                      <Image src={row.image.url} width={50} height={50} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
          <DialogTitle>New tech stack!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a new tech stack to your resume
            </DialogContentText>
          </DialogContent>
          <Box sx={style}>
            <AddTechStack />
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
    </>
  );
};

TechStack.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TechStack;
