import Image from "next/image";

interface LandingPageSectionProps extends React.ComponentProps<"section"> {
  title: string;
  subtitle: string;
  image?: string;
}

export function LandingPageSection({
  title,
  subtitle,
  image,
  ...props
}: LandingPageSectionProps) {
  return (
    <section
      className="flex flex-col lg:flex-row p-3 justify-between lg:w-full text-left items-center mt-"
      {...props}
    >
      <div className="flex flex-col gap-3 w-full">
        <h1 className="font-semibold text-3xl lg:px-10">{title}</h1>
        <p className="font-light text-xl lg:px-10">{subtitle}</p>
      </div>
      <div className="flex gap-4 w-full justify-between items-center">
        <Image
          src={image ?? ""}
          alt="section_image"
          className={image || "hidden"}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
// An easy way to get your team up to date.
// TaskApp is an easy way to get your team up to date. You can create your own workspace, or join an existing one.
