/**
 * Novac pisanim slovima | Viserjecnice
 * //stackoverflow.com/users/383904/roko-c-buljan
 */

const lib = [
    {
        1: ["jedan", "jedna"],
        2: ["dva", "dvije"],
        3: "tri",
        4: "četiri",
        5: "pet",
        6: "šest",
        7: "sedam",
        8: "osam",
        9: "devet",
    },
    {
        1: "jedanaest",
        2: "dvanaest",
        3: "trinaest",
        4: "četrnaest",
        5: "petnaest",
        6: "šestnaest",
        7: "sedamnaest",
        8: "osamnaest",
        9: "devetnaest",
    },
    {
        1: "deset",
        2: "dvadeset",
        3: "trideset",
        4: "četrdeset",
        5: "pedeset",
        6: "šezdeset",
        7: "sedamdeset",
        8: "osamdeset",
        9: "devedeset",
    },
    {
        1: "sto",
        2: "dvjesto",
        3: "tristo",
        4: "četiristo",
        5: "petsto",
        6: "šesto",
        7: "sedamsto",
        8: "osamsto",
        9: "devetsto",
    },
];

/**
 * Convert  float number to croatian words
 * @param {float} num Floated number 
 * @param {object} options {delimiter:"", simple:false}
 * @returns {string} 
 */
const convertHR = (num, options) => {
    const {delimiter:dlm, simple:sim} = Object.assign({
        delimiter: "",
        simple: false,
    }, options);
    let th = 0;
    const locOpts = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    const plur = (i, ones, x234, oth) => (/(?<!1)[234]$/.test(i) ? x234 : (i !== 11 && i % 10) === 1 ? ones : oth);
    const ones = (i) => (!i ? "" : (i < 3 ? lib[0][i][(th || 1) % 2] : lib[0][i]) + dlm);
    const tens = (i) => (i < 10 ? ones(i) : i === 10 || i >= 20 ? (i % 10 ? lib[2][~~(i / 10)] + dlm + ones(i % 10) : lib[2][~~(i / 10)] + dlm) : lib[1][i % 10] + dlm);
    const huns = (i) => (i < 10 ? ones(i) : i < 100 ? tens(i) : lib[3][~~(i / 100)] + dlm + tens(i % 100));
    const i = parseInt(num);
    if (i > 1e13) return "Error";
    const arr = Math.abs(num).toLocaleString("en-US", locOpts).split(/[,.]/g);
    const d = +arr.pop();
    const len = arr.length;
    let res = +num < 0 ? "minus " : "";
    arr.forEach((str, idx) => {
        const i = +str;
        th = len - 1 - idx; // Thousands depth
        if (!i) return (res += len === 1 ? "nula " : ""); // Handle zeroes
        res += sim && th > 0 && i < 2 ? "" : huns(i); // If simple version don't print "jedan"'s
        if (th === 1) res += `tisuć${plur(i, sim && i === 1 ? "u" : "a", "e", "a")}` + dlm;
        else if (th === 2) res += `miliju${plur(i, "n", "na", "na")}` + dlm;
        else if (th === 3) res += `milijard${plur(i, "a", "e", "i")}` + dlm;
        else if (th === 4) res += `biliju${plur(i, "n", "na", "na")}` + dlm;
    });
    const lp = d ? tens(d) : "nula ";
    res += `${!dlm ? " " : ""}kun${plur(i, "a", "e", "a")} i ${lp}${!dlm ? " " : ""}lip${plur(d, "a", "e", "a")}`;
    return res;
};

export { convertHR };
