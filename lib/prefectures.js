const PREFECTURES = [
  {
    iso: "01",
    prefecture_kanji: "北海道"
  },
  {
    iso: "02",
    prefecture_kanji: "青森県"
  },
  {
    iso: "03",
    prefecture_kanji: "岩手県"
  },
  {
    iso: "04",
    prefecture_kanji: "宮城県"
  },
  {
    iso: "05",
    prefecture_kanji: "秋田県"
  },
  {
    iso: "06",
    prefecture_kanji: "山形県"
  },
  {
    iso: "07",
    prefecture_kanji: "福島県"
  },
  {
    iso: "08",
    prefecture_kanji: "茨城県"
  },
  {
    iso: "09",
    prefecture_kanji: "栃木県"
  },
  {
    iso: "10",
    prefecture_kanji: "群馬県"
  },
  {
    iso: "11",
    prefecture_kanji: "埼玉県"
  },
  {
    iso: "12",
    prefecture_kanji: "千葉県"
  },
  {
    iso: "13",
    prefecture_kanji: "東京都"
  },
  {
    iso: "14",
    prefecture_kanji: "神奈川県"
  },
  {
    iso: "15",
    prefecture_kanji: "新潟県"
  },
  {
    iso: "16",
    prefecture_kanji: "富山県"
  },
  {
    iso: "17",
    prefecture_kanji: "石川県"
  },
  {
    iso: "18",
    prefecture_kanji: "福井県"
  },
  {
    iso: "19",
    prefecture_kanji: "山梨県"
  },
  {
    iso: "20",
    prefecture_kanji: "長野県"
  },
  {
    iso: "21",
    prefecture_kanji: "岐阜県"
  },
  {
    iso: "22",
    prefecture_kanji: "静岡県"
  },
  {
    iso: "23",
    prefecture_kanji: "愛知県"
  },
  {
    iso: "24",
    prefecture_kanji: "三重県"
  },
  {
    iso: "25",
    prefecture_kanji: "滋賀県"
  },
  {
    iso: "26",
    prefecture_kanji: "京都府"
  },
  {
    iso: "27",
    prefecture_kanji: "大阪府"
  },
  {
    iso: "28",
    prefecture_kanji: "兵庫県"
  },
  {
    iso: "29",
    prefecture_kanji: "奈良県"
  },
  {
    iso: "30",
    prefecture_kanji: "和歌山県"
  },
  {
    iso: "31",
    prefecture_kanji: "鳥取県"
  },
  {
    iso: "32",
    prefecture_kanji: "島根県"
  },
  {
    iso: "33",
    prefecture_kanji: "岡山県"
  },
  {
    iso: "34",
    prefecture_kanji: "広島県"
  },
  {
    iso: "35",
    prefecture_kanji: "山口県"
  },
  {
    iso: "36",
    prefecture_kanji: "徳島県"
  },
  {
    iso: "37",
    prefecture_kanji: "香川県"
  },
  {
    iso: "38",
    prefecture_kanji: "愛媛県"
  },
  {
    iso: "39",
    prefecture_kanji: "高知県"
  },
  {
    iso: "40",
    prefecture_kanji: "福岡県"
  },
  {
    iso: "41",
    prefecture_kanji: "佐賀県"
  },
  {
    iso: "42",
    prefecture_kanji: "長崎県"
  },
  {
    iso: "43",
    prefecture_kanji: "熊本県"
  },
  {
    iso: "44",
    prefecture_kanji: "大分県"
  },
  {
    iso: "45",
    prefecture_kanji: "宮崎県"
  },
  {
    iso: "46",
    prefecture_kanji: "鹿児島県"
  },
  {
    iso: "47",
    prefecture_kanji: "沖縄県"
  }
];

exports.prefectureCode = function (name) {
    return PREFECTURES.find((_) => _.prefecture_kanji === name).iso;
};