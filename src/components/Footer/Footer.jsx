import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="mt-[115px]">
        <div className="grid grid-cols-12 w-[90%] max-w-[1200px] mx-auto mb-10 md:mb-20">
          <div className="col-span-12 md:col-span-5 w-[90%] mx-auto mb-10 md:mb-0">
            <div className="-mt-4">
              <Link to="/">
                <h1 className="font-bold text-center text-[40px] md:text-[72px] leading-[58px] md:leading-[68px]">
                  MV
                </h1>
              </Link>
            </div>
            <div>
              <p className="max-w-[90%] text-justify">
                Medical Vault is a decentralised nft medical system that helps
                patients taking over their medical history
              </p>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 w-[80%] mx-auto mb-10 md:mb-0">
            <h3 className="text-[#1E2022] mb-[10px]">Helpful Links</h3>
            <ul>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                <HashLink to="/#about" smooth>
                  About us
                </HashLink>
              </li>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                <HashLink to="/#faqs" smooth>
                  FAQ
                </HashLink>
              </li>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                Privacy Policy
              </li>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                <HashLink to="/#contact" smooth>
                  Contact us
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2 w-[90%] mx-auto mb-10 md:mb-0">
            <h3 className="text-[#1E2022] mb-[10px]">We are Social</h3>
            <ul>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                <HashLink to="/#" smooth>
                  Facebook
                </HashLink>
              </li>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                <HashLink to="/#" smooth>
                  Twitter
                </HashLink>
              </li>
              <li className="text-sm hover:underline decoration-primary decoration-2 transition duration-200">
                <HashLink to="/#">Instagram</HashLink>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3 w-[90%] mx-auto">
            <h3 className="text-[#1E2022] mb-[10px]">Contact Us</h3>
            <ul>
              <li className="text-sm w-[90%]">Address: 20,Lagos Nigera.</li>
              <li className="text-sm">Phone: 0700-Medvault</li>
              <li className="text-sm">E-Mail: support@medvault.com</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-16 flex justify-center items-center bg-primary">
          <p className="text-center font-semibold text-sm">
            &copy; 2023 MedVault. All Rights Reserved.
          </p>
        </div>
        <div className="w-full h-[66px] bg-[#E5E5E5]"></div>
      </div>
    </footer>
  );
};

export default Footer;
