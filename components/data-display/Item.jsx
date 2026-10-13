import React from "react";

/** Radius UI — Item. A media + title/description + actions row; the building
 *  block for lists, settings rows, and pickers. */
export function Item({ media = null, title, description, actions = null, variant = "plain", className = "", ...rest }) {
  const isButton = variant === "button";
  const cls = ["rds-item", variant === "bordered" && "rds-item--bordered", isButton && "rds-item--button", className].filter(Boolean).join(" ");
  const inner = (
    <>
      {media && <span className="rds-item__media">{media}</span>}
      <span className="rds-item__content">
        {title && <span className="rds-item__title" style={{ display: "block" }}>{title}</span>}
        {description && <span className="rds-item__desc" style={{ display: "block" }}>{description}</span>}
      </span>
      {actions && <span className="rds-item__actions">{actions}</span>}
    </>
  );
  return isButton ? <button className={cls} {...rest}>{inner}</button> : <div className={cls} {...rest}>{inner}</div>;
}
