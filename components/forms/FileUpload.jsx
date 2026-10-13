import React from "react";

/** Radius UI — FileUpload. Dashed drop zone with icon, prompt, and hint. */
export function FileUpload({
  accept, multiple = false, disabled = false, state = "default",
  title = "Drop files here or click to browse",
  hint = "PDF, DOCX, PNG, JPG up to 10 MB",
  icon,
  onFiles,
  className = "", ...rest
}) {
  const inputRef = React.useRef(null);
  const [drag, setDrag] = React.useState(false);
  const st = state === "default" && drag ? "drag" : state;
  const cls = ["rds-upload", `rds-upload--${st}`, disabled && "is-disabled", className].filter(Boolean).join(" ");
  const handle = (files) => { if (files && onFiles) onFiles(Array.from(files)); };
  return (
    <div className={cls} {...rest}
      onDragOver={(e) => { e.preventDefault(); if (!disabled) setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); if (!disabled) handle(e.dataTransfer.files); }}
      onClick={() => !disabled && inputRef.current?.click()}
      role="button" tabIndex={disabled ? -1 : 0}
    >
      <input ref={inputRef} type="file" accept={accept} multiple={multiple} disabled={disabled}
        style={{ display: "none" }} onChange={(e) => handle(e.target.files)} />
      <div className="rds-upload__icon" aria-hidden="true">
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 15V4M12 4l-4 4M12 4l4 4M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div className="rds-upload__title">{title}</div>
      {hint && <div className="rds-upload__hint">{hint}</div>}
    </div>
  );
}
