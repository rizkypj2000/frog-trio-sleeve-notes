// Sleeve notes for a jazz trio of frogs: writes one album title and a back cover blurb
// to /output/entry.txt (at most 400 characters in total), as the make.fun bounty asks.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TITLE = 'Live at the Culvert';

const BLURB = [
  'Three bullfrogs, recorded in the storm drain under Route 9 the night the creek came up.',
  'Hollis Reed plays tenor without a breath between choruses; he takes his air through the skin.',
  'Mae walks the bass low and patient. Little June keeps time on a wet snare.',
  'Halfway through side two the rain hits the grate and nobody stops.',
  'I\'ve sold three copies to the same man.',
].join(' ');

const text = `${TITLE}\n\n${BLURB}`;
const length = [...text].length;
if (length < 1 || length > 400) throw new Error(`entry is ${length} characters, outside 1 to 400`);

const dir = process.argv[2] ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), text, 'utf8');
console.log(`${length} characters written to ${join(dir, 'entry.txt')}`);
