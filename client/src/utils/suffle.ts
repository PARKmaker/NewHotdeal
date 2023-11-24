/**
 * @description 상품 index 번호 섞기
 */

export function makeShuffleNumbers(dataLength: number) {
  let arrayN: number[] = Array(dataLength);

  for (let i = 0; i < dataLength; i++) {
    arrayN[i] = i;
  }

  for (let i = arrayN.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayN[i], arrayN[j]] = [arrayN[j], arrayN[i]];
  }
  return arrayN;
}
