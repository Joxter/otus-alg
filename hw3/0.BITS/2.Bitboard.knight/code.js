import { NO_1, NO_2, NO_7, NO_8 } from '../utils';

export function knight(n) {
  n = 1n << BigInt(n);

  let no1 = NO_1 & n;
  let no12 = NO_1 & NO_2 & n;
  let no78 = NO_7 & NO_8 & n;
  let no8 = NO_8 & n;

  const m = no8 << 15n /**/ | no1 << 17n
    | no78 << 6n  /*              */ | no12 << 10n
    | no78 >> 10n /*              */ | no12 >> 6n
    /*  */ | no8 >> 17n /**/ | no1 >> 15n;

  return m;
}
