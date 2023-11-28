import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOS | Register",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
