import React from "react";

/** Radius UI — Avatar. Round, image or initials fallback, optional status dot. */
export function Avatar({ src, alt = "", initials, size = "default", status = null, className = "", ...rest }) {
  const cls = ["rds-avatar", size !== "default" && `rds-avatar--${size}`, className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={alt} /> : <span>{initials}</span>}
      {status && <span className="rds-avatar__status" style={status !== true ? { background: status } : undefined} />}
    </span>
  );
}

/** Overlapping stack of avatars. */
export function AvatarGroup({ children, className = "", ...rest }) {
  return <span className={["rds-avatar-group", className].filter(Boolean).join(" ")} {...rest}>{children}</span>;
}
