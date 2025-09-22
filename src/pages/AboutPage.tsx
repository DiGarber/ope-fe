import { containerStyles, textStyles } from "../styles/components";

const AboutPage = () => {
  return (
    <div className={containerStyles.section}>
      <div className={containerStyles.base}>
        <div className="text-center">
          <h1 className={`${textStyles.heading1} mb-8`}>
            About <span className={textStyles.accent}>Us</span>
          </h1>
          <p className={`${textStyles.subtitle} max-w-4xl mx-auto`}>
            Coming soon - Learn more about our mission to secure the open source
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
