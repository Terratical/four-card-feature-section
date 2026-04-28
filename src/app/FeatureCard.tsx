import clsx from "clsx";

type FeatureCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  borderColor: string;
  position: string;
};

export function FeatureCard({
  title,
  description,
  iconSrc,
  borderColor,
  position,
}: FeatureCardProps) {
  return (
    <li
      key={title}
      className={clsx(
        "rounded-lg border-t-4 p-8 shadow-xl/30 shadow-blue-300",
        position,
      )}
      style={{ borderTopColor: borderColor }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl leading-[1.35] font-semibold">{title}</h3>
          <p className="text-xs leading-[1.6] text-black/50">{description}</p>
        </div>
        <img
          src={iconSrc}
          alt={title}
          width={64}
          height={64}
          className="ml-auto"
        />
      </div>
    </li>
  );
}
