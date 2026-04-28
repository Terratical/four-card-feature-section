import { FeatureCard } from "./FeatureCard";
import clsx from "clsx";

const features = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    iconSrc: "images/icon-supervisor.svg",
    borderColor: "#44D3D2",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    iconSrc: "images/icon-team-builder.svg",
    borderColor: "#EA5454",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    iconSrc: "images/icon-karma.svg",
    borderColor: "#FCAE4A",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    iconSrc: "images/icon-calculator.svg",
    borderColor: "#549EF2",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center gap-14 pt-15 pb-12">
      <header className="flex max-w-80 flex-col gap-8 text-center md:max-w-lg">
        <h1 className="flex flex-col text-2xl md:text-4xl">
          <span className="font-light">Reliable, efficient delivery</span>
          <span className="font-bold">Powered by Technology</span>
        </h1>
        <p className="leading-[1.4] text-[#4D4F62]">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main>
        <ul
          className={clsx(
            "grid grid-cols-[minmax(0,min(80%,320px))] place-items-center justify-center gap-8",
            "md:grid-cols-[repeat(2,minmax(0,320px))] md:[grid-template-areas:'T_T''M1_M2''B_B']",
            "lg:grid-cols-3 lg:[grid-template-areas:'L_M1_R''L_M2_R']",
          )}
        >
          {features[0] && (
            <FeatureCard
              key={features[0].title}
              {...features[0]}
              position={clsx(
                "md:[grid-area:M1] md:max-w-80",
                "lg:[grid-area:L]",
              )}
            />
          )}
          {features[1] && (
            <FeatureCard
              key={features[1].title}
              {...features[1]}
              position={clsx(
                "md:[grid-area:T] md:max-w-80",
                "lg:[grid-area:M1]",
              )}
            />
          )}
          {features[2] && (
            <FeatureCard
              key={features[2].title}
              {...features[2]}
              position={clsx(
                "md:[grid-area:M2] md:max-w-80",
                "lg:[grid-area:M2]",
              )}
            />
          )}
          {features[3] && (
            <FeatureCard
              key={features[3].title}
              {...features[3]}
              position={clsx(
                "md:[grid-area:B] md:max-w-80",
                "lg:[grid-area:R]",
              )}
            />
          )}
        </ul>
      </main>
    </div>
  );
}
