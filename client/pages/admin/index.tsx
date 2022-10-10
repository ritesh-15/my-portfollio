import React, { ReactElement, useEffect } from "react";
import Layout from "../../components/admin/Layout";
import { useAuth } from "../../hooks";
import type { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
  useAuth({ isAuthPage: false, route: "/admin/login" });
  return <section>Dashboard</section>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
