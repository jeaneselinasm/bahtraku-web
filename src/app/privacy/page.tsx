import { PrivacyContent } from "@/components/PrivacyContent";

// The wording lives in src/content/dictionary.ts under "privacy" (English and Indonesian).
export const metadata = { title: "Privacy policy / Kebijakan privasi" };

export default function PrivacyPage() {
  return <PrivacyContent />;
}