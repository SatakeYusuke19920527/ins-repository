import Layout from '../../components/layout';
import Link from 'next/link';
import { getPostsID, getPostsData } from '../../lib/getPost';

const BlogPost = ({ postData }: { postData: any }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.body}
      <br />
      <Link href="/blog-page">
        <a>戻る</a>
      </Link>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getPostsID();
  console.log('🚀 ~ file: [id].tsx ~ line 23 ~ getStaticPaths ~ paths', paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = getPostsData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default BlogPost;
