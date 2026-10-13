import React from "react";
import { Icon } from "../../icons/Icon.jsx";
/** Radius UI — kit family "Phosphor Icon / ChatsCircle". Materialized 1:1 from the Figma file. (Phosphor glyph, rendered from the Lucide-equivalent path.) */
export function PhosphorIconChatscircle({ size = 20, color = "currentColor", className = "", ...rest }) {
  return <Icon name="message-circle" size={size} color={color} className={className} {...rest} />;
}
