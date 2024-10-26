export function LandingPageLinks() {
  const links = [
    {
      name: "How it works",
    },
    {
      name: "Pricing",
    },
  ];

  return (
    <div className="hidden justify-center items-center gap-4 md:flex">
      {links.map((link) => (
        <p className="text-base font-" key={link.name}>
          {link.name}
        </p>
      ))}
    </div>
  );
}
