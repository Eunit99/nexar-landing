import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(3);

  const faqs = [
    {
      question: "How do i buy Giftcards",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio non leo venenatis viverra a sed nulla. Aenean pellentesque enim at interdum pellentesque.",
    },
    {
      question: "How do i buy Giftcards",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How do i buy Giftcards",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How do i buy Giftcards",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget odio non leo venenatis viverra a sed nulla. Aenean pellentesque enim at interdum pellentesque.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 mb-16 text-center">
          <p className="font-tt-norms text-xl font-medium text-black leading-[155%]">
            You have questions? We have answers
          </p>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-[55px] font-extrabold leading-[103%]">
            Frequently asked <span className="text-nexar-purple">questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-[30px] border transition-all ${
                openIndex === index
                  ? 'border-[#005CFF] bg-gray-50 p-8'
                  : 'border-nexar-purple bg-gray-50 p-8 lg:p-11'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center gap-4"
              >
                <h3 className="font-urbanist text-lg font-bold text-[#25272D] text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-9 h-9 text-[#B2B7BA] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-urbanist text-lg font-medium text-[#535860] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
