// @ts-nocheck
const xor = {
  key: 2,
  encode(str: String | undefined, key: Number | String | undefined) {
    if (!key) key = xor.key;
    if (!str) return str;
    var encoded = encodeURIComponent(
      str
        .split("")
        .map((char, ind) =>
          (((ind as any) % key) as any)
            ? String.fromCharCode((char.charCodeAt(0) as any) ^ key)
            : char
        )
        .join("")
    );
    if (!encoded.endsWith("/")) return encoded + "/";
    else return encoded;
  },
  decode(str: String | undefined, key: Number | String | undefined) {
    if (!key) key = xor.key;
    if (!str) return str;
    str = str.replace(new RegExp("/$", "g"), "");
    var encoded = decodeURIComponent(str as string)
      .split("")
      .map((char, ind) =>
        ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
      )
      .join("");
    return encoded;
  },
};

const illusive = {
  encode(str: String | undefined, key: Number | undefined = 2) {
    var letters =
      "a1b2c3d4e5f6g7h8i9jklmnopqrstuvwxyza1b2c3d4e5f6g7h8i9jklmnopqrstuvwxyz";
    return str
      ? encodeURIComponent(
          str
            .toString()
            .split("")
            .map((e) =>
              letters.indexOf(e) > -1 ? letters[letters.indexOf(e) + key] : e
            )
            .join("")
        )
      : str;
  },
  decode(str: String | undefined, key: Number | undefined = 2) {
    var letters =
      "a1b2c3d4e5f6g7h8i9jklmnopqrstuvwxyza1b2c3d4e5f6g7h8i9jklmnopqrstuvwxyz";
    return str
      ? decodeURIComponent(str as string)
          .toString()
          .split("")
          .map((e) =>
            letters.indexOf(e) > -1 ? letters[letters.indexOf(e) - key] : e
          )
          .join("")
      : str;
  },
};

const plain = {
  encode(str: String | undefined) {
    if (!str) return str;
    var encoded = str;
    return encoded;
  },
  decode(str: String | undefined) {
    if (!str) return str;
    var encoded = decodeURIComponent(decodeURIComponent(str as string));
    return str.replace("https://", "https:/").replace("https:/", "https://");
  },
};

const base64 = {
  encode(str: String | undefined, encode: Boolean | undefined = true) {
    if (!str) return str;
    var encoded = btoa(
      encode ? encodeURIComponent(str as string) : (str as string)
    );
    if (!encoded.endsWith("/")) return encoded + "/";
    else return encoded;
  },
  decode(str: String | undefined) {
    if (!str) return str;
    str = str.replace(new RegExp("/$", "g"), "");
    var encoded = decodeURIComponent(atob(str as string));
    return encoded;
  },
};

export default { xor, plain, base64, illusive };
