import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div className="slide-up">
      <h1 className="text-4xl font-semibold mb-4 tracking-tighter">Blog</h1>
      <p className="mb-8">
        Thoughts on product management, company culture, leadership, growth,
        strategy and everything in between.
      </p>
      <ul className="space-y-2">
        {posts.map((post) => {
          const { id, date, title } = post;
          return (
            <li className="" key={id}>
              <Link
                href={`/blog/${id}`}
                className="font-medium underline underline-offset-2 decoration-green-800 hover:decoration-2 hover:text-green-800"
              >
                {title}
              </Link>
              , {date}
            </li>
          );
        })}
      </ul>
    </div>
  );
}