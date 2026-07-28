import { readSheet } from './src/lib/excel';

async function main() {
  const data = await readSheet('Registrations');
  console.log('Registrations:', data);
}

main();
