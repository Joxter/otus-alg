import { NO_1, NO_2, NO_3, NO_4, NO_5, NO_6, NO_7, NO_8 } from '../utils.js';

export function rock(n) {
  n = 1n << BigInt(n);

  let no1 = NO_1 & n;
  let no12 = no1 & NO_2;
  let no123 = no12 & NO_3;
  let no1234 = no123 & NO_4;
  let no12345 = no1234 & NO_5;
  let no123456 = no12345 & NO_6;
  let no1234567 = no123456 & NO_7;

  let no8 = NO_8 & n;
  let no78 = NO_7 & no8;
  let no678 = NO_6 & no78;
  let no5678 = NO_5 & no678;
  let no45678 = NO_4 & no5678;
  let no345678 = NO_3 & no45678;
  let no2345678 = NO_2 & no345678;

  const vert = n << 8n | n << 16n | n << 24n | n << 32n | n << 40n | n << 48n | n << 56n
    | n >> 8n | n >> 16n | n >> 24n | n >> 32n | n >> 40n | n >> 48n | n >> 56n;

  const hor = no1 << 1n | no12 << 2n | no123 << 3n | no1234 << 4n | no12345 << 5n | no123456 << 6n | no1234567 << 7n
    | no8 >> 1n | no78 >> 2n | no678 >> 3n | no5678 >> 4n | no45678 >> 5n | no345678 >> 6n | no2345678 >> 7n;

  return vert | hor;
}
