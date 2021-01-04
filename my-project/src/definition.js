// 基準年
const basicYear = new Date().getFullYear() - 99;

// 元号判定用
const eraNames = [
  { eraName: '明治', start: 1868, end: 1912 },
  { eraName: '大正', start: 1912, end: 1926 },
  { eraName: '昭和', start: 1926, end: 1989 },
  { eraName: '平成', start: 1989, end: 2019 },
  { eraName: '令和', start: 2019, end: 9999 },
];

// 過去100年分の年数
export const year = [];

// 過去100年分の元号
export const wareki = [];

// 過去100年分の元号計算
const calcWareki = () => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < eraNames.length; j++) {
      if (eraNames[j].start <= basicYear + i && basicYear + i < eraNames[j].end) {
        const warekiYear = basicYear + i - eraNames[j].start + 1;
        year.push( basicYear + i );
        wareki.push( `(${eraNames[j].eraName}${warekiYear})` );
      }
    }
  }
}

calcWareki();
