export default function SectionDividerSvg({
  color = "#0e0b09", // тёмный фон
  flip = false,
  height = 90,
}: Readonly<{ color?: string; flip?: boolean; height?: number }>) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`} style={{ height }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        {/* «рваная» линия — набор рваных волн */}
        <path
          d="M0,60 L80,70 160,50 220,80 300,40 360,85 430,55 500,90 570,45 640,80 720,52 800,88 880,50 960,78 1040,58 1120,82 1200,60 1200,120 0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
