const GSheetReader = require('g-sheets-api');
class DataReaderPage{
//This is the page for the data reading from the excel sheets
processExcel(fileName) {
    //Read the Excel File data.
    const XLSX = require('xlsx');
    
    const workbook = XLSX.readFile('TestData\\Myspreadsheet_v1.xlsx');
    
    //Fetch the name of First Sheet.
    const firstSheet = workbook.SheetNames[0];
    
    //Read all rows from First Sheet into an JSON array.
    let excelRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet],{defval:""});
    return excelRows;
    };

    
}
export default new DataReaderPage();
