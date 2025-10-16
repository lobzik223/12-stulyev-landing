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
        {/* Красивая рваная линия с кривыми Безье */}
        <path
          d="M0,60 Q30,45 60,65 Q90,85 120,70 Q150,50 180,75 Q210,90 240,60 Q270,30 300,55 Q330,80 360,65 Q390,40 420,70 Q450,95 480,65 Q510,35 540,70 Q570,90 600,60 Q630,30 660,55 Q690,80 720,65 Q750,40 780,70 Q810,95 840,65 Q870,35 900,70 Q930,90 960,60 Q990,30 1020,55 Q1050,80 1080,65 Q1110,40 1140,70 Q1170,95 1200,60 L1200,120 0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}