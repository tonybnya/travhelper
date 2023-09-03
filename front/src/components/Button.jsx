const Button = ({label, iconURL, bgColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${bgColor
        ? `${bgColor} ${textColor} ${borderColor}`
        : "bg-main-green text-dark-color border-dark-color w-4/5 border-4 hover:bg-dark-color hover:duration-300 hover:border-main-green hover:text-white font-bold"
      } rounded-md ${fullWidth && 'w-full'}`}
    >
      {label}

      {iconURL && <img
        src={iconURL}
        alt="icon"
        className="rounded-full w-5 h-5"
      />}
    </button>
  )
}

export default Button;