// import Head from 'next/head';
// import Link from 'next/link';
// import matter from 'gray-matter';

// const BlogPost = ({ slug, frontMatter, content }) => {
//   return (
//     <div>
//       <Head>
//         <title>{frontMatter.title}</title>
//         <meta name="description" content={frontMatter.description} />
//       </Head>

//       <main>
//         <h1>{frontMatter.title}</h1>
//         <p>{frontMatter.date}</p>

//         <div dangerouslySetInnerHTML={{ __html: content }} />

//         <Link href="/blog">
//           <a>Back to blog</a>
//         </Link>
//       </main>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const files = fs.readdirSync('posts');
//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace('.md', ''),
//     },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
//   const { content, data } = matter(fileName);

//   return { props: { slug, frontMatter: data, content } };
// }

// export default BlogPost;
