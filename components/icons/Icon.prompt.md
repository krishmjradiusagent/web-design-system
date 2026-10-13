Radius UI Icon — Lucide line icons, the Radius default. Use 16px in controls, 20 in nav, 24 in empty states. One library per surface; never emoji as icons.

```jsx
<Icon name="sparkles" size={20} />
<Icon name="arrow-right" />
<Button leftIcon={<Icon name="plus" />}>Add client</Button>
```

Names are kebab-case Lucide names. The registry in `icon-data.js` covers the glyphs used across Radius kits; load Lucide from CDN for the full set.
