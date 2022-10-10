import Head from "next/head";
import React, { ReactElement } from "react";
import Layout from "../../components/admin/Layout";
import { useAuth } from "../../hooks";
import { NextPageWithLayout } from "../_app";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllContactsQuery } from "../../app/services/contact/contact.service";

const Contact: NextPageWithLayout = () => {
  useAuth({ isAuthPage: false, route: "/admin/login" });

  const { data } = useGetAllContactsQuery(undefined);

  return (
    <>
      <Head>
        <title>ritesh</title>
        <meta name="description" content="My personal portfollio" />
      </Head>

      <div className="p-4 h-full">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.contacts.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="cursor-pointer"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.message}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Contact;
