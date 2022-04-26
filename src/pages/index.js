import { useState } from 'react';
import data from '/src/lib/pages';
import Layout from '@/layout';
import Head from '@/sections/Head';
import Thoughts from '@/sections/Thoughts';
import Nav from '@/sections/Nav';

const Home = () => {
  const { page, head, modal, nav } = data;

  const [thoughts, setThoughts] = useState([]);
  const [openThought, setOpenThought] = useState(null);

  return (
    <>
      <Layout data={page}>
        <Head data={head} openThought={openThought} setOpenThought={setOpenThought} />
        <Thoughts data={thoughts} openThought={openThought} setOpenThought={setOpenThought} />
        <Nav data={nav} modal={modal} thoughts={thoughts} setThoughts={setThoughts} />
      </Layout>
    </>
  );
};

export default Home;
