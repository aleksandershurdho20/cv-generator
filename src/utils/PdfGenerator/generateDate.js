const currentYear = new Date().getUTCFullYear();

export const years = Array(currentYear - (currentYear - 20))
    .fill("")
    .map((v, idx) => currentYear - idx);
export const monthNames = [
    "Janar",
    "Shkurt",
    "Mars",
    "Prill",
    "Maj",
    "Qershor",
    "Korrik",
    "Gusht",
    "Shtator",
    "Tetor",
    "Nentor",
    "Dhjetor",
];
