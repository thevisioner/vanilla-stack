import localFont from "next/font/local";
import clsx from "clsx";

const inter = localFont({
  src: [
    {
      path: "./Inter/Inter-VariableFont_slnt,wght.ttf",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-inter",
});

const lexend = localFont({
  src: [
    {
      path: "./Lexend/Lexend-VariableFont_wght.ttf",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-lexend",
});

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="__app" className={clsx(inter.variable, lexend.variable)}>
      {children}
    </div>
  );
}
