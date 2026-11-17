import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('the HTML head loads styles before any application script executes', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  assert.match(head, /<link\b(?=[^>]*rel="stylesheet")(?=[^>]*href="\/src\/style\.css")[^>]*>/);
});
