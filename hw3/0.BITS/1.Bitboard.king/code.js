import { NO_1, NO_8 } from '../utils';

export function king(n) {
  n = 1n << BigInt(n);

  let no1 = NO_1 & n;
  let no8 = NO_8 & n;

  const m = no1 << 7n | n << 8n | no8 << 9n
    | no1 >> 1n /*     */ | no8 << 1n
    | no1 >> 9n | n >> 8n | no8 >> 7n;

  return m;
}
