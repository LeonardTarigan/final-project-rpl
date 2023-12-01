import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOS | Profile",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
