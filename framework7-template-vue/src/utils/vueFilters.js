export default {
    filterPlayCount(count) {
        count = count + "";
        let arr = count.split("");
        let targetStr = arr.slice(0, arr.length - 5).toString().replace(/\,/g, "");
        return targetStr;
    }
}