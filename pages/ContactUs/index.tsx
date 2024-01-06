import React from "react";
import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout";
import Head from "next/head";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact || TWC</title>
      </Head>
      <div className="bg-green-500 rounded-lg shadow-lg shadow-gray-400 px-[90px] py-[40px] ">
        <ContactUs />
      </div>
    </Layout>
  );
};

export default Contact;
