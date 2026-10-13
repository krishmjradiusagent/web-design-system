import React from "react";

/** Radius UI — Header. App top bar with brand wordmark on the left and an
 *  account menu button on the right (avatar + name/email + chevrons). Pass a
 *  custom `brand` node to swap the logo; pass `onAccountClick` to open a menu. */
export function Header({
  brand,
  brandHref = "#",
  brandSrc = "assets/logo-wordmark-ink.svg",
  brandAlt = "Radius home",
  user,
  onAccountClick,
  accountMenu,
  right,
  className = "",
  style = {},
  ...rest
}) {
  const initials = user?.initials
    || (user?.name ? user.name.split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase() : "");
  return (
    <header className={["rds-header", className].filter(Boolean).join(" ")} style={style} {...rest}>
      <a className="rds-header__brand" href={brandHref} aria-label={brandAlt}>
        {brand || <img src={brandSrc} alt={brandAlt} />}
      </a>
      {right}
      {user && (
        <button
          type="button"
          className="rds-header__account"
          aria-label={`Account menu for ${user.name || "user"}`}
          onClick={onAccountClick}
        >
          <span className="rds-header__avatar" aria-hidden="true">
            {user.avatarSrc ? <img src={user.avatarSrc} alt="" /> : <span>{initials}</span>}
          </span>
          <span className="rds-header__identity">
            <span className="rds-header__name">{user.name}</span>
            {user.email && <span className="rds-header__email">{user.email}</span>}
          </span>
          <svg className="rds-header__chevrons" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.667 6L8 2.667 11.333 6" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.667 10L8 13.333 11.333 10" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {accountMenu}
        </button>
      )}
    </header>
  );
}
