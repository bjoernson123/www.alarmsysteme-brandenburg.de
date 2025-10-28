export function AlarmBellIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* House outline */}
      <path
        d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9 21 9 18 9 16.5C9 15 10 14 12 14C14 14 15 15 15 16.5C15 18 15 21 15 21M9 21H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bell */}
      <path
        d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9V10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10V9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bell clapper */}
      <line x1="12" y1="12" x2="12" y2="13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
