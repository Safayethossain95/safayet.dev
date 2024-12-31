import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
const cards = [
  {
    id: 1,
    bgColor: "bg-[#202A37]",
    projectname: "FERRYTECH • 2024",
    typeofproject: "Construction Equipment Provider",
    img: "/static/projects/ferrytech-n.png",
    detail:
      "Ferrytech is a Full Stack Web Development project that I worked on in 2024. It is a construction equipment provider website that showcases the company&apos;s products and services. The website is built with Next.js, Tailwind CSS, and Firebase.",
    liveurl: "https://ferrytech.vercel.app",
  },
  {
    id: 2,
    bgColor: "bg-[#202A37]",
    projectname: "iLearn • 2024",
    typeofproject: "Learning Platform for Kids",
    img: "/static/projects/iLearn-n.png",
    detail:
      "Help your child unlock their potential and become a tech-savvy innovator. From beginner-friendly basics to advanced coding challenges, iLearn offers a world of opportunities to learn, grow, and excel—all while having fun!",
    liveurl: "https://i-learn-seven.vercel.app",
  },
  {
    id: 3,
    projectname: "BSSIT • 2023",
    bgColor: "bg-[#202A37]",
    typeofproject: "An IT company website",
    detail:
      "BSSIT, your trusted partner for cutting-edge IT solutions. We specialize in delivering a wide range of services, including software development, web design, cloud computing, and IT consulting, tailored to meet the unique needs of your business. Empower your growth with our innovative technology and expert support, ensuring seamless digital transformation and success.",
    img: "/static/projects/bssit-n.png",
    liveurl: "http://www.bssitbd.com",
  },
  {
    id: 4,
    projectname: "Tarbiyah Institute • 2023",
    typeofproject: "Islamic Learning Platform",
    detail:
      "Tarbiyah Institute, where timeless wisdom meets modern learning. We offer in-depth courses on Islam and its sacred scriptures, designed to nurture spiritual growth and a deeper understanding of faith. Join us to embark on a journey of knowledge, reflection, and connection to the divine teachings.",
    bgColor: "bg-[#202A37]",
    img: "/static/projects/tarbiyah-n.png",
    liveurl: "https://new.tarbiyahinst.com",
  },
];
const ProjectsCards = () => {
  const Card = ({
    bgColor,
    projectname,
    index,
    typeofproject,
    img,
    detail,
    liveurl,
  }) => {
    return (
      <div className="sticky top-5">
        <div
          className={`relative overflow-hidden ${bgColor} flex p-12 rounded-[20px] shadow-lg h-auto transition-all duration-500 outline outline-[#4E5661]`}
          style={{ transform: `translateY(${index * 30}px);` }}
        >
          <div className=" items-center lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="div text-left">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{projectname}</span>
              </div>
              <h3 className="font-c font-medium text-2xl md:text-3xl mt-2 md:mt-4">
                {typeofproject}
              </h3>

              <ul className="mt-3">
                <li className="text-sm  md:text-base text-white/50">
                  {detail}
                </li>
              </ul>
              <a
                href={liveurl}
                target="_blank"
                rel="noopener noreferrer" // Added for security reasons
                className="bg-white cursor-pointer border border-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:text-fun-pink hover:border-white/15 hover:bg-transparent duration-700"
              >
                <span>View Live Site</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="size-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
            <div className="div ">
              <Image
                className="rounded-[30px] mt-8 -mb-4 md:-mb-0 lg:mt-0  lg:h-full lg:w-auto lg:max-w-none"
                src={img}
                alt="abc"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="absolute -z-2 top-0 left-0 w-full h-full bg-[url('/images/static.jpg')] opacity-5"></div>
        </div>
      </div>
    );
  };
  return (
    <>
    <div className="container mb-10">
    <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="Discover how I turned creative visions into impactful digital solutions."
        />
    </div>
      <div className="max-w-[900px] mx-auto ">
        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              bgColor={card.bgColor}
              projectname={card.projectname}
              index={index}
              typeofproject={card.typeofproject}
              img={card.img}
              detail={card.detail}
              liveurl={card.liveurl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsCards;
