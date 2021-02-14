export function knight(n) {
  n = 1n << BigInt(n);

  let no1 = 9187201950435737471n & n;
  let no12 = 4557430888798830399n & n;
  let no78 = 18229723555195321596n & n;
  let no8 = 18374403900871474942n & n;

  const m = no8 << 15n /**/ | no1 << 17n
    | no78 << 6n  /*              */ | no12 << 10n
    | no78 >> 10n /*              */ | no12 >> 6n
    /*  */ | no8 >> 17n /**/ | no1 >> 15n;

  return m;
}
