import React from "react";

/** Radius UI — Card. 14px radius, 1px border, subtle shadow, 24px padding.
 *  Compose with the sub-parts or pass title/description shorthands. */
export function Card({ title, description, footer, className = "", children, ...rest }) {
  return (
    <div className={["rds-card", className].filter(Boolean).join(" ")} {...rest}>
      {(title || description) && (
        <div className="rds-card__header">
          {title && <h3 className="rds-card__title">{title}</h3>}
          {description && <p className="rds-card__desc">{description}</p>}
        </div>
      )}
      {children && <div className="rds-card__body">{children}</div>}
      {footer && <div className="rds-card__footer">{footer}</div>}
    </div>
  );
}
export function CardHeader({ className = "", ...p }) { return <div className={["rds-card__header", className].join(" ")} {...p} />; }
export function CardTitle({ className = "", ...p }) { return <h3 className={["rds-card__title", className].join(" ")} {...p} />; }
export function CardDescription({ className = "", ...p }) { return <p className={["rds-card__desc", className].join(" ")} {...p} />; }
export function CardBody({ className = "", ...p }) { return <div className={["rds-card__body", className].join(" ")} {...p} />; }
export function CardFooter({ className = "", ...p }) { return <div className={["rds-card__footer", className].join(" ")} {...p} />; }
