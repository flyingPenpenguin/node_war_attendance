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
    return membersSheet.getRange('B:B').getValues().filter(String);
  }
  
  // 入力された家名がデータベースに既に存在すればtrueを返す
  isDuplicate(familyName) {
    var membersList = getMembersList();
    
    if (inArray(familyName, membersList)) {
      return true;
    }
  }

  // 家名の新規登録
  addMember(familyName) {
    // 最終行 = データ入力行の取得
    var lastRow = getLastRowCustom(this.membersSheet);

    // index no
    membersSheet.getRange(lastRow, 1).setValue(this.indexNo);
    // 家名
    membersSheet.getRange(lastRow, 2).setValue(familyName);
  }
}

// キャラクタークラス
class Characters {
  
  // コンストラクタ
  constructor(membersId) {
    // シート取得
    this.charactersSheet = SHEET.getSheetByName('characters');
    // index noの取得
    var ids      = charactersSheet.getRange('A:A').getValues().filter(Number);
    this.indexNo = Math.max.apply(null, ids) + 1;
    // 当該家名に属するキャラクターのリスト
    this.characters = charactersSheet.getRange(2, 3, getLastRowCustom(charactersSheet) - 1);
  }

  // 家名の新規登録
  addCharacter(membersId, characterName) {
    // 最終行 = データ入力行の取得
    var lastRow = getLastRowCustom(this.charactersSheet);

    // index no
    charactersSheet.getRange(lastRow, 1).setValue(this.indexNo);
    // 家名id
    charactersSheet.getRange(lastRow, 2).setValue(membersId);
    // キャラクター名
    charactersSheet.getRange(lastRow, 2).setValue(characterName);
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
  // familyNameがすでにmembersListの中に存在するか線形探索
  for (var i = 0; i < membersList.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}