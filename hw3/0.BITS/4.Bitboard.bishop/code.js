import { NO_1, NO_2, NO_3, NO_4, NO_5, NO_6, NO_7, NO_8 } from '../utils.js';

export function bishop(n) {
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

  const up1 = no8 << (8n - 1n) | no78 << (16n - 2n) | no678 << (24n - 3n) | no5678 << (32n - 4n) | no45678 << (40n - 5n) | no345678 << (48n - 6n) | no2345678 << (56n - 7n);
  const up2 = no1 << (8n + 1n) | no12 << (16n + 2n) | no123 << (24n + 3n) | no1234 << (32n + 4n) | no12345 << (40n + 5n) | no123456 << (48n + 6n) | no1234567 << (56n + 7n);

  const down1 = no1 >> (8n - 1n) | no12 >> (16n - 2n) | no123 >> (24n - 3n) | no1234 >> (32n - 4n) | no12345 >> (40n - 5n) | no123456 >> (48n - 6n) | no1234567 >> (56n - 7n);
  const down2 = no8 >> (8n + 1n) | no78 >> (16n + 2n) | no678 >> (24n + 3n) | no5678 >> (32n + 4n) | no45678 >> (40n + 5n) | no345678 >> (48n + 6n) | no2345678 >> (56n + 7n);

  return up1 | up2 | down1 | down2;
}
