export default function ArrowButton({
  dir = "left",
  onClick
}: Readonly<{ dir?: "left" | "right"; onClick?: () => void }>) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Назад" : "Вперёд"}
      className="grid place-items-center h-12 w-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white transition"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {dir === "left" ? (
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        ) : (
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        )}
      </svg>
    </button>
  );
}
