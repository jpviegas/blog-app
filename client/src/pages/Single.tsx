import { Link, useParams } from "react-router-dom";
import { FiEdit, FiDelete } from "react-icons/fi";
import Menu from "../components/Menu";

export default function Single() {
  const param = useParams();
  window.document.title = `${param.id} | Blog App`;

  return (
    <main className="flex flex-auto">
      <section className="flex-[5] bg-gray-500">
        <header>
          <div className="h-60 w-auto bg-red-400">img</div>
        </header>
        <article className="flex flex-col gap-8">
          <div className="flex items-center justify-evenly">
            <figure>
              <img
                className="h-auto w-auto bg-blue-400"
                src="#"
                alt="user photo"
              />
            </figure>
            <div>
              <h1>username</h1>
              <p>post date</p>
            </div>
            <Link
              to={"/write?edit=2"}
              className="w-fit text-4xl text-green-500"
            >
              <FiEdit />
            </Link>

            <Link to={"/:id/"} className="w-fit text-4xl text-red-400">
              <FiDelete />
            </Link>
          </div>
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
              quos.
            </h1>
            <p className="text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit
              sequi architecto non quos perferendis blanditiis itaque odio
              placeat ipsa, porro nemo dolorem reiciendis eaque maxime dolor
              repellendus numquam aperiam, dicta sunt. Exercitationem asperiores
              tenetur impedit distinctio aut? Voluptas nihil eius voluptatibus
              possimus iste maiores neque, deserunt quisquam fugiat voluptatem
              fuga soluta qui cum obcaecati voluptate nisi minus nulla ipsam!
              Repellendus laborum commodi cupiditate dolorum incidunt. Facilis
              asperiores, doloribus voluptatibus voluptate sapiente cum quo odio
              ex, vel quae modi culpa, cumque in. Dolor fugit veritatis optio
              sit sunt dolorum sint dicta odit incidunt veniam? Neque aliquid,
              vero impedit, asperiores voluptatibus nostrum quia labore aperiam
              illo rerum accusantium quos voluptates laborum eaque. Laboriosam
              ipsa distinctio obcaecati, numquam quae iure omnis consectetur
              minus corrupti cupiditate quos quasi natus. Numquam dolorem
              perspiciatis quaerat cupiditate dolorum voluptas magnam deserunt
              obcaecati impedit eligendi a nisi vero, hic pariatur recusandae
              illo nesciunt qui accusamus iste aspernatur doloribus natus
              excepturi. Repellendus saepe voluptates, sequi repellat nulla
              consectetur sit. Eaque cum provident voluptas, cupiditate vero
              corrupti dicta, aliquid alias inventore libero dolorem possimus
              consequatur nisi. Corporis id enim iure quidem, doloremque,
              voluptatum modi possimus sit facilis et quia fugiat minima
              aspernatur, sapiente eos a voluptatibus ipsa ad nulla.
            </p>
          </div>
        </article>
      </section>
      <Menu />
    </main>
  );
}
