import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOS | Chats",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
