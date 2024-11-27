import Image from "next/image";
import Page from "../../components/Page";
import mypropic from "../../public/images/safayet.png";
const AboutPage = () => {
  return (
    <Page
      currentPage="Projects"
      desc="I'm a passionate web developer and designer coding beautiful websites and apps."
    >
      <div className="container grid grid-cols-1  md:grid-cols-2  mx-auto p-8  text-left">
        <div className="div order-2 md:order-1 mt-[50px] md:mt-[0px]">
          <h1 className="text-4xl font-bold  mb-4 text-fun-pink">About Me</h1>
          <p className=" text-white mb-8">
            Passionate Web Developer specializing in React.js with over 2 years
            of experience designing interactive web pages and enhancing user
            engagement through advanced front-end technologies.
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
            <p>
              Hello! I&apos;m <strong>Safayet Hossain</strong>, a dedicated Web
              Developer with expertise in React.js, Node.js, and modern web
              technologies. I have a strong foundation in web design and
              development, with a focus on building responsive and interactive
              applications.
            </p>
          </section>
        </div>

        <div className="order-1 md:order-2 w-[300px] h-[300px] mx-auto  overflow-hidden rounded-full shadow-custom-blue">
          <Image src={mypropic} alt={"safayet.png"} />
        </div>

        {/* Banner Section */}
      </div>
      <div className="container text-left max-w-3xl mx-auto">
        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Front-End Development:</strong> React.js, Redux, React
              Router, Context API, Hooks, Tailwind CSS, Material UI
            </li>
            <li>
              <strong>Web Design:</strong> HTML, CSS, SCSS, JavaScript, jQuery,
              Bootstrap
            </li>
            <li>
              <strong>Back-End Familiarity:</strong> Node.js, CRUD applications
            </li>
          </ul>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Junior React Developer</h3>
            <p>
              <strong>BSSIT (Dec 2022 - Present)</strong>
            </p>
            <p>
              Developed and integrated the Billing Module and multiple
              dashboards (Student, Teacher, Admin) in a School Management System
              using React.js, React Router v6, and Context API.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Student Support Associate</h3>
            <p>
              <strong>Creative IT Institute</strong>
            </p>
            <p>
              Assisted over 100+ web design students in mastering HTML, CSS,
              JavaScript, jQuery, and SCSS. Provided support through both online
              and offline sessions.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p>
            <strong>B.Sc in Computer Science and Engineering</strong>
            <br />
            University of Asia Pacific (2015-2020), CGPA: 3.72
          </p>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <h2 className="text-3xl relative font-semibold mb-6 inline-block text-white text-left">
            Live Project Links
            <div class="after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:bg-[#00C7FF] after:content-['']"></div>
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <a
                href="https://i-learn-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 text-white hover:text-[#00C7FF]"
              >
                <span className="text-xl font-medium">iLearn</span>
                <svg
                  className="w-6 h-6 text-[#00C7FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </li>
            <li className="bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <a
                href="http://www.bssitbd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 text-white hover:text-[#00C7FF]"
              >
                <span className="text-xl font-medium">BSSIT Website</span>
                <svg
                  className="w-6 h-6 text-[#00C7FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </li>
            <li className="bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <a
                href="https://ferrytech.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 text-white hover:text-[#00C7FF]"
              >
                <span className="text-xl font-medium">FerryTech</span>
                <svg
                  className="w-6 h-6 text-[#00C7FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </li>
            <li className="bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <a
                href="https://academease.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-4 text-white hover:text-[#00C7FF]"
              >
                <span className="text-xl font-medium">Academease</span>
                <svg
                  className="w-6 h-6 text-[#00C7FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Page>
  );
};

export default AboutPage;
