import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "What is your return policy?",
    answer: "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer: "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer: "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

function Faq({ className }: { className?: string }) {
  return (
    <section className={cn("flex items-center justify-center px-6 py-12", className)}>
      <div className="w-full max-w-7xl mx-auto lg:flex-row flex-col flex justify-between duration-300">
        {/* Left Side */}
        <div className="items-center gap-2 h-fit  flex">
          <hr className="w-8 border-primary" />
          <h2 className="text-lg font-medium">Fragen</h2>
        </div>
        {/* Right Side */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0 duration-300">
          <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter duration-300">Frequently Asked Questions</h2>
          <p className="mt-2 text-xl text-muted-foreground">Quick answers to common questions about our products and services.</p>

          <Accordion type="single" collapsible className="mt-8 sm:mt-10 duration-300 space-y-4" defaultValue="question-0">
            {faq.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`} className="bg-card py-1 px-4 rounded-xl border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}>
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-base text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
