document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#race-date", {
      locale: "ja",  // 日本語化
      dateFormat: "Y/m/d",  // 日付フォーマット
      allowInput: false,  // 手動入力は不可
      minDate: "2020-01-01",  // 最小日付（必要に応じて）
      maxDate: "today"  // 最大日付（今日まで）
    });
  });
