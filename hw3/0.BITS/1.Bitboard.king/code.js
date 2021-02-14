export function king(n) {
  n = 1n << BigInt(n);

  let no1 = 18374403900871474942n & n;
  let no8 = 9187201950435737471n & n;

  const m = no1 << 7n | n << 8n | no8 << 9n
    | no1 >> 1n /*     */ | no8 << 1n
    | no1 >> 9n | n >> 8n | no8 >> 7n;

  return m;
}
