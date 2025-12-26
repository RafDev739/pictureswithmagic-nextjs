'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do you handle my precious photos?',
    answer: 'We treat your photos with the utmost care and respect. All photos are handled in a secure environment, logged, and tracked throughout the entire process. Local pickup and delivery are available to minimize handling.',
  },
  {
    question: 'What if I have thousands of photos?',
    answer: 'No problem! We specialize in large collections. During your free consultation, we will discuss the scope of your project and create a customized plan that fits your timeline and budget.',
  },
  {
    question: 'Do I need to sort my photos first?',
    answer: 'Not at all! We offer organization services as part of our process. However, if you prefer to pre-sort your collection, that is fine too. We will work with whatever state your photos are in.',
  },
  {
    question: 'Is the consultation really free with no obligation?',
    answer: 'Absolutely! Our consultation is 100% free with no strings attached. We want to understand your needs and provide expert guidance. You are never obligated to proceed with our services.',
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-heading">
        Common Questions
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-neutral-900 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-neutral-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-neutral-600 text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
