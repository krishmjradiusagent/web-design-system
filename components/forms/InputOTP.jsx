import React from "react";

/** Radius UI — InputOTP. Fixed-length one-time-code entry; auto-advances. */
export function InputOTP({ length = 6, value = "", onChange, className = "" }) {
  const refs = React.useRef([]);
  const chars = value.padEnd(length).slice(0, length).split("");
  const setChar = (i, c) => {
    const next = chars.map((x, j) => (j === i ? c : x)).join("").trimEnd();
    onChange && onChange(next);
    if (c && refs.current[i + 1]) refs.current[i + 1].focus();
  };
  return (
    <div className={["rds-otp", className].filter(Boolean).join(" ")}>
      {Array.from({ length }).map((_, i) => (
        <input key={i} ref={(el) => (refs.current[i] = el)} inputMode="numeric" maxLength={1}
          value={chars[i]?.trim() || ""} onChange={(e) => setChar(i, e.target.value.slice(-1))}
          onKeyDown={(e) => { if (e.key === "Backspace" && !chars[i]?.trim() && refs.current[i - 1]) refs.current[i - 1].focus(); }} />
      ))}
    </div>
  );
}
