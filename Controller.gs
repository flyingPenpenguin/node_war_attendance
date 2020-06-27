

function myFunction() {
  

}

/*
* Sortボタンのクリック時にSortを行う
*
* @param {void}
* @return {void}
*/
function sort(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getActiveSheet();
  var range = sh.getRange("B5:I39");
  range.sort([{column: 9, ascending: true}]);
}