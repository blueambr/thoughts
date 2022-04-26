import data from '/src/lib/pages';
import Layout from '@/layout';
import Head from '@/sections/Head';
import Nav from '@/sections/Nav';

const Home = () => {
  const { page, head, nav } = data;

  return (
    <>
      <Layout data={page}>
        <Head data={head} />
        <Nav data={nav} />
      </Layout>
    </>
  );
};

export default Home;
