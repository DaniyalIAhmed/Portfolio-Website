import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    name: <FaGithub />,
    path: "https://github.com/DaniyalIAhmed",
  },
  {
    name: <FaLinkedin />,
    // className="text-[#0077b5]"
    path: "https://www.linkedin.com/in/daniyal-ahmed-939947256/",
  },
//   {
//     name: <FaFacebook className="text-[#0863f7]"/>,
//     path: "https://www.facebook.com/profile.php?id=100028759844823",
//   },
//   {
//     name: <FaWhatsapp className="text-accent" />,
//     path: "https://web.whatsapp.com/",
//   },
  {
    name: <FaDiscord />,
    // className="text-[#5462e5]"
    path: "https://discord.com/",
  },
//   {
//     name: <FaTelegramPlane className="text-[#31a8e0]"/>,
//     path: "https://telegram.org/",
//   },
  {
    name: <FaTwitter />,
    // className="text-[#000000]"
    path: "https://x.com/daniyal_ahmed_s",
  },
//   {
//     name: <FaTwitch className="text-[#8b44f7]"/>,
//     path: "https://www.twitch.tv/daniyal_ahmed_",
//   },
  {
    name: <FaYoutube />,
    // className="text-[#fb0000]"
    path: "https://www.youtube.com/@daniyalahmed3388",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="blank"
          className={iconStyles}
        >
          {social.name}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
