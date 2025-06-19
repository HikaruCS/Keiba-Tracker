// 日付選択
document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#race-date", {
      locale: "ja",  // 日本語化
      dateFormat: "Y/m/d",  // 日付フォーマット
      allowInput: false,  // 手動入力は不可
      minDate: "2020-01-01",  // 最小日付（必要に応じて）
      maxDate: "today"  // 最大日付（今日まで）
    });
  });

// 競馬場名をコードへ変換するマップ
const race_cource_map = {
  "札幌": "SAP",
  "函館": "HAK",
  "福島": "FUK",
  "新潟": "NII",
  "中山": "NAK",
  "東京": "TOK",
  "中京": "CKT",
  "京都": "KYO",
  "阪神": "HSN",
  "小倉": "KOK"
};

// localStorageに保存する際のベーシックキーを作成する関数
function createBaseKeyFromData(data) {
  const date = data.date; // 例: 2025-6-15(宝塚記念の日)
  const course_code = race_cource_map[data.course] || data.course;  // 競馬場をコード化
  const race_number = data.race.replace("R", "");  // 例: 11R → 11
  const race_code = `R${race_number}`  // 再整形

  return `収支_${date}_${course_code}_${race_code}`
}

// 保存処理
document.querySelector("#saveButton").addEventListener("click", function() {
  const date = document.querySelector("#race-date").value;
  const course = document.querySelector("#race-course").value;
  const race = document.querySelector("#race").value;
  const type = document.querySelector("#bet-type").value;
  const bet = document.querySelector('input[name="bet"]').value;
  const payoff = document.querySelector('input[name="payoff"]').value;

  data = {
    date: date,
    course: course,
    race: race,
    type: type,
    bet: bet,
    payoff: payoff
  };

  const base_key = createBaseKeyFromData(data);
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(base_key)) count++;
  };

  const full_key = `${base_key}_${count + 1}`;
  localStorage.setItem(full_key, JSON.stringify(data));
});

// 競馬場
const tokyo = document.getElementById("tokyo");
tokyo.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = tokyo.innerHTML;
})

const nakayama = document.getElementById("nakayama");
nakayama.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = nakayama.innerHTML;
})

const kyoto = document.getElementById("kyoto");
kyoto.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = kyoto.innerHTML;
})

const hanshin = document.getElementById("hanshin");
hanshin.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = hanshin.innerHTML;
})

const sapporo = document.getElementById("sapporo");
sapporo.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = sapporo.innerHTML;
})

const hakodate = document.getElementById("hakodate");
hakodate.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = hakodate.innerHTML;
})

const fukushima = document.getElementById("fukushima");
fukushima.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = fukushima.innerHTML;
})

const niigata = document.getElementById("niigata");
niigata.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = niigata.innerHTML;
})

const chukyo = document.getElementById("chukyo");
chukyo.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = chukyo.innerHTML;
})

const kokura = document.getElementById("kokura");
kokura.addEventListener("click", function() {
  const race_course = document.getElementById("race-course");
  race_course.innerHTML = kokura.innerHTML;
})

// レース
const first_race = document.getElementById("1");
first_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = first_race.innerHTML;
})

const second_race = document.getElementById("2");
second_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = second_race.innerHTML;
})

const third_race = document.getElementById("3");
third_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = third_race.innerHTML;
})

const fourth_race = document.getElementById("4");
fourth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = fourth_race.innerHTML;
})

const fifth_race = document.getElementById("5"); 
fifth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = fifth_race.innerHTML;
})

const sixth_race = document.getElementById("6");
sixth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = sixth_race.innerHTML;
})

const seventh_race = document.getElementById("7");
seventh_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = seventh_race.innerHTML;
})

const eighth_race = document.getElementById("8");
eighth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = eighth_race.innerHTML;
})

const ninth_race = document.getElementById("9");
ninth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = ninth_race.innerHTML;
})

const tenth_race = document.getElementById("10");
tenth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = tenth_race.innerHTML;
})

const eleventh_race = document.getElementById("11");
eleventh_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = eleventh_race.innerHTML;
})

const twelfth_race = document.getElementById("12");
twelfth_race.addEventListener("click", function() {
  const race = document.getElementById("race");
  race.innerHTML = twelfth_race.innerHTML;
})

// 券種
const tanshou = document.getElementById("tanshou");
tanshou.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = tanshou.innerHTML;
})

const fukushou = document.getElementById("fukushou");
fukushou.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = fukushou.innerHTML;
})

const ouen = document.getElementById("ouen");
ouen.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = ouen.innerHTML;
})

const wakuren = document.getElementById("wakuren");
wakuren.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = wakuren.innerHTML;
})

const umaren = document.getElementById("umaren");
umaren.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = umaren.innerHTML;
})

const umatan = document.getElementById("umatan");
umatan.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = umatan.innerHTML;
})

const wide = document.getElementById("wide");
wide.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = wide.innerHTML;
})

const sanrenpuku = document.getElementById("sanrenpuku");
sanrenpuku.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = sanrenpuku.innerHTML;
})

const sanrentan = document.getElementById("sanrentan");
sanrentan.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = sanrentan.innerHTML;
})

const win5 = document.getElementById("win5");
win5.addEventListener("click", () => {
  const bet_type = document.getElementById("bet-type");
  bet_type.innerHTML = win5.innerHTML;
})