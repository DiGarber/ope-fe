import { containerStyles, textStyles, cardStyles } from "../../styles/components";
import { AlertTriangle, DollarSign, Pause } from "lucide-react";

const Log4ShellSection = () => {
  const damageCategories = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-accent-pink" />,
      title: "Reputational Damage",
      items: [
        "Damaged brand reputation.",
        "Consumer trust erosion.",
        "Negative press and public scrutiny.",
      ],
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent-pink" />,
      title: "Financial Devastation",
      items: [
        "$700M+ legal exposure established.",
        "$90,000+ average direct cost per breach.",
        'Massive overtime for 24/7 "war rooms".',
      ],
    },
    {
      icon: <Pause className="w-12 h-12 text-accent-pink" />,
      title: "Operational Paralysis",
      items: [
        "Up to 3,300 developer hours lost.",
        "All innovation halted.",
        "29% recurrence rate forced costly rework cycles.",
      ],
    },
  ];

  return (
    <section
      className={containerStyles.section}
      aria-label="Log4Shell case study"
    >
      <div className={containerStyles.base}>
        <div className="text-center mb-16">
          <h2 className={`${textStyles.heading2} mb-8`}>
            Do You Remember{" "}
            <span className={textStyles.accent}>Log4Shell?</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className={`${textStyles.subtitle} mb-4`}>
              In December 2021, Log4Shell (CVE-2021-44228) exposed millions of
              Java-based systems worldwide. A single logging library triggered a
              global cybersecurity crisis with catastrophic consequences.
            </p>
          </div>
        </div>

        {/* Damage Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {damageCategories.map((category, index) => (
            <div
              key={index}
              className={`${cardStyles.gradient} group hover:scale-105 transition-all duration-300`}
              role="region"
              aria-label={`Damage category: ${category.title}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                <h3
                  className={`${textStyles.heading3} ${textStyles.accent} mb-6`}
                >
                  {category.title}
                </h3>

                <ul className="space-y-4" role="list">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`${textStyles.body} text-left`}
                    >
                      <span className="text-accent-pink mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`${textStyles.subtitle} max-w-2xl mx-auto`}>
            Don't let your organization be the next case study.
          </p>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-1 bg-accent-pink rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Log4ShellSection;
