import React from 'react';
import { Helmet } from 'react-helmet';
import AnimatedBackground from '@/components/voice/AnimatedBackground';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Troy Assoignon | Positioning Expert & Strategic Brand Advisor</title>
        <meta name="description" content="Troy Assoignon is a positioning expert with 15+ years of experience. $62.7M in client results. Specializes in strategic brand positioning, market differentiation, and investor-ready positioning for ambitious companies." />
        <meta name="keywords" content="Troy Assoignon, positioning expert, positioning strategist, brand positioning, strategic positioning, positioning consultant" />

        <meta property="og:title" content="Troy Assoignon | Positioning Expert" />
        <meta property="og:description" content="Positioning expert with 15+ years of experience. $62.7M in documented client results. Strategic brand positioning and market differentiation." />
        <meta property="og:type" content="profile" />

        {/* Person Schema for E-E-A-T */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Troy Assoignon",
            "url": "https://troyassoignon.com",
            "jobTitle": "Positioning Expert",
            "description": "Strategic positioning expert specializing in brand positioning, market differentiation, and go-to-market strategy",
            "knowsAbout": [
              "Positioning Strategy",
              "Brand Positioning",
              "Market Differentiation",
              "Go-To-Market Strategy",
              "Strategic Communications",
              "Competitive Positioning",
              "Investor-Ready Positioning",
              "Premium Pricing Strategy",
              "Category Leadership"
            ],
            "alumniOf": "15+ years of positioning experience",
            "award": "2nd Place - ElevenLabs AI Hackathon (Positioning Agent)",
            "sameAs": [
              "https://troyassoignon.com"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Troy Assoignon
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-4">
              Positioning Expert & Strategic Brand Advisor
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              15+ years of experience helping ambitious companies define and own their market position
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="border border-cyan-400/20 rounded-lg p-8 bg-cyan-500/5 backdrop-blur-md text-center shadow-[0_0_30px_rgba(0,255,255,0.15)]">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$62.7M</div>
              <div className="text-white/70">Client Results</div>
            </div>
            <div className="border border-cyan-400/20 rounded-lg p-8 bg-cyan-500/5 backdrop-blur-md text-center shadow-[0_0_30px_rgba(0,255,255,0.15)]">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="border border-cyan-400/20 rounded-lg p-8 bg-cyan-500/5 backdrop-blur-md text-center shadow-[0_0_30px_rgba(0,255,255,0.15)]">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white/70">Companies Positioned</div>
            </div>
          </div>

          {/* Background */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Background</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                Troy Assoignon brings a unique perspective to positioning strategy, combining 15 years of strategic experience with a builder's mentality. Starting his career in construction, where by age 23 he was managing crews and handling substantial payrolls, Troy learned the fundamentals of project management: scope the work, align the talent, and ship on time.
              </p>
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                That same rigor now defines his approach to positioning. Troy doesn't just advise. He builds positioning frameworks that drive measurable business outcomes.
              </p>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Core Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Strategic Brand Positioning",
                  description: "Defining unique market positions that differentiate from competitors and resonate with ideal customers"
                },
                {
                  title: "Market Differentiation & Category Leadership",
                  description: "Creating competitive separation and establishing category authority in crowded markets"
                },
                {
                  title: "Executive Positioning",
                  description: "Developing thought leadership and authority positioning for C-suite executives and founders"
                },
                {
                  title: "Investor-Ready Positioning",
                  description: "Crafting compelling narratives for fundraising and M&A that command premium valuations"
                },
                {
                  title: "Premium Pricing Strategy",
                  description: "Positioning frameworks that justify and enable premium pricing models"
                },
                {
                  title: "AI-Driven Positioning Intelligence",
                  description: "Leveraging AI to scale positioning expertise and accelerate market insights"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-cyan-400/20 rounded-lg p-6 bg-cyan-500/5 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Notable Achievements</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">Real Estate Fund Positioning → $4.5M Raised</h3>
                <p className="text-white/70">
                  Engineered a compelling narrative for a real estate fund that resonated with investors, resulting in $4.5M in capital raised.
                </p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">ElevenLabs AI Hackathon - 2nd Place</h3>
                <p className="text-white/70">
                  Won 2nd place for creating Edward, an AI-powered positioning intelligence agent that democratizes access to positioning expertise.
                </p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">Humanitarian Initiative Leadership</h3>
                <p className="text-white/70">
                  Led positioning and communications for a humanitarian initiative that generated $619K and successfully evacuated 2,750 women and children.
                </p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">$62.7M in Documented Client Results</h3>
                <p className="text-white/70">
                  Strategic positioning work has directly contributed to over $62.7M in measurable client outcomes including revenue growth, successful fundraising, and market expansion.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Positioning Philosophy</h2>
            <div className="border border-cyan-400/30 rounded-lg p-8 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed">
                "Troy's method is construction grade. Scope the work. Manage the project. Align the talent. Ship on time."
              </blockquote>
              <p className="text-white/70 mt-6 text-lg">
                Positioning isn't about clever taglines. It's strategic infrastructure. Like a well-built foundation, strong positioning supports everything else: sales, marketing, product development, and investor relations. Troy approaches positioning with the same rigor he brought to construction projects: clear scope, disciplined execution, and measurable outcomes.
              </p>
            </div>
          </div>

          {/* Edward Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Edward: AI-Powered Positioning Intelligence</h2>
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              Recognizing that not every company can afford traditional positioning consulting, Troy created Edward, an AI-powered positioning intelligence agent that provides instant access to strategic positioning guidance. Edward combines proven positioning methodologies with AI capabilities to democratize positioning expertise.
            </p>
            <p className="text-white/80 leading-relaxed text-lg">
              Edward represents Troy's vision: making world-class positioning intelligence accessible to any company, at any stage, anywhere in the world.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center p-12 border border-cyan-400/30 rounded-lg bg-cyan-500/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <h2 className="text-3xl font-bold mb-4">Work With Troy</h2>
            <p className="text-xl text-white/70 mb-8">
              Ready to define your positioning and own your market?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://troyassoignon.com/contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-white font-medium hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.35)]"
              >
                Contact Troy
              </a>
              <a
                href="/"
                className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                Try Edward AI Agent
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

export default About;
