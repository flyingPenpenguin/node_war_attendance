// 家名クラス
class Members {
  
  constructor() {
    // シート取得
    this.membersSheet = SHEET.getSheetByName('members');
    // index noの取得
    var ids      = SHEET.getRange('A:A').getValues().filter(Number);
    this.indexNo = Math.max.apply(null, ids) + 1;
  } 
  
  // メンバーの家名一覧を取得する
  getMembersList() {
    return SHEET.getRange('B:B').getValues().filter(String);
  }
  
  // 入力された家名がデータベースに既に存在すればtrueを返す
  isDuplicate(familyName) {
    var membersList = getMembersList();
    
    if (inArray(familyName, membersList)) {
      return true;
    }
  }
}

// キャラクタークラス
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

/******************************
/ 汎用関数
/******************************/
/*
* 最終行の取得
*/
function getLastRow(SHEET)
{
  // B列を基準に最終行を取得
  var columnBVals = SHEET.getRange('B:B').getValues();
  return columnBVals.filter(String).length;
}

/*
* 第一引数の要素が配列内に存在すればtrue
*/
function inArray(needle, haystack)
{
    // familyNameがすでにmembersListの中に存在するか線形探索
    for (var i = 0; i < membersList.length; i++) {
      if (haystack[i] === needle) {
        return true;
      }
    }

    return false;
}