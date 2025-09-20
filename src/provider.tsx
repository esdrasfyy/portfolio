import { ProviderPreferences } from "./contexts/preferences.context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProviderPreferences>{children}</ProviderPreferences>;
}
