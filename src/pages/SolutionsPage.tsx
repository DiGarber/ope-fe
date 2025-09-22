import { containerStyles, textStyles } from "../styles/components";

const SolutionsPage = () => {
  return (
    <div className={containerStyles.section}>
      <div className={containerStyles.base}>
        <div className="text-center">
          <h1 className={`${textStyles.heading1} mb-8`}>
            Our <span className={textStyles.accent}>Solutions</span>
          </h1>
          <p className={`${textStyles.subtitle} max-w-4xl mx-auto`}>
            Coming soon - Discover our comprehensive security solutions for open
            source dependencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
