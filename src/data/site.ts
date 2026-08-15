// Central site identity + offerings for the customization/sale site.
// No personal info here — this is a product site. Placeholders marked TODO.

export const site = {
  name: 'Web Studio',
  handle: 'web studio',
  role: 'Website design, your way',
  // the pitch: the site restyles under the visitor's hands
  tagline: 'A website in any style you can imagine — customize this one live, then make it yours.',
  location: '',
  email: 'hello@example.com', // TODO: real contact address
  links: {
    // personal links removed — add business/social links here when ready
  },
  // marquee band — what the studio does
  stack: [
    'Any vibe', 'Live fonts', 'Color systems', 'Six layouts', 'Motion & effects',
    'Responsive', 'Fast (~100 KB)', 'SEO-ready', 'Export CSS', 'Your domain',
  ],
};

// Curated example sites to feature at the bottom (add more as you build them).
export const showcase = [
  { name: 'Traditions', href: 'https://bwj95.github.io/traditions/', note: 'calm wellness guide' },
  // TODO: add more sites here as links, e.g.
  // { name: 'Your Site', href: 'https://…', note: 'one-line description' },
];

// What can be bought / hired — the sales surface (customization-focused).
export const offerings = [
  {
    title: 'Visual Preset Blueprint',
    price: 'Standard Token Set',
    blurb:
      'Configure layout patterns, responsive rules, corner ratios, and font scales from any console preset to establish a design system baseline.',
    cta: 'Configure baseline',
  },
  {
    title: 'Bespoke Design System',
    price: 'Custom Token Spec',
    blurb:
      'Develop custom token sets, typography curves, custom WebGL canvas simulations, and motion dynamics tailored to a specific brand system.',
    cta: 'Draft system spec',
  },
  {
    title: 'CSS/JSON Token Export',
    price: 'Raw CSS/JSON',
    blurb:
      'Extract the active configurations directly from the theme console as documented, portable CSS variables or JSON theme specifications.',
    cta: 'Copy design tokens',
  },
];
