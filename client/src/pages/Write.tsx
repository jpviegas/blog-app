import { useState } from "react";
import { FiSave, FiEdit } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  window.document.title = "Write | Blog App";
  const [value, setValue] = useState("");
  return (
    <main className="flex">
      <section className="flex-[5]">
        <article>
          <input type="text" name="" id="" />
          <ReactQuill
            className="h-full"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </article>
      </section>
      <section>
        <article className="flex flex-[2] flex-col">
          <h1>Publish</h1>
          <span>Status:</span>
          <span>Visibility</span>
          <label>
            Upload Image
            <input className="" type="file" name="" id="" />
          </label>
          <button className="w-fit underline">
            Save as a draft <FiSave />
          </button>
          <button className="w-fit underline">
            Update <FiEdit />
          </button>
        </article>
        <article>
          <h1>Category</h1>
          <div className="flex justify-between">
            <input type="radio" name="art" id="art" value="art" checked />
            <label htmlFor="art">Art</label>
            <input type="radio" name="science" id="science" value="science" />
            <label htmlFor="science">Science</label>
            <input
              type="radio"
              name="technology"
              id="technology"
              value="technology"
            />
            <label htmlFor="technology">Technology</label>
            <input type="radio" name="cinema" id="cinema" value="cinema" />
            <label htmlFor="cinema">Cinema</label>
            <input type="radio" name="design" id="design" value="design" />
            <label htmlFor="design">Design</label>
            <input type="radio" name="food" id="food" value="food" />
            <label htmlFor="food">Food</label>
          </div>
        </article>
      </section>
    </main>
  );
}
