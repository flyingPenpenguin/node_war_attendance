/******************************
/ 定数
/******************************/
// アクティブシートの取得
const SHEET = SpreadsheetApp.getActiveSpreadsheet();
// 最終行の取得
var LAST_ROW = getLastRow(SHEET);

/*
* 新しいメンバーの追加を行う
*
* @param {void}
* @return {void}
*/
function addMembers()
{ 
  var ui = SpreadsheetApp.getUi();
  
  // メンバー追加の確認
  var title        = 'メンバーの追加';
  var prompt       = '新規メンバーの追加を行います';
  var confirmation = ui.alert(title, prompt, ui.ButtonSet.YES_NO);
  
  // YES以外は早期退出
  if (confirmation != 'YES') {
    return;
  }
  
  // 家名の入力
  var message    = '家名を入力してください';
  var familyName = ui.prompt(message, ui.ButtonSet.OK_CANCEL);
  
  // 重複の確認
  members = new Members();
  ui.alert(members.indexNo);
}

/*
* Sortボタンのクリック時にSortを行う
* TODO : 内容確認
*
* @param {void}
* @return {void}
*/
function sort()
{
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getActiveSheet();
  var range = sh.getRange("B5:I39");
  range.sort([{column: 9, ascending: true}]);
}

