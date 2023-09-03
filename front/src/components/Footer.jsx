import copyrightSign from '../assets/icons/copyright-sign.svg';
  
const Footer = () => {
  return (
    <footer className='padding-x py-8 z-10 w-full'>
      <div className="max-container flex justify-between border-t-4 pt-4 text-white-400 font-bold mt-10 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright 2023. All Rights Reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions.</p>
      </div>
    </footer>
  )
}

export default Footer;