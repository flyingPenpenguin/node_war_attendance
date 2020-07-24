// 家名クラス
class Members {
 
  // コンストラクタ
  constructor() {
    // シート取得
    this.membersSheet = SHEET.getSheetByName('members');
    // index noの取得
    var ids      = this.membersSheet.getRange('A:A').getValues().filter(Number);
    this.indexNo = Math.max.apply(null, ids) + 1;
  } 
  
  // メンバーの家名一覧を取得する
  getMembersList() {
    return this.membersSheet.getRange(2, 2, getLastRowCustom(this.membersSheet) - 1).getValues().filter(String);
  }
  
  // 入力された家名がデータベースに既に存在すればtrueを返す
  isDuplicate(familyName) {
    var membersList = this.getMembersList();
    
    if (inArray(familyName, membersList)) {
      return true;
    }
  }

  // 家名の新規登録
  addMember(familyName) {
    // 最終行 = データ入力行の取得
    var lastRow = this.membersSheet.getLastRow() + 1;

    var ui = SpreadsheetApp.getUi();
    ui.alert(lastRow);
    
    // index no
    this.membersSheet.getRange(lastRow, 1).setValue(this.indexNo);
    // 家名
    this.membersSheet.getRange(lastRow, 2).setValue(familyName);
  }
}

// キャラクタークラス
class Characters {
  
  // コンストラクタ
  constructor(membersId) {
    // シート取得
    this.charactersSheet = SHEET.getSheetByName('characters');
    // index noの取得
    var ids      = this.charactersSheet.getRange('A:A').getValues().filter(Number);
    this.indexNo = Math.max.apply(null, ids) + 1;
    // 当該家名に属するキャラクターのリスト
    this.characters = this.charactersSheet.getRange(2, 3, getLastRowCustom(this.charactersSheet) - 1);
  }

  // キャラクターの新規登録
  addCharacter(membersId, characterName) {
    // 最終行 = データ入力行の取得
    var lastRow = this.charactersSheet.getLastRow() + 1;

    // index no
    this.charactersSheet.getRange(lastRow, 1).setValue(membersId);
    // 家名id
    this.charactersSheet.getRange(lastRow, 2).setValue(membersId);
    // キャラクター名
    this.charactersSheet.getRange(lastRow, 3).setValue(characterName);
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
function getLastRowCustom(sheet)
{
  // B列を基準に最終行を取得
  var columnBVals = sheet.getRange('B:B').getValues();
  return columnBVals.length;
}

/*
* 第一引数の要素が配列内に存在すればtrue
*/
function inArray(needle, haystack)
{
  // 第一引数の要素が第二引数の配列の中に存在するか線形探索
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}