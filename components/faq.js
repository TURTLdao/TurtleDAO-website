import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}<br/>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Thorough Verification",
    answer: "TurtleDAO's rigorous project verification process ensures that projects endorsed by the platform have undergone careful scrutiny. This verification helps to mitigate risks and increase the likelihood of successful and reputable ventures.",
  },
  {
    question: "Transparency",
    answer: "TurtleDAO operates with a commitment to transparency, providing open-source code and making resources readily accessible. This level of transparency ensures that actions and decisions are visible, fostering trust and accountability.",
  },
  {
    question: "Community Involvement",
    answer: "TurtleDAO values community input and actively involves stakeholders in decision-making processes. By giving individuals a voice and considering their perspectives, the project demonstrates a commitment to inclusivity and democratic governance.",
  },
  {
    question: "Financial Support",
    answer: "TurtleDAO goes beyond verification by dedicating resources to support verified projects. Through initiatives such as providing liquidity and development grants, TurtleDAO demonstrates a vested interest in the growth and success of the projects it endorses.",
  },
  {
    question: "Track Record",
    answer: "Assessing the past performance and track record of TurtleDAO can contribute to building trust. Reviewing the history of successfully supported projects, community feedback, and engagement can provide insights into the project's reliability and commitment to its mission.",
  },
  {
    question: "Ecosystem Collaboration",
    answer: "TurtleDAO fosters a collaborative ecosystem, creating opportunities for projects to interact and benefit from synergies. This collaborative approach helps to build a network effect, where trust in the overall ecosystem enhances the credibility and potential of individual projects.",
  },
];

export default Faq;