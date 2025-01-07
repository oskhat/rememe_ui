import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is M3M3 staking?",
        answer: "M3M3 staking allows you to earn rewards by locking up your M3M3 tokens. The more you stake and the longer you stake, the more rewards you can earn."
    },
    {
        question: "How long is the unstaking period?",
        answer: "The unstaking period is 18 hours. During this time, your tokens are locked and cannot be transferred or used."
    },
    {
        question: "Can I cancel an unstake request?",
        answer: "Yes, you can cancel an unstake request at any time during the cooldown period. Your tokens will then return to the staked balance."
    }
];

export function FAQ() {
    return (
        <div className="bg-black/30 border border-amber-700/20 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">FAQ</h3>
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq: FAQItem, index: number) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b border-amber-700/20">
                        <AccordionTrigger className="text-lg font-semibold text-amber-500">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
