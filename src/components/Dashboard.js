import React from "react";
import Layout from "./Layout";
import MessageSlider from "./MessageSlider";

const Dashboard = () => {
  return (
    <Layout>
      <div className="my-6">
        <MessageSlider />
      </div>
    </Layout>
  );
};

export default Dashboard;
