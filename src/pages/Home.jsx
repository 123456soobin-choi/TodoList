import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <TodoList />
    </Layout>
  );
};

export default Home;
