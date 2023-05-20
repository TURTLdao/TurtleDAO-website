import {
  FaceSmileIcon,
  BanknotesIcon,
  UsersIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlighting TurtleDAOs benefits",
  desc: "A team built to verify new and upcoming projects to help avoid users investing in worthless assets.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Regular Auditing",
      desc: "While most organizations typically conduct a single audit, our dedication lies in consistently monitoring and ensuring the continued compliance and positive conduct of our verified projects.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Funding New Projects",
      desc: "In addition to project verification, we pledge our commitment to supporting their financial stability and future growth by assisting in fundraising for liquidity and development purposes.",
      icon: <BanknotesIcon/>,
    },
    {
      title: "Community Driven",
      desc: "TurtleDAO prioritizes the well-being of the community, valuing their input and ensuring their voices are heard in every decision we make.",
      icon: <UsersIcon/>,
    },
    {
      title: "Open-Source",
      desc: "TurtleDAO embraces a commitment to openness and transparency. Our unwavering dedication is reflected in our open-source approach, making every line of code and resource readily accessible under a GitHub license.",
      icon: <EyeIcon/>,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
