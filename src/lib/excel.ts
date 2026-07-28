import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs/promises';

const DB_PATH = path.join(process.cwd(), 'database.xlsx');

export interface ColumnDef {
  header: string;
  key: string;
  width?: number;
}

export async function appendToSheet(
  sheetName: string,
  columns: ColumnDef[],
  rowData: Record<string, any>
): Promise<string> {
  const workbook = new ExcelJS.Workbook();
  let sheet;

  try {
    await fs.access(DB_PATH);
    await workbook.xlsx.readFile(DB_PATH);
    sheet = workbook.getWorksheet(sheetName);
  } catch (error) {
    // File does not exist yet, workbook is empty
  }

  if (!sheet) {
    sheet = workbook.addWorksheet(sheetName);
    // Only set columns for a brand new sheet to establish the header row
    sheet.columns = columns;
  }

  // Build the array based on the column order
  const newRow = columns.map(col => {
    if (col.key === 'dateSubmitted') return new Date().toISOString();
    return rowData[col.key] || '';
  });

  sheet.addRow(newRow);

  await workbook.xlsx.writeFile(DB_PATH);
  return DB_PATH;
}

export async function readSheet(sheetName: string): Promise<any[]> {
  const workbook = new ExcelJS.Workbook();
  try {
    await fs.access(DB_PATH);
    await workbook.xlsx.readFile(DB_PATH);
    const sheet = workbook.getWorksheet(sheetName);
    
    if (!sheet) return [];

    const data: any[] = [];
    const headers: string[] = [];

    sheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) {
        // First row is headers
        row.eachCell((cell, colNumber) => {
          headers[colNumber] = cell.value ? cell.value.toString() : `Column ${colNumber}`;
        });
      } else {
        // Subsequent rows are data
        const rowData: Record<string, any> = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          const header = headers[colNumber] || `Column ${colNumber}`;
          rowData[header] = cell.value;
        });
        data.push(rowData);
      }
    });

    return data;
  } catch (error) {
    console.error('Error reading excel sheet:', error);
    return [];
  }
}

export async function clearSheet(sheetName: string): Promise<void> {
  const workbook = new ExcelJS.Workbook();
  try {
    await fs.access(DB_PATH);
    await workbook.xlsx.readFile(DB_PATH);
    const sheet = workbook.getWorksheet(sheetName);
    
    if (sheet) {
      // Keep headers in row 1, clear everything else
      const rowCount = sheet.rowCount;
      if (rowCount > 1) {
        // Splice removes rows starting from index 2, deleting (rowCount - 1) rows
        sheet.spliceRows(2, rowCount - 1);
        await workbook.xlsx.writeFile(DB_PATH);
      }
    }
  } catch (error) {
    console.error('Error clearing excel sheet:', error);
    throw error;
  }
}

