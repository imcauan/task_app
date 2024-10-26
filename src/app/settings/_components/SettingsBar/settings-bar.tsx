import { SettingsBarLink } from "../SettingsBarLink/settings-bar-link";
import { settingsLinks } from "./links";

export function SettingsBar() {
  return (
    <div className="flex flex-col gap-4 px-10 lg:border-r min-w-64">
      <h1 className="text-xl font-semibold mt-10 ">Settings</h1>
      {settingsLinks.map((link) => (
        <SettingsBarLink key={link.text} link={link} href={link.href} />
      ))}
    </div>
  );
}
