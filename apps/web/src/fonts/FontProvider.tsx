import localFont from "next/font/local";
import clsx from "clsx";

const dmSans = localFont({
  src: [
    {
      path: "./DM_Sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./DM_Sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DM_Sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-dm-sans",
});

const shrikhand = localFont({
  src: [
    {
      path: "./Shrikhand/Shrikhand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  fallback: ["serif"],
  variable: "--font-shrikhand",
});

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="__app" className={clsx(dmSans.variable, shrikhand.variable)}>
      {children}
    </div>
  );
}
