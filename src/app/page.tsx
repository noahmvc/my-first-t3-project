import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/891b9a08-f9f1-4b86-8eec-9cfd645c54d5-ibcluw.png",
  "https://utfs.io/f/ddbfdf2c-b42b-4c37-ae12-c8e672907489-ibclvr.png",
  "https://utfs.io/f/c24094c8-f975-4a86-8eac-1226cc2565de-nm33wo.png",
  "https://utfs.io/f/c3358532-8871-488c-94b8-9e7d720853ae-ibcluw.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
