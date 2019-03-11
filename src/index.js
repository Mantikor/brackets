module.exports = function check(str, bracketsConfig) {
    // your solution
    // console.info(bracketsConfig);
    // console.info(str);
    if (str.length % 2) {
        return false
    } else {
        for (let i=bracketsConfig.length; i >= 0; i--) {
            bracketsConfig.forEach(function (entry) {
                let br_pair = entry[0] + entry[1];
                while (str.includes(br_pair)) {
                    str = str.replace(br_pair, '');
                }
            })
        }
    }
    return !Boolean(str.length)
}
