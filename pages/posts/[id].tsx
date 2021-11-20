import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }: { postData: any }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.body}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  // paths [ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]
  console.log('🚀 ~ file: [id].tsx ~ line 18 ~ getStaticPaths ~ paths', paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
