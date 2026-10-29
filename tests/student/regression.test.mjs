import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

// Incident: viewer user-4 received claim-B, owned by user-42 (prefix match on ownerId).
test('viewer with an overlapping owner prefix cannot read another owner\'s claim', () => {
  const claim = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claim], 'user-4', 'claim-B'), null);
  assert.equal(getClaim([claim], 'user-42', 'claim-B'), claim);
});
