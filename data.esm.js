/**
 * ESM re-export of data.js for vitest.
 *
 * data.js is a classic browser script (no export statements) so it
 * cannot be imported directly by vitest which expects ESM (because
 * package.json has "type": "module"). This wrapper evaluates the
 * script in a scope that captures the const declarations.
 */
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const code = readFileSync(resolve(__dirname, 'data.js'), 'utf-8');

// Strip the browser-only window assignment block so it doesn't fail in Node
const cleanCode = code.replace(/if\s*\(typeof window[^}]*\{[^}]*\}/s, '');

// Wrap in a function that returns the declarations
const wrappedCode = cleanCode + '\nreturn { GALLERY_DATA, SECTIONS, CASE_STUDIES, isVideoFile };';
const fn = new Function(wrappedCode);
const data = fn();

export const GALLERY_DATA = data.GALLERY_DATA;
export const SECTIONS = data.SECTIONS;
export const CASE_STUDIES = data.CASE_STUDIES;
export const isVideoFile = data.isVideoFile;
