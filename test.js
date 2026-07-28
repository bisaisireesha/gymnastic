const ExcelJS = require('exceljs');

async function main() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('database.xlsx');
  const sheet = workbook.getWorksheet('Registrations');
  const data = [];
  sheet.eachRow((row) => {
    data.push(row.values);
  });
  console.log(data);
}
main().catch(console.error);
