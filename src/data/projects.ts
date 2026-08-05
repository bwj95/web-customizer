// The "work" section on the customization site showcases WHAT YOU CAN CUSTOMIZE,
// not personal projects. Same card shape as before so every layout (grid / rail /
// index / stack / 3D / collage) and media mode still demos on them.

export type Kind = 'flagship' | 'hardware' | 'lab';
export type Status = 'live' | 'in-progress' | 'research';

export interface Project {
  id: string;
  name: string;
  kind: Kind;
  status: Status;
  tagline: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
  poster: { hue: number; glyph: string };
  image?: string;
  featured?: boolean;
}

// Each card = a customization capability. The console restyles these live.
export const projects: Project[] = [
  {
    id: 'vibes',
    name: 'Vibes',
    kind: 'flagship',
    status: 'live',
    tagline: 'Eight complete aesthetics, one click.',
    blurb:
      'Aurora glass, brutalist, editorial, neon, bento, kinetic, fresh, and cyber — the entire mood of the site (colors, surfaces, type, motion) swaps in real time.',
    tags: ['Aurora', 'Brutalist', 'Editorial', 'Neon', 'Cyber'],
    links: [],
    poster: { hue: 265, glyph: '◐' },
  },
  {
    id: 'layouts',
    name: 'Layouts',
    kind: 'flagship',
    status: 'live',
    tagline: 'Six ways to show your work.',
    blurb:
      'Grid, horizontal rail, editorial index with hover previews, stacking cards, a 3D coverflow, and a tilted collage — pick how your content is presented.',
    tags: ['Grid', 'Rail', 'Index', 'Stack', '3D', 'Collage'],
    links: [],
    poster: { hue: 200, glyph: '▦' },
  },
  {
    id: 'type',
    name: 'Typography',
    kind: 'flagship',
    status: 'live',
    tagline: 'Curated font pairings, live.',
    blurb:
      'Eight self-hosted typefaces — swap display and body on the fly, or start from a preset that pairs them for you. Fast, no external font calls.',
    tags: ['8 fonts', 'Self-hosted', 'Variable', 'Pairings'],
    links: [],
    poster: { hue: 320, glyph: 'Aa' },
  },
  {
    id: 'color',
    name: 'Color & effects',
    kind: 'flagship',
    status: 'live',
    tagline: 'Palettes and motion that impress.',
    blurb:
      'Seven accent systems (gradient or solid) applied everywhere via design tokens, plus parallax, a cursor-lit dot grid, magnetic buttons, text scramble and CRT scanlines.',
    tags: ['7 accents', 'Parallax', 'Cursor glow', 'Magnetic'],
    links: [],
    poster: { hue: 150, glyph: '✦' },
  },
  {
    id: 'presets',
    name: 'Presets & saved looks',
    kind: 'flagship',
    status: 'live',
    tagline: 'Start curated, then make it yours.',
    blurb:
      'Fifteen designer-made presets pair a vibe, fonts, colors and effects that go together — then save your own combinations to a personal library.',
    tags: ['15 presets', 'Save yours', 'One click'],
    links: [],
    poster: { hue: 25, glyph: '❋' },
  },
  {
    id: 'export',
    name: 'Export the design',
    kind: 'flagship',
    status: 'live',
    tagline: 'Take the CSS with you.',
    blurb:
      'Dial in a look and export a clean, self-contained set of CSS design tokens — reuse it in any project, or hand it to your own developer.',
    tags: ['CSS tokens', 'Shareable link', 'Portable'],
    links: [],
    poster: { hue: 260, glyph: '⤓' },
  },
];

export const byKind = (k: Kind) => projects.filter((p) => p.kind === k);
