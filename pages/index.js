import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            <Link href={`/posts/${posts.id}`}>
              <a>{posts.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "posts" });

  return {
    props: {
      posts: data.contents,
    },
  };
};
