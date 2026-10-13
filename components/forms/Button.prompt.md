Radius UI Button — the primary action control. Use exactly one indigo `default` button per surface; everything else is `secondary`, `outline`, or `ghost`. Sentence case labels, compact by default.

```jsx
<Button>Save changes</Button>
<Button variant="outline" leftIcon={<Icon name="plus" />}>Add client</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button iconOnly aria-label="More"><Icon name="ellipsis" /></Button>
```

Variants: default · secondary · outline · ghost · destructive · link. Sizes: sm (28) · default (32) · lg (40). `iconOnly` makes it square; `block` makes it full-width.
