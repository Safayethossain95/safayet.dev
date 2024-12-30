const Footer = () => {

  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container text-left mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#00c7ff] mb-4">
              About Me
            </h2>
            <p className="text-gray-400">
              Web Developer with over 2 years of experience specializing in
              React.js, HTML, CSS, JS, and Node.js. Passionate about building
              user-friendly web applications.
            </p>
          </div>
          {/* Project Links Section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#00c7ff] mb-4">
              Projects
            </h2>
            <ul>
              <li>
                <a
                  href="https://i-learn-seven.vercel.app/"
                  className="text-gray-400 hover:text-[#00c7ff] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iLearn
                </a>
              </li>
              <li>
                <a
                  href="https://new.tarbiyahinst.com"
                  className="text-gray-400 hover:text-[#00c7ff] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tarbiyah
                </a>
              </li>
              <li>
                <a
                  href="https://ferrytech.vercel.app/"
                  className="text-gray-400 hover:text-[#00c7ff] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FerryTech
                </a>
              </li>
              <li>
                <a
                  href="https://academease.netlify.app"
                  className="text-gray-400 hover:text-[#00c7ff] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academease
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#00c7ff] mb-4">
              Contact
            </h2>
            <ul>
              <li>
                <p className="text-gray-400">
                  GitHub:{" "}
                  <a
                    href="https://github.com/Safayethossain95"
                    className="text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safayethossain95
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-400">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/safayethossain956/"
                    className="text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safayet Hossain
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-400">
                  Phone:{" "}
                  <a
                    href="tel:+8801742141355"
                    className="text-white hover:underline"
                  >
                    01742141355
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-400">
                  Email:{" "}
                  <a
                    href="mailto:safayet.hossain95@gmail.com"
                    className="text-white hover:underline"
                  >
                    safayet.hossain95@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Safayet Hossain. All rights reserved.
          </p>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;
