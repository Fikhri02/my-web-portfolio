import type React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="flex justify-between w-screen items-center">
        <div className="px-4 mx-25">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4">
              Hello! I'm a passionate web developer with experience in React,
              Node.js, and modern web technologies. I love creating responsive
              and user-friendly web applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good book.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 mx-10 py-25 px-25"> Box Here</div>
      </div>
    </section>
  );
};

export default About;

/*

Feature	<div>	<section>
Semantic Meaning	No semantic meaning; just a container.	Represents a thematic section of content.
Use Case	Used for general layout or grouping.	Used for grouping related content with a heading.
Accessibility	No specific benefit for accessibility.	Improves accessibility by marking logical sections.
Children Elements	No requirements for child elements.	Often contains a heading (e.g., <h1>, <h2>) to describe the section.
SEO	No impact on SEO.	Can help with SEO, as search engines understand the document structure better.

classname container => width100%
*/
