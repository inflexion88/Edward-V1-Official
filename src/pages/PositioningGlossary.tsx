import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/voice/AnimatedBackground';

const PositioningGlossary = () => {
  const terms = [
    {
      term: "Positioning",
      definition: "The strategic process of defining how a product, service, or brand occupies a distinct and valued place in the target customer's mind relative to competitive alternatives. Positioning determines what makes your offering different, better, or more relevant than other options available to customers."
    },
    {
      term: "Positioning Statement",
      definition: "A concise internal document that articulates your target market, the problem you solve, your unique value proposition, and how you differ from alternatives. It serves as the foundation for all marketing messaging and typically follows formats like Geoffrey Moore's template: 'For [target customer] who [statement of need], our [product/service] is [market category] that [key benefit]. Unlike [competitive alternative], we [primary differentiation].'"
    },
    {
      term: "Positioning Framework",
      definition: "A structured methodology or template for developing positioning strategy. Popular frameworks include April Dunford's 5-Component Canvas, Geoffrey Moore's Positioning Statement, the STP Model (Segmentation, Targeting, Positioning), and Ries & Trout's battle for the mind approach."
    },
    {
      term: "Product Positioning",
      definition: "The specific application of positioning strategy to a product offering. Product positioning defines what the product does, who it's for, why it matters, and how it's different from alternatives in the market. It's more specific than brand positioning and focuses on the product's functional and emotional benefits."
    },
    {
      term: "Market Category",
      definition: "The mental 'bucket' or classification customers use to understand what your product is and compare it to alternatives. Examples include 'CRM software,' 'project management tool,' or 'marketing automation platform.' Choosing the right category is critical because it determines your competitive set and customer expectations."
    },
    {
      term: "Competitive Alternatives",
      definition: "What customers would use or do if your product didn't exist. This includes direct competitors, indirect substitutes, and the status quo (doing nothing). Understanding competitive alternatives is essential for articulating differentiation. Often the real competition isn't another product but manual processes, spreadsheets, or inaction."
    },
    {
      term: "Differentiation",
      definition: "The unique attributes, features, or capabilities that distinguish your offering from alternatives. Differentiation answers 'what makes us different?' While related to positioning, differentiation focuses on product characteristics, whereas positioning focuses on customer perception and value."
    },
    {
      term: "Value Proposition",
      definition: "A clear statement of the tangible and intangible benefits customers receive from your offering. It explains why customers should choose you by articulating the value delivered, problems solved, and outcomes achieved. A strong value proposition is specific, quantifiable when possible, and customer-focused."
    },
    {
      term: "Target Market",
      definition: "The specific group of customers most likely to buy and derive value from your offering. Target markets are defined by demographics, firmographics, psychographics, behaviors, and needs. Effective positioning requires narrow, specific targeting rather than trying to appeal to everyone."
    },
    {
      term: "Repositioning",
      definition: "The strategic process of changing how a product, service, or brand is perceived in the market. Repositioning may be needed when entering new markets, responding to competition, addressing changing customer needs, or recovering from negative perception. It's more challenging than initial positioning because it requires changing existing beliefs."
    },
    {
      term: "Positioning Canvas",
      definition: "April Dunford's positioning framework consisting of five key components: (1) Competitive Alternatives, (2) Unique Attributes, (3) Value (and proof), (4) Target Market Characteristics, and (5) Market Category. The canvas helps teams systematically work through positioning decisions."
    },
    {
      term: "Unique Selling Proposition (USP)",
      definition: "A specific benefit or feature that competitors cannot or do not offer. Your USP answers why customers should buy from you instead of anyone else. It must be unique, provable, and meaningful to your target audience. The term was coined by Rosser Reeves in the 1940s and remains fundamental to positioning."
    },
    {
      term: "Brand Positioning",
      definition: "The strategic process of creating a distinct identity and perception for your overall brand in customers' minds. Brand positioning is broader than product positioning and encompasses your company's values, personality, mission, and long-term promise. It influences all products and services under the brand umbrella."
    },
    {
      term: "Perceptual Map",
      definition: "A visual tool that plots how customers perceive your brand relative to competitors based on two key attributes (axes). Perceptual maps help identify positioning opportunities, gaps in the market, and how closely you're positioned to competitors. Common axes include price vs. quality, innovative vs. traditional, or simple vs. feature-rich."
    },
    {
      term: "Messaging Framework",
      definition: "A structured document that translates positioning strategy into consistent communication across channels. It typically includes key messages, proof points, value propositions for different audiences, and messaging do's and don'ts. The messaging framework ensures sales, marketing, and customer success teams communicate positioning consistently."
    },
    {
      term: "Go-to-Market (GTM) Strategy",
      definition: "The comprehensive plan for bringing a product to market and reaching target customers. GTM strategy is heavily influenced by positioning because how you position determines which markets to target, which channels to use, what messaging resonates, and which customers to prioritize."
    },
    {
      term: "Market Segmentation",
      definition: "The process of dividing a broad market into smaller, more homogeneous groups based on shared characteristics, needs, or behaviors. Segmentation enables more precise targeting and positioning because different segments may perceive value differently and respond to different positioning approaches."
    },
    {
      term: "Category Creation",
      definition: "The strategic decision to define a new market category rather than competing in an existing one. Category creation involves educating the market about a new type of solution, establishing new evaluation criteria, and positioning yourself as the category leader. Examples include Salesforce creating 'SaaS CRM' and HubSpot creating 'inbound marketing.'"
    },
    {
      term: "Positioning Attributes",
      definition: "The specific characteristics or features you emphasize to differentiate your offering. Common positioning attributes include price, quality, performance, ease of use, customer service, innovation, reliability, sustainability, or specialization. Choosing the right attributes depends on what your target market values most."
    },
    {
      term: "Customer Segmentation",
      definition: "The practice of dividing your customer base into groups that share similar characteristics, behaviors, or needs. Unlike market segmentation (which looks at the entire market), customer segmentation focuses on your existing customers to identify your best-fit segments for positioning and targeting decisions."
    },
    {
      term: "Buyer Journey",
      definition: "The process customers go through when making purchase decisions, from awareness to consideration to decision. Understanding the buyer journey is critical for positioning because customers evaluate different attributes at different stages. Your positioning must resonate throughout their entire journey, not just at initial awareness."
    },
    {
      term: "Challenger Positioning",
      definition: "How number two or three players position against the market leader. Challenger brands typically can't compete head-to-head on the same attributes, so they reframe the category, attack the leader's weaknesses, or focus on underserved segments. Famous examples include Avis ('We Try Harder') and Pepsi ('The Choice of a New Generation')."
    },
    {
      term: "Competitive Advantage",
      definition: "Attributes, resources, or capabilities that allow you to outperform competitors and deliver superior value to customers. Competitive advantages can stem from technology, brand reputation, economies of scale, network effects, intellectual property, customer relationships, or operational excellence. Strong positioning articulates your competitive advantage clearly."
    },
    {
      term: "Customer Personas",
      definition: "Fictional representations of ideal customers based on real data about demographics, behaviors, motivations, and goals. Personas humanize target markets and help teams align on who they're positioning for. Effective personas include job titles, pain points, success metrics, decision criteria, and buying behaviors specific to positioning decisions."
    },
    {
      term: "Decision Criteria",
      definition: "The factors customers use to evaluate and choose between alternative solutions. Common decision criteria include price, features, ease of use, reliability, vendor reputation, integration capabilities, and support quality. Understanding what matters most in your customer's decision criteria allows you to position your differentiation on the attributes that actually influence purchase decisions."
    },
    {
      term: "Emotional Positioning",
      definition: "Positioning based on emotional benefits, feelings, and brand connection rather than functional features. Emotional positioning taps into aspirations, values, identity, and belonging. Brands like Apple (creativity, innovation), Nike (achievement, determination), and Harley-Davidson (freedom, rebellion) demonstrate the power of emotional positioning when executed authentically."
    },
    {
      term: "Feature-Benefit Positioning",
      definition: "The practice of translating product features into customer benefits for positioning. Features describe what your product has or does. Benefits explain why those features matter and what outcomes customers achieve. Strong positioning always leads with benefits (customer value) supported by features (proof), not the reverse."
    },
    {
      term: "First-Mover Advantage",
      definition: "Benefits gained by being first to market with an innovation or in a new category. First movers can establish brand recognition, set standards, capture customers before alternatives exist, and define category expectations. However, first-mover advantage is not guaranteed and requires sustained innovation, education, and category development to maintain positioning leadership."
    },
    {
      term: "Functional Positioning",
      definition: "Positioning based on practical features, rational benefits, and functional performance. Functional positioning emphasizes what the product does, how it works, and the tangible results it delivers. It appeals to logical decision-making and is common in B2B markets where buyers evaluate ROI, efficiency gains, and measurable outcomes."
    },
    {
      term: "Ideal Customer Profile (ICP)",
      definition: "A detailed description of the company or person that gets maximum value from your offering and represents your best-fit customer. ICPs go beyond basic demographics to include firmographics, budget, tech stack, business models, growth stage, and specific pain points. Tight ICP definition is essential for precise positioning."
    },
    {
      term: "Innovation Positioning",
      definition: "Positioning your offering as the most innovative, cutting-edge, or technologically advanced option in the category. Innovation positioning works when customers value being early adopters and when your innovation delivers meaningful benefits. The risk is that 'innovative' without context or proof becomes meaningless marketing speak rather than compelling positioning."
    },
    {
      term: "Jobs to Be Done (JTBD)",
      definition: "A customer needs framework that views purchases as hiring products to get specific jobs done. JTBD focuses on the functional, emotional, and social jobs customers need accomplished, not product features. This perspective helps position offerings around the outcomes and progress customers seek, making your positioning more relevant and customer-centric."
    },
    {
      term: "Market Leader Positioning",
      definition: "How category leaders position to maintain dominance and fend off challengers. Market leaders typically emphasize reliability, breadth, trust, and industry standard status. They often own the category name itself. Leader positioning focuses on reinforcing category ownership and making switching to alternatives seem risky or unnecessary."
    },
    {
      term: "Market Maturity",
      definition: "The development stage of your market, ranging from nascent to growing to mature to declining. Market maturity dramatically impacts positioning strategy. In nascent markets, you educate on the problem and solution. In growing markets, you differentiate from emerging competitors. In mature markets, you reposition around new benefits or create new categories."
    },
    {
      term: "Niche Positioning",
      definition: "Focusing on a specific, narrow segment to dominate rather than competing broadly across the entire market. Niche positioning allows smaller companies to win by being the absolute best solution for a particular customer type, use case, industry, or need. The tighter your niche, the more precisely you can position and the less you compete with larger generalists."
    },
    {
      term: "Outcome-Based Positioning",
      definition: "Positioning around the results and outcomes customers achieve rather than features or capabilities. Outcome-based positioning answers 'what will I accomplish?' not 'what does it do?' Examples include 'increase revenue by 30%' or 'reduce time to market by half.' This approach is powerful because customers buy outcomes, not features."
    },
    {
      term: "Pain Points",
      definition: "Problems, frustrations, or challenges customers experience that your product addresses. Understanding pain points deeply is critical for relevant positioning because customers are motivated to solve urgent problems. The most effective positioning connects your differentiation directly to alleviating the most significant and urgent pain points your target customers experience."
    },
    {
      term: "Positioning Architecture",
      definition: "The hierarchical structure of positioning across multiple products, brands, or business units within a company. Positioning architecture defines how corporate brand positioning, product family positioning, and individual product positioning relate and reinforce each other. Without clear architecture, companies risk confusing customers with contradictory or overlapping positioning messages."
    },
    {
      term: "Positioning Matrix",
      definition: "A framework for systematically mapping and evaluating positioning options across multiple dimensions. A positioning matrix helps teams explore different target markets, competitive alternatives, value propositions, and differentiators to identify the strongest positioning approach. It makes positioning decisions more analytical and less based on opinions or assumptions."
    },
    {
      term: "Positioning Strategy",
      definition: "The overall plan for how you'll differentiate, compete, and create distinct value in your market. Positioning strategy encompasses target market selection, competitive framing, differentiation choices, category definition, and value proposition. It's the foundation that drives all go-to-market decisions from product development to sales approaches to marketing campaigns."
    },
    {
      term: "Price Positioning",
      definition: "Where you position on the price spectrum relative to alternatives: premium, mid-market, value, or economy. Price positioning signals quality expectations, target customers, and brand perception. Premium pricing positions you as higher quality, exclusive, or superior. Value pricing positions you as the smart, efficient, cost-effective choice. Price and quality positioning must align."
    },
    {
      term: "Problem-Solution Fit",
      definition: "How well your solution addresses the customer problem you're targeting. Strong problem-solution fit means your product naturally and effectively solves a significant customer pain point. Positioning requires problem-solution fit because you can't credibly position around customer value if your solution doesn't genuinely fit the problem you claim to solve."
    },
    {
      term: "Product-Market Fit",
      definition: "How well your product satisfies strong market demand. You achieve product-market fit when customers enthusiastically adopt your product, usage grows organically, and retention is strong. Positioning is easier with product-market fit because you have proof of value, customer testimonials, and clarity on who gets the most value and why."
    },
    {
      term: "Quality Positioning",
      definition: "Positioning based on superior quality, craftsmanship, durability, or excellence. Quality positioning emphasizes 'the best' rather than 'good enough' and typically commands premium pricing. Success requires proof through materials, processes, certifications, awards, or longevity. Brands like Mercedes-Benz, Rolex, and Patagonia exemplify quality positioning."
    },
    {
      term: "Service Positioning",
      definition: "Differentiating primarily on customer service, support, and customer experience rather than product features. Service positioning works when products are commoditized but service quality varies significantly. Companies like Zappos, Nordstrom, and Ritz-Carlton built their positioning around service excellence, making support and experience the primary differentiation."
    },
    {
      term: "Strategic Positioning",
      definition: "How a company positions itself for long-term competitive advantage and sustainable differentiation. Strategic positioning focuses on durable differentiators that are difficult for competitors to copy, such as proprietary technology, unique business models, network effects, or deep customer relationships. It contrasts with tactical positioning for specific campaigns or short-term initiatives."
    },
    {
      term: "Sustainable Competitive Advantage",
      definition: "Advantages that are difficult for competitors to copy or overcome, allowing you to maintain superior positioning long-term. Sustainable advantages come from barriers like patents, brand equity, switching costs, network effects, unique data, culture, or scale. Positioning based on sustainable advantages is more defensible than positioning based on features competitors can quickly replicate."
    },
    {
      term: "Tactical Positioning",
      definition: "Short-term positioning decisions for specific campaigns, product launches, or market situations. Tactical positioning adapts your core strategic positioning to specific contexts, audiences, or competitive situations. While strategic positioning provides the foundation, tactical positioning allows flexibility to emphasize different benefits or differentiators based on immediate needs."
    },
    {
      term: "Thought Leadership",
      definition: "Positioning yourself or your company as an expert, innovator, and trusted authority in your domain. Thought leadership positioning is built through original research, insights, content, speaking, and ideas that advance the industry's thinking. Strong thought leadership makes your brand the go-to resource and can differentiate even when products are similar to competitors."
    }
  ];

  const sections = [
    {
      title: "Positioning vs. Related Concepts",
      items: [
        {
          concept: "Positioning vs. Differentiation",
          explanation: "Differentiation is what makes your product unique (features, attributes, capabilities). Positioning is how you want customers to perceive that uniqueness (the place you occupy in their minds). Differentiation focuses on the product; positioning focuses on perception."
        },
        {
          concept: "Positioning vs. Branding",
          explanation: "Branding defines who you are (identity, personality, values). Positioning defines why customers should care (relevance, differentiation, value). Branding asks 'who are we?' Positioning asks 'why should they choose us?' Both work together but serve different purposes."
        },
        {
          concept: "Positioning vs. Messaging",
          explanation: "Positioning is the strategic foundation (what you stand for, who you serve, why you're different). Messaging is the tactical execution (how you communicate that positioning across channels). Positioning comes first and informs all messaging decisions."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Complete Positioning Glossary: 50+ Terms Defined | Positioning Expert</title>
        <meta name="description" content="Comprehensive positioning glossary with 50+ essential terms defined. Learn positioning terminology from positioning statements to frameworks, differentiation, value propositions, and more." />
        <meta name="keywords" content="positioning glossary, positioning terms, positioning definitions, positioning terminology, positioning dictionary, positioning concepts, market positioning glossary" />

        <meta property="og:title" content="Complete Positioning Glossary | Positioning Expert" />
        <meta property="og:description" content="The most comprehensive positioning glossary available. 50+ terms defined clearly for marketers, founders, and positioning professionals." />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "name": "Positioning Glossary",
            "description": "Comprehensive glossary of positioning terminology and concepts",
            "hasDefinedTerm": terms.map(term => ({
              "@type": "DefinedTerm",
              "name": term.term,
              "description": term.definition
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">

          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Positioning Glossary
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Your complete guide to positioning terminology. Essential definitions for marketers, founders, and positioning experts.
            </p>
          </div>

          {/* Core Terms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Core Positioning Terms</h2>
            <div className="space-y-6">
              {terms.map((item, index) => (
                <div
                  key={index}
                  className="border border-cyan-400/20 rounded-lg p-6 bg-cyan-500/5 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-cyan-400">{item.term}</h3>
                  <p className="text-white/80 leading-relaxed text-lg">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Understanding the Differences</h2>
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-cyan-400/20 rounded-lg p-6 bg-cyan-500/5 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-white">{item.concept}</h3>
                      <p className="text-white/80 leading-relaxed">{item.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/positioning-framework-guide"
                className="border border-cyan-400/20 rounded-lg p-6 bg-cyan-500/5 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]"
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Positioning Framework Guide</h3>
                <p className="text-white/80">Compare 7 proven positioning frameworks and choose the right methodology for your business.</p>
              </a>
              <a
                href="/positioning-mistakes"
                className="border border-cyan-400/20 rounded-lg p-6 bg-cyan-500/5 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]"
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Common Positioning Mistakes</h3>
                <p className="text-white/80">Learn the 12 most common positioning mistakes and how to avoid them in your strategy.</p>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 border border-cyan-400/30 rounded-lg bg-cyan-500/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply These Concepts?</h2>
            <p className="text-xl text-white/70 mb-8">
              Talk to Edward, our AI positioning intelligence agent, or explore more positioning resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-4 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-white font-medium hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.35)]"
              >
                Try Edward AI Agent
              </a>
              <a
                href="/faq"
                className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                View FAQ
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

export default PositioningGlossary;
