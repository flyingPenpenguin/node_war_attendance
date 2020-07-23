// 家名クラス
class Members {
  
  constructor() {
    // シート取得
    this.membersSheet = SHEET.getSheetByName('members');
    // index noの取得
    var ids = SHEET.getRange('A:A').getValues().filter(Number);
    this.indexNo = Math.max.apply(null, ids) + 1;
  } 
}

// キャラクター名クラス
class Characters {
  
  constructor(id) {
    
  }
}

// 拠点戦開催日時クラス
class WarDates {
  
  constructor(id) {
    
  }
}

// 参加記録クラス
class AttendanceLogs {
  
  constructor(id) {
    
  }
}

// 拠点戦結果クラス
class WarResults {
  
  constructor(id) {
    
  }
}
