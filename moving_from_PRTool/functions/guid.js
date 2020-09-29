export function genGuid(prefix) {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789',
        i,
        guid = prefix || "";

    for (i = 0; i < 30; i++) {
        guid += chars[Math.floor(chars.length * Math.random())];
    }

    return guid.substr(0, 30);
}