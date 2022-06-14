// 如可
import _ from 'loadsh'
import numRef from './ref.json'

export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.value === num ? ref.word : accum
    }, "")
}
export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
        return ref.value === word && word.toLowerCase ? ref.num : accum
    }, -1)
}