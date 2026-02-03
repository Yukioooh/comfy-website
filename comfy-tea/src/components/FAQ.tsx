import { useState } from 'react';

const faqs = [
  {
    question: "Faut-il réserver une table ?",
    answer: "Non, chez Comfy nous fonctionnons sans réservation ! Venez quand vous voulez, nous vous accueillerons avec plaisir. En cas de forte affluence, l'attente est généralement courte."
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nous sommes ouverts du mardi au dimanche, de 9h à 18h. Le lundi est notre jour de repos. Les horaires peuvent varier lors des jours fériés, consultez nos réseaux sociaux pour les mises à jour."
  },
  {
    question: "Proposez-vous des options végétariennes ou vegan ?",
    answer: "Absolument ! Notre carte propose de nombreuses options végétariennes et plusieurs plats vegan. N'hésitez pas à demander à notre équipe, nous pouvons adapter certains plats selon vos préférences."
  },
  {
    question: "Peut-on privatiser l'espace pour un événement ?",
    answer: "Oui, nous proposons la privatisation de notre salon de thé pour vos événements privés (anniversaires, baby showers, réunions...). Contactez-nous par email ou téléphone pour plus d'informations."
  },
  {
    question: "Proposez-vous des formules à emporter ?",
    answer: "Oui ! Toutes nos boissons et la plupart de nos plats sont disponibles à emporter. Nous utilisons des emballages éco-responsables pour réduire notre impact environnemental."
  },
  {
    question: "Acceptez-vous les tickets restaurant ?",
    answer: "Oui, nous acceptons les tickets restaurant ainsi que les principales cartes bancaires. Le paiement en espèces est également possible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-amber-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-800 uppercase text-center leading-tight mb-12 md:mb-16"
          style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
        >
          Questions<br />Fréquentes
        </h2>

        {/* FAQ Accordion */}
        <div className="border-2 border-emerald-800">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${index !== 0 ? 'border-t-2 border-emerald-800' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-amber-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-emerald-800 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 border-2 border-emerald-800 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'bg-emerald-800 rotate-45' : ''
                  }`}
                >
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      openIndex === index ? 'text-white' : 'text-emerald-800'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-emerald-800/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}