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
    title: 'Pick a look, I build it',
    price: 'from $600',
    blurb:
      'Start from any preset in the console, tell me the vibe, and I ship it — designed, built, and live on your domain. Fast, accessible, SEO-ready.',
    cta: 'Start a build',
  },
  {
    title: 'Fully custom design',
    price: 'project-based',
    blurb:
      'A one-of-a-kind site with its own vibe, layout, type and motion — everything you see here is a starting point, not a limit.',
    cta: 'Scope a project',
  },
  {
    title: 'Design system & handoff',
    price: 'let’s talk',
    blurb:
      'Want just the tokens? I hand you a clean, documented CSS/design-token system your team can build on — the same engine that powers this page.',
    cta: 'Talk tokens',
  },
];
