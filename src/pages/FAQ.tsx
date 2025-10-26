import React from 'react';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a positioning expert?",
      answer: "A positioning expert is a strategic advisor who helps companies define and articulate their unique market position. They specialize in competitive differentiation, target market identification, and crafting compelling value propositions that resonate with ideal customers. Positioning experts combine market research, competitive analysis, and strategic messaging to help businesses stand out in crowded markets."
    },
    {
      question: "What does a positioning expert do?",
      answer: "A positioning expert analyzes your market landscape, identifies your unique differentiators, and develops a strategic positioning framework. This includes defining your target audience, articulating your unique value proposition, mapping competitive alternatives, and creating messaging that resonates with decision-makers. They help translate complex products and services into clear, compelling narratives that drive customer acquisition and revenue growth."
    },
    {
      question: "When do you need a positioning expert?",
      answer: "You need a positioning expert when: launching a new product or entering a new market, facing commoditization or increased competition, struggling to articulate your value proposition, preparing for fundraising or acquisition, experiencing slow sales cycles or low conversion rates, or pivoting your business model. Positioning experts are particularly valuable for B2B companies, SaaS products, and businesses in crowded or complex markets."
    },
    {
      question: "How much does a positioning expert cost?",
      answer: "Positioning expert fees vary based on scope and experience. Strategic positioning projects typically range from $15,000 to $100,000+ for comprehensive engagements. Fractional positioning advisors may charge $5,000-$20,000 per month. AI-powered positioning tools like Edward offer more accessible options for initial positioning guidance. The ROI often justifies the investment—strong positioning can dramatically improve conversion rates, shorten sales cycles, and enable premium pricing."
    },
    {
      question: "How to choose a positioning expert?",
      answer: "Look for positioning experts with: proven track record in your industry or market segment, deep understanding of go-to-market strategy, strong strategic thinking and market analysis skills, ability to translate technical concepts into compelling narratives, and experience with companies at your stage (startup, scale-up, or enterprise). Review case studies, ask for references, and ensure their methodology aligns with your needs. Troy Assoignon brings 15+ years of positioning experience with $62.7M in documented client results."
    },
    {
      question: "What is the difference between a positioning expert and a marketing consultant?",
      answer: "While marketing consultants focus on execution tactics (campaigns, channels, content), positioning experts focus on strategic foundation—the 'what' and 'why' that drives all marketing. Positioning comes before marketing execution. A positioning expert defines your unique market position, target audience, and core narrative; marketing consultants then execute campaigns based on that positioning. Think of positioning as the foundation and marketing as the house built on top."
    },
    {
      question: "Can AI help with positioning strategy?",
      answer: "Yes. AI-powered positioning tools like Edward provide instant access to positioning intelligence, strategic frameworks, and competitive analysis. While AI can't replace the nuanced judgment of an experienced positioning expert, it can accelerate research, generate positioning hypotheses, and provide 24/7 guidance on positioning challenges. Edward combines AI capabilities with proven positioning methodologies to offer scalable positioning expertise."
    },
    {
      question: "What is positioning intelligence?",
      answer: "Positioning intelligence is the strategic insight derived from analyzing market dynamics, competitive landscapes, customer psychology, and business capabilities to identify optimal market positioning. It combines data analysis, market research, competitive intelligence, and strategic thinking to inform positioning decisions. AI agents like Edward democratize access to positioning intelligence by providing instant analysis and strategic recommendations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Positioning Expert FAQ | Everything You Need to Know About Positioning Strategy</title>
        <meta name="description" content="Common questions about positioning experts answered. Learn what positioning experts do, when to hire one, costs, and how to choose the right positioning strategist for your business." />
        <meta name="keywords" content="positioning expert, positioning strategy, positioning consultant, what is positioning, hire positioning expert, positioning expert cost" />

        <meta property="og:title" content="Positioning Expert FAQ | Your Questions Answered" />
        <meta property="og:description" content="Everything you need to know about positioning experts, positioning strategy, and how to improve your market positioning." />
        <meta property="og:type" content="article" />

        {/* FAQ Schema for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Positioning Expert FAQ
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to know about positioning experts, positioning strategy, and how to improve your market position.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-cyan-400/20 rounded-lg p-8 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                  {faq.question}
                </h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 border border-cyan-400/30 rounded-lg bg-cyan-500/5 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Ready to Talk to a Positioning Expert?</h2>
            <p className="text-xl text-white/70 mb-8">
              Try Edward, our AI positioning intelligence agent, or contact Troy Assoignon directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-4 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-white font-medium hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                Try Edward Now
              </a>
              <a
                href="https://troyassoignon.com/contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Contact Troy
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back to Edward
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
