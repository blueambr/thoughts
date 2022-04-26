import data from '/src/lib/pages';
import Layout from '@/layout';
import Nav from '@/sections/Nav';

const Home = () => {
  const { page, nav } = data;

  return (
    <>
      <Layout data={page}>
        <Nav data={nav} />
      </Layout>
    </>
  );
};

export default Home;
