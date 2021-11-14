import Layout from '../components/layout';

const Line = () => {
  return (
    <Layout>
      <section className="w-1/3 h-2/3 shadow-md flex items-center justify-center flex-col">
        <h2>Line Messaging API</h2>
        <p className="mb-2 text-center">sample text</p>
        <button className="btn-blue">Let's Start!!</button>
      </section>
    </Layout>
  );
};

export default Line;
