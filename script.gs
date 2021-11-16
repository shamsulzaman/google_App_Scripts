function onOpen() {
  // Get the spreadsheet's user-interface object.
  var ui = SpreadsheetApp.getUi();
  var sheet = SpreadsheetApp.getActiveSpreadsheet();

  if(sheet.getSheetByName("Upload_products")==null){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ss.insertSheet('Upload_products')

  }

  // Create and add a named menu and its items to the menu bar.
  ui.createMenu('Add Varients')
   .addItem('Add Varients', 'trryy')
   .addItem('Create Upload Product File', 'createUpload')
   .addItem('Delete product sheet', 'deleteSheet') 
  .addToUi();
}


function trryy(){
  var ui = SpreadsheetApp.getUi()
  var row_pos = ui.prompt("Please add the row number to add varient")
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Upload_products');
  var size = [['small'],['small'],['small'],['small'],['medium'],['medium'],['medium'],['medium'],['large'],['large'],['large'],['large'],['XL'],['XL'],['XL'],['XL'],['XLL'],['XLL'],['XLL'],['XLL']];
  var color = [['Navy Blue'],['Black'],['Grey'],['Charcoal'],['Navy Blue'],['Black'],['Grey'],['Charcoal'],['Navy Blue'],['Black'],['Grey'],['Charcoal'],['Navy Blue'],['Black'],['Grey'],['Charcoal'],['Navy Blue'],['Black'],['Grey'],['Charcoal']]
  var row_si = size.length;
  var row_c = color.length;
  var column = size[0].length;
  var help = parseInt(row_pos.getResponseText())
  for (var counter = 0; counter <= 18; counter = counter + 1) {
   sheet.insertRows(help+1)
   }
  var cont = parseInt(row_pos.getResponseText());
  sheet.getRange(cont, 18, row_si, 1).setValues(size);
  sheet.getRange(cont, 20, row_c, 1).setValues(color);
  
  }

  function createUpload(){
  //   var sheet = SpreadsheetApp.getActiveSpreadsheet();
  //   var target = sheet.getSheets()[5];
  //   //SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet().clearFormats().copyTo()
    
  //   sheet.copyTo())
  // }

  //var source = SpreadsheetApp.getActiveSpreadsheet();
  // var sheet = source.getSheets()[0];
  // var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // var yourNewSheet = activeSpreadsheet.getSheetByName("shams")
  // yourNewSheet = activeSpreadsheet.insertSheet();
  // yourNewSheet.setName("yahoo00");

  
  // sheet.copyTo(yourNewSheet.getRange("A:D"));

  // var sheet = SpreadsheetApp.getActiveSheet();
  // sheet.getRange("A:E").copyTo(sheet.getRange("F1"), {contentsOnly:true});

  

  var sheet = SpreadsheetApp.getActiveSheet();
  //sheet.insertSheet('Upload_products');
  //yourNewSheet.setName("Upload_products");
  var destination = SpreadsheetApp.openById('1imJnuJL96K8wSNGdiwO88mXz2bEOzZWZAN2WxCqKxsk').getSheetByName('Upload_products');
  sheet.getRange("A:T").copyTo(destination.getRange("A1"), {contentsOnly:true});



  }

  function deleteSheet(){
    var spreadSheetOn = SpreadsheetApp.getActiveSpreadsheet()
    var toBeDeletedSheet = spreadSheetOn.getSheetByName('Upload_products')

    if(toBeDeletedSheet == null){
      var gui = SpreadsheetApp.getUi()
      
      return gui.alert("No Upload product sheets available")
    }

    spreadSheetOn.deleteSheet(toBeDeletedSheet)

  }
function cS(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.insertSheet('Upload_products')

  var trail = createUpload()
  return trail
  
}

function postShopify(){
  let data = SpreadsheetApp.getActiveSpreadsheet().getDataRange().getValues()
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Upload_products')

  // // let data = sheet.getDataRange()
  // // let val = data.getValues()

  // // let musst = Object.entries(val)

  // // let list = musst.map(ke => ke)
  // let gem = data[0]
  // let sli = data.slice(1,3)
  // let [first, second] = [...sli]
  // let valamart = first.map(value => {
  //   return `${value}`
  // })
  // let hand = gem.map(title => `${title}`)
  
  // // let tar = () => {
  // //   let miss = []
  // //   [ti, vo] = [...miss]
  // //   hand.map(function tri(){
    
  // //   } )
  // // }

// const empty = []
// let count = 0
// let vout =0

// first.forEach(vale => {
    
//     empty.push(vale[0])
//     empty.push(gem[count][0])
//     count = count+1
//     console.log(count)
    
    
// })







//     const tup = empty.reduce(function(result, value, index, array) {
//     if (index % 2 === 0)
//       result.push(array.slice(index, index + 2));
//     return result;
//   }, [])
//   console.log(tup)


//   console.log(hand)

// }

function testRun(){



  var headers = {
    "Authorization" : "Basic " + Utilities.base64Encode( '' + ':' + '')
  };

  var formData = {"product":{"title":"Burton Custom Freestyle 151","body_html":"\u003cstrong\u003eGood snowboard!\u003c\/strong\u003e","vendor":"Burton","product_type":"Snowboard","tags":["Barnes \u0026 Noble","Big Air","John's Fav"]}}
  // Because payload is a JavaScript object, it is interpreted as
  // as form data. (No need to specify contentType; it automatically
  // defaults to either 'application/x-www-form-urlencoded'

  var formJson = JSON.stringify(formData)

  // or 'multipart/form-data')
  var options = {
    'method' : 'POST',
    'headers':headers,
    'muteHttpExceptions': true,
    'contentType': 'application/json',
    'payload' : JSON.stringify(formData)
  };


  var params = {
    "method":"GET",
    "headers":headers
  };

  UrlFetchApp.fetch('https://api-testing-first.myshopify.com/admin/api//products.json', options);

  console.log(typeof(formData))

  // var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
  
}





