import React from "react";
import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEST.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
