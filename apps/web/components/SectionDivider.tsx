type Props = {
  variant?: "dark" | "light"; // какой файл брать
  flip?: boolean;             // отзеркалить (для верха/низа)
  height?: number;            // высота в px
  className?: string;
};

export default function SectionDivider({
  variant = "dark",
  flip = false,
  height = 80,
  className = "",
}: Readonly<Props>) {
  const url =
    variant === "light"
      ? "/decors/torn-light.png"
      : "/decors/torn-dark.png";

  return (
    <div
      aria-hidden
      className={`relative w-full -mt-6 select-none pointer-events-none ${flip ? "scale-y-[-1]" : ""} ${className}`}
      style={{
        height,
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    />
  );
}
