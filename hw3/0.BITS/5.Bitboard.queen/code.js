import { rock } from '../3.Bitboard.rook/code.js';
import { bishop } from '../4.Bitboard.bishop/code.js';

export function queen(n) {
  return rock(n) | bishop(n);
}
