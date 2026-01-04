"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o atendimento?",
    answer:
      "O atendimento é realizado de forma personalizada, analisando cada caso individualmente.",
  },
  {
    question: "Como funciona a consulta jurídica?",
    answer:
      "A consulta pode ser presencial ou online, conforme a necessidade do cliente.",
  },
  {
    question: "Quanto custam os honorários?",
    answer:
      "Os valores variam conforme a complexidade do caso e são informados após análise inicial.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "PIX, transferência bancária ou outra forma previamente acordada.",
  },
  {
    question: "É possível parcelar os honorários?",
    answer:
      "Sim, em alguns casos, conforme acordo entre as partes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-neutral-950 py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-14">
          Perguntas frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-[#c8a04d] font-semibold">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-neutral-400">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
