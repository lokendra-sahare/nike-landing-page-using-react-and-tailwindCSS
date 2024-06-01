import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants/index";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} height={46} width={150} />
          </a>
          <p className="mt-6 text-base leading-7 font-monserrat text-white-400 sm:max-w-sm">
            Get the shoe ready for new term at your nearest Nike store. Find
            your perfect size at store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat font-medium text-2xl leading-normal mb-6">
                {section.title}
              </h4>
              <ul className="text-white">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 text-base font-montserrat mt-3 cursor-pointer leading-normal hover:text-slate-gray"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 font-montserrat justify-start items-center cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyrightSign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="text-white-400">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
