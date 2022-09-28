import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Layout from "../../components/admin/Layout";
import type { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/admin/login");
    }
  }, [user]);

  return <section>Dashboard</section>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
