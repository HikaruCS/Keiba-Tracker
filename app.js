// TODO: 記録の削除機能を作る 多分Event Delegationで行ける

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
  const course = document.querySelector("#race-course").textContent.trim();
  const race = document.querySelector("#race").textContent.trim();
  const type = document.querySelector("#bet-type").textContent.trim();
  const bet = Number(document.querySelector('input[name="bet"]').value);
  const payoff = Number(document.querySelector('input[name="payoff"]').value);

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

  addRowToTable(data, full_key);
});

// テーブルに1行追加
function addRowToTable(data, key) {
  const tbody = document.getElementById("record-table");
  const row = `<tr id="${key}">
    <td>${data.date}</td>
    <td>${data.course}</td>
    <td>${data.race}</td>
    <td>${data.type}</td>
    <td>${data.bet}</td>
    <td>${data.payoff}</td>
    <td><i class="fa-solid fa-trash"></i></td>
  </tr>`;
  tbody.insertAdjacentHTML("afterbegin", row);
}

function addGlobalEventListener(type, selector, callback) {
            document.addEventListener(type, e => {
                if (e.target.matches(selector)) {
                    callback(e);
                };
            });
        }

// 記録の削除機能
addGlobalEventListener("click", ".fa-trash", e => {
  // tableの行を取得
  const record_to_delete = e.target.parentElement.parentElement;
  // Local Storageから削除
  const key = String(record_to_delete.id);
  localStorage.removeItem(key);
  // キーが正しく取れてから、UI上から削除する
  record_to_delete.remove();
});


function loadTable() {
  const tbody = document.getElementById("record-table");
  tbody.innerHTML = "";
  let records = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("収支_")) {
      const data = JSON.parse(localStorage.getItem(key));
      records.push({key: key, data: data});
    }
  }

  records.reverse(); // 追加順で新しいものを上に
  records.forEach(r => addRowToTable(r.data, r.key));
}

loadTable();


// 競馬場
for (let course in race_cource_map) {
  const race_course = document.getElementById(race_cource_map[course])
  race_course.addEventListener("click", () => {
    const drop_down = document.getElementById("race-course")
    drop_down.innerHTML = race_course.innerHTML
  })
}

// レース
for (let i = 1; i <= 12; i++) {
  const nth_race = document.getElementById(String(i));
  nth_race.addEventListener("click", function() {
    document.getElementById("race").innerHTML = `${i}R`;
  });
}

// 券種
betting_tickets = {
  "単勝": "tanshou",
  "複勝": "fukushou",
  "応援馬券": "ouen",
  "枠連": "wakuren",
  "馬連": "umaren",
  "馬単": "umatan",
  "ワイド": "wide",
  "3連複": "sanrenpuku",
  "3連単": "sanrentan",
  "WIN5": "win5"
}

for (type in betting_tickets) {
  const betting_type = document.getElementById(betting_tickets[type])
  betting_type.addEventListener("click", () => {
    const drop_down = document.getElementById("bet-type");
    drop_down.innerHTML = betting_type.innerHTML
  })
}