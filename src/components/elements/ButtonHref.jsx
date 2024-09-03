const arrow_up_right_dark = "/arrow-up-right-dark.svg";
const arrow_up_right_light = "/arrow-up-right-light.svg";

// eslint-disable-next-line react/prop-types
export default function ButtonHref({ href, text, theme }) {
  const checkTheme = (theme) => {
    if (theme === "light") return true;
    else return false;
  };

  return (
    <button className="text-sm font-[450] uppercase xs:max-md:text-base md:max-lg:text-lg lg:max-xl:text-2xl fhd:text-lg">
      <a href={href} download className="flex" target="_blank">
        [
        <span className="flex gap-1 px-2">
          <span>{text}</span>
          {checkTheme(theme) ? (
            <img src={arrow_up_right_dark} className="w-3.5" alt="" />
          ) : (
            <img src={arrow_up_right_light} className="w-3.5" alt="" />
          )}
        </span>
        ]
      </a>
    </button>
  );
}
