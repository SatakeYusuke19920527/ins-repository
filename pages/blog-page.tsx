import Layout from '../components/layout';
import { getPosts, getPostsID } from '../lib/getPost';
import Link from 'next/link';
const BlogPage = ({ posts }: { posts: any }) => {
  const renderPost = posts.map((post: any, index: number) => (
    <section key={index}>
      <hr />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/blogpost/${post.id}`}>go details</Link>
      <hr />
    </section>
  ));
  return <Layout>{renderPost}</Layout>;
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
