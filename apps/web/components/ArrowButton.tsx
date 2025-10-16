export default function ArrowButton({
  dir = "left",
  onClick
}: Readonly<{ dir?: "left" | "right"; onClick?: () => void }>) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Назад" : "Вперёд"}
      className="group grid place-items-center h-14 w-14 rounded-full border-2 border-[#D4AF37]/30 text-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
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
