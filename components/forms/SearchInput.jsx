import React from "react";

/** Radius UI — SearchInput. Input with leading search icon and optional clear button. */
export function SearchInput({ value = "", onChange, onClear, placeholder = "Search…", size = "default", className = "", ...rest }) {
  const cls = ["rds-search", size !== "default" && `rds-search--${size}`, className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <svg className="rds-search__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <input className="rds-search__input" type="search" value={value} placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value, e)} {...rest} />
      {value && (
        <button type="button" className="rds-search__clear" aria-label="Clear"
          onClick={() => { onClear ? onClear() : onChange && onChange("", null); }}>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      )}
    </div>
  );
}
