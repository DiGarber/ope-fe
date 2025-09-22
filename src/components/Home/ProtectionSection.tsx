import { containerStyles, textStyles, cardStyles } from "../../styles/components";
import { Search, AlertCircle, Handshake } from "lucide-react";

const ProtectionSection = () => {
  const services = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 text-accent-pink" />,
      title: "We Analyze",
      description:
        "We score your open source dependencies, measuring community strength, maintainer expertise, and supply chain integrity.",
    },
    {
      number: "02",
      icon: <AlertCircle className="w-8 h-8 text-accent-purple" />,
      title: "We Alert",
      description:
        "We send actionable, real-time alerts—detecting hidden risks, mapping CVEs, and clarifying exploitability with VEX to eliminate false positives.",
    },
    {
      number: "03",
      icon: <Handshake className="w-8 h-8 text-accent-pink" />,
      title: "We Partner",
      description:
        "For your most critical dependencies, we provide direct support, collaborating with maintainers, hardening projects, and ensuring long-term security and sustainability.",
    },
  ];

  const riskScoreData = {
    score: 56,
    reasons: [
      "Supply chain attacks increased 650% in 2022",
      "74% of vulnerabilities are in dependencies, not first-party",
      "Abandoned projects used across major software stacks",
    ],
    analysis: [
      "Community Health",
      "Security Practices",
      "Supply Chain Integrity",
    ],
  };

  return (
    <section
      className={containerStyles.section}
      aria-label="Protection services"
    >
      <div className={containerStyles.base}>
        <div className="text-center mb-16">
          <h2 className={`${textStyles.heading2} mb-8`}>Let Us Protect You</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Services */}
          <div className="lg:col-span-2 space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group"
                role="region"
                aria-label={`Service: ${service.title}`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`${textStyles.accent} text-6xl font-bold mb-4`}
                  >
                    {service.number}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className={`${textStyles.heading3} text-white`}>
                      {service.title}
                    </h3>
                  </div>

                  <p className={`${textStyles.body} text-lg leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Score Card */}
          <div className="lg:col-span-1">
            <div className={`${cardStyles.gradient} h-fit sticky top-24`}>
              <div className="text-center">
                <h3 className={`${textStyles.heading3} text-white mb-8`}>
                  RISK SCORE
                </h3>

                {/* Circular Progress */}
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <svg
                    className="w-40 h-40 transform -rotate-90"
                    viewBox="0 0 144 144"
                  >
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 60}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 60 * (1 - riskScoreData.score / 100)
                      }`}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">
                        {riskScoreData.score}%
                      </div>
                      <div className="text-sm text-gray-300">SCORE</div>
                    </div>
                  </div>
                </div>

                {/* Why This Score Matters */}
                <div className="text-left mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Why This Score Matters
                  </h4>
                  <ul className="space-y-2" role="list">
                    {riskScoreData.reasons.map((reason, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We Analyze */}
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    What We Analyze
                  </h4>
                  <ul className="space-y-2" role="list">
                    {riskScoreData.analysis.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-accent-pink flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-3">
          <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-1 bg-accent-pink rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
