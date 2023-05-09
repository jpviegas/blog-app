import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Title: post 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus facere fugit, ipsam odio qui, consectetur quia, ducimus natus tempora vitae vero modi libero error incidunt est culpa excepturi sequi atque?",
    },
    {
      id: 2,
      title: "Title: post 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio facilis repudiandae cum iusto, amet, minus voluptatum reiciendis, ut praesentium dolor voluptatibus aspernatur qui blanditiis quo quisquam ullam dicta! Esse, voluptas.",
    },
    {
      id: 3,
      title: "Title: post 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi ex veniam tempore dolorum iusto dolore voluptas maxime pariatur, nemo praesentium, quam in reiciendis, nihil sint minima esse laboriosam hic!",
    },
    {
      id: 4,
      title: "Title: post 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi ex veniam tempore dolorum iusto dolore voluptas maxime pariatur, nemo praesentium, quam in reiciendis, nihil sint minima esse laboriosam hic!",
    },
  ];
  window.document.title = "Home | Blog App";

  return (
    <main className="h-full sm:px-px sm:text-base md:text-xl">
      <section className="flex h-full flex-col md:px-24">
        {posts.map((post) => (
          <article
            className="flex flex-row items-center gap-8 py-8 odd:flex-row-reverse"
            key={post.id}
          >
            <div className="bg-black p-24 md:p-48"></div>
            <div>
              <header className="p-8">
                <Link className="underline" to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </header>
              <p>{post.desc}</p>
              <button className="bg-[--color-lightGreen]">Read More...</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
