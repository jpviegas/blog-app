import { Link } from "react-router-dom";

export default function Menu() {
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
      title: "Title: post 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi ex veniam tempore dolorum iusto dolore voluptas maxime pariatur, nemo praesentium, quam in reiciendis, nihil sint minima esse laboriosam hic!",
    },
  ];

  return (
    <aside className="flex-[2]  bg-slate-600">
      <h1 className="text-center">Other posts you may like</h1>
      {posts.map((post) => (
        <article className="flex flex-col items-center py-2" key={post.id}>
          <div className="w-full bg-black p-16"></div>
          <div>
            <header className="py-8">
              <Link className="underline" to={`/post/${post.id}`}>
                {post.title}
              </Link>
            </header>
            {/* <p>{post.desc}</p> */}
            <button className="rounded-md bg-[--color-lightGreen] p-1">
              Read More...
            </button>
          </div>
        </article>
      ))}
    </aside>
  );
}
