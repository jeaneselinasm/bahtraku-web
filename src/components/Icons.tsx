export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 3c4 6 7 9 7 14a7 7 0 0 1-14 0c0-3 2-5 3-7 1 3 2 4 4 4-1-4-1-7 0-11z" fill="#F29A3A" />
      <path d="M5 26h30l-4 8H9z" fill="#1E5A8A" />
      <path d="M8 30h24" stroke="#F3F6F7" strokeWidth="1.5" />
    </svg>
  );
}

export function Flame({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 28) / 24} viewBox="0 0 24 28" aria-hidden="true">
      <path d="M12 1c3 5 6 8 6 13a6 6 0 0 1-12 0c0-3 2-5 3-7 1 3 2 4 3 4-1-4-1-7 0-10z" fill="#F29A3A" />
    </svg>
  );
}

export function Wave() {
  return (
    <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 70 C 180 20, 360 110, 540 70 S 900 20, 1080 70 S 1320 110, 1440 60 V120 H0z" fill="#0E2A3B" />
    </svg>
  );
}
