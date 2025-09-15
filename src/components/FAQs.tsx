import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    id: "1",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term commitments. Your subscription will remain active until the end of your current billing period.",
  },
  {
    id: "2",
    question: "How do I access premium features?",
    answer:
      "Premium features are automatically unlocked when you upgrade to a paid plan. Simply navigate to your account settings and select the premium plan that best fits your needs. Features will be available immediately after payment confirmation.",
  },
  {
    id: "3",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for all new users. No credit card is required to start your trial. You can explore all premium features during this period and decide if our service is right for you.",
  },
  {
    id: "4",
    question: "How does the team billing work?",
    answer:
      "Team billing allows you to manage multiple users under a single account. You can add or remove team members at any time, and billing is automatically adjusted on your next invoice. Each team member gets full access to all features included in your plan.",
  },
  {
    id: "5",
    question: "Is there a discount for annual billing?",
    answer:
      "Yes, we offer a 20% discount when you choose annual billing instead of monthly. This discount is applied automatically when you select the annual option during checkout or when upgrading your existing subscription.",
  },
  {
    id: "6",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely through our encrypted payment system.",
  },
];

const FAQComponent: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions about our service",
  items = defaultFAQItems,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string): void => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isOpen = (id: string): boolean => openItems.has(id);

  return (
    <div
      className="max-w-full container mx-auto px-4 md:px-6 
    2xl:max-w-[1400px]  py-24 lg:py-32"
    >
      <div className="rounded-2xl">
        <div className="max-w-2xl  mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-gray-600">{subtitle}</p>
        </div>
        <div className="w-full max-w-5xl  mx-auto ">
          <div className="w-full space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="  rounded-lg px-6 w-full bg-linear-to-br from-black/[0.01] to-black/[0.05]  
                shadow-sm"
              >
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen(item.id)}
                    className="flex cursor-pointer flex-1 items-start justify-between gap-4 rounded-md text-left transition-all outline-none hover:underline
                py-4 text-lg font-medium"
                  >
                    <div className="flex items-center  gap-3">
                      <span
                        className="text-start mr-3
                       text-slate-900 text-[21px]"
                      >
                        {item.question}
                      </span>
                    </div>
                    <IoChevronDown
                      className={`text-gray-700 size-5 shrink-0 transition-transform duration-200 ${
                        isOpen(item.id) ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`overflow-hidden transition-all 
                    duration-200 ease-in-out ${
                      isOpen(item.id)
                        ? "max-h-96 opacity-100 pb-2"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  <div
                    className="text-md text-gray-800 
                  leading-relaxed pl-8 sm:pl-12"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
