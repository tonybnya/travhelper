import copyrightSign from "../assets/icons/copyright-sign.svg";

const Footer = () => {
  return (
    <footer className="padding-x z-10 w-full py-32">
      <div className="max-container text-white-400 mt-10 flex justify-between border-t-4 py-4 font-bold max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright 2023. All Rights Reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
