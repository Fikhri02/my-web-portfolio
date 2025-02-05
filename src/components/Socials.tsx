import { FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <section className="bg-gray-900 py-3 flex flex-col items-center">
      <div className="text-white flex flex-col gap-10 items-center">
        <div className="text-white">Socials</div>
        <div className="flex gap-10">
          <FaLinkedin style={{ color: "blue" }} size={75} />
        </div>
      </div>
    </section>
  );
}

export default Socials;
