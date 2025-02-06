import gsap from "gsap";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

function Socials() {
  useEffect(() => {
    gsap.from(".circle", {
      x: 40,
      fill: "blue",
    });

    gsap.fromTo(
      ".circle2",
      {
        c: -40,
        fill: "blue",
      },
      { x: 40, fill: "green" }
    );
  }, []);
  return (
    <section className="bg-gray-900 py-3 flex flex-col items-center">
      <div className="text-white flex flex-col gap-10 items-center w-full">
        <div className="text-white">Socials</div>
        <div className="flex gap-10">
          <FaLinkedin style={{ color: "blue" }} size={75} />
        </div>
        {/* <pre>
          <code className="code-from language-js">
            {`gsap.from(".circle", {
                x: -40,
                fill: "blue"
            });`}
          </code>
        </pre> */}
        <div className="w-full">
          <svg height="100" className="bg-gray-500 w-full">
            <circle className="circle" cx="50" cy="50" r="20" fill="red" />
            <circle className="circle2" cx="50" cy="50" r="20" fill="red" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Socials;

/*
1. pre
The <pre> tag in HTML stands for "preformatted text". It is used to display text exactly as it is written in the source code, preserving whitespaces, line breaks, and indentation.

2. code
<code> is a standard HTML tag used to represent inline or block-level code snippets.


*/
