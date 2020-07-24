/******************************
/ 定数
/******************************/
// アクティブシートの取得
const SHEET = SpreadsheetApp.getActiveSpreadsheet();

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
  var prompt       = '新規メンバーの追加を行います。';
  var confirmation = ui.alert(title, prompt, ui.ButtonSet.YES_NO);
  
  // YES以外は早期退出
  if (confirmation != 'YES') {
    return;
  }
  
  // 家名の入力
  var message    = '家名を入力してください。';
  var familyName = ui.prompt(message, ui.ButtonSet.OK_CANCEL);
  
  // 重複の確認
  members = new Members();
  // すでに家名が存在している場合は退出
  if (members.isDuplicate(familyName)) {
    ui.alert('入力された家名はすでに存在しています。');
    return;
  }

  // 初回登録なのでキャラクター名の登録も同時に行う
  var message       = 'キャラクター名を入力してください。';
  var characterName = ui.prompt(message, ui.ButtonSet.OK_CANCEL);

  // データベースへの登録
  // membersへの登録
  members.addMember(familyName);
  // charactersへの登録
  characters = new Characters(members.indexNo);
  characters.addCharacter(members.indexNo, characterName);

  // 登録完了メッセージ
  ui.alert('家名の新規登録が完了しました。');
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

