import { containerStyles, textStyles } from "../../styles/components";
import { Shield, Code, Users } from "lucide-react";

const HeroSection = () => {
  const statistics = [
    {
      icon: <Users className="w-8 h-8 text-accent-pink" />,
      percentage: "90%",
      description: "of companies are using open source projects",
    },
    {
      icon: <Code className="w-8 h-8 text-accent-purple" />,
      percentage: "76%",
      description: "of code in codebases is open source",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent-pink" />,
      percentage: "60%",
      description: "of maintainers are not paid for their work",
    },
  ];

  return (
    <section
      className={`${containerStyles.section} relative overflow-hidden`}
      aria-label="Hero section"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>

      <div className={`${containerStyles.base} relative z-10`}>
        <div className="text-center">
          {/* Main Heading */}
          <h1 className={`${textStyles.heading1} mb-8 leading-tight`}>
            What's The Cost Of Using <br className="hidden sm:block" />
            Open Source <span className={textStyles.accent}>Blindly?</span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className={`${textStyles.subtitle} mb-4`}>
              Open source is powerful — but it also opens the door to supply
              chain attacks.
            </p>
            <p className={textStyles.subtitle}>
              Too often, essential libraries are maintained by just a handful of
              volunteers without the resources to keep them secure.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="gradient-border group hover:scale-105 transition-all duration-300"
                role="region"
                aria-label={`Statistic: ${stat.description}`}
              >
                <div className="gradient-border-inner p-8 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div
                    className={`${textStyles.heading2} ${textStyles.accent} mb-3`}
                  >
                    {stat.percentage}
                  </div>
                  <p className={textStyles.body}>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-3 mt-16">
            <div className="w-8 h-1 bg-accent-pink rounded-full"></div>
            <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
