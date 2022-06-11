/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []
    backtrack(res, 0, s, [])
    return res
};

const backtrack=(res, start, s, ary)=>{
    if(ary.length == 4){
        if(start == s.length) res.push(ary.join('.'))
        return
    }
    for(let i = start+1;i<=start+3 && i<=s.length;i++){
        let sub = s.slice(start, i)
        if(Number(sub) !== 0 && sub[0] === '0') break
        if(Number(sub) === 0 && sub.length > 1) break
        if(Number(sub)>255) break
        let nextAry = Array.from(ary)
        nextAry.push(sub)
        backtrack(res, i, s, nextAry)
    }
}