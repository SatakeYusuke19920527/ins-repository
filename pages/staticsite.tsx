import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import { AllPostsDataType } from '../types/AllPostDataType';

const StaticSite = ({ allPostsData }: { allPostsData: AllPostsDataType[] }) => {
  const renderPost = allPostsData.map(
    (
      {
        id,
        title,
        date,
        content,
      }: { id: string; title: string; date: string; content: string },
      index: number
    ) => (
      <div key={index}>
        <hr />
        <h1>{title}</h1>
        <p>{id}</p>
        <p>{date}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
        <hr />
      </div>
    )
  );
  return (
    <Layout>
      <h1>StaticSite</h1>
      {renderPost}
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default StaticSite;
