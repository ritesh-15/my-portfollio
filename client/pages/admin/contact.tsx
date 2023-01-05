import Head from "next/head"
import React, { ReactElement } from "react"
import Layout from "../../components/admin/Layout"
import { useAuth } from "../../hooks"
import { NextPageWithLayout } from "../_app"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import { styled } from "@mui/material/styles"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useGetAllContactsQuery } from "../../app/services/contact/contact.service"
import { AiOutlineDelete } from "react-icons/ai"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const Contact: NextPageWithLayout = () => {
  useAuth({ isAuthPage: false, route: "/admin/login" })
  const { data } = useGetAllContactsQuery(undefined)

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
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Message</StyledTableCell>
                <StyledTableCell align="left">Created at</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.contacts.map((contact) => (
                <StyledTableRow key={contact.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    className="cursor-pointer"
                  >
                    {contact.name}
                  </TableCell>
                  <TableCell align="left">{contact.email}</TableCell>
                  <TableCell align="left">{contact.message}</TableCell>
                  <TableCell align="left">
                    {new Intl.DateTimeFormat("en-in", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(contact?.createdAt))}
                  </TableCell>
                  <TableCell align="left">
                    <div className="flex items-center gap-2 hover:text-red-400 transition-all cursor-pointer">
                      <AiOutlineDelete className="text-xl cursor-pointer " />
                      <span className="font-opensans">Remove</span>
                    </div>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
