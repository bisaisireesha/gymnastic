import { NextResponse } from 'next/server';
import { appendToSheet, ColumnDef } from '@/lib/excel';
import { sendNotificationEmail } from '@/lib/email';

const columns: ColumnDef[] = [
  { header: 'Date Submitted', key: 'dateSubmitted', width: 20 },
  { header: 'Student Name', key: 'studentName', width: 30 },
  { header: 'Age', key: 'age', width: 10 },
  { header: 'DOB', key: 'dob', width: 15 },
  { header: 'Gender', key: 'gender', width: 15 },
  { header: 'Address', key: 'address', width: 40 },
  { header: 'Class', key: 'studentClass', width: 15 },
  { header: 'School', key: 'school', width: 30 },
  { header: 'Father Name', key: 'fatherName', width: 30 },
  { header: 'Mother Name', key: 'motherName', width: 30 },
  { header: 'Contact', key: 'contactNumber', width: 20 },
  { header: 'Alt Contact', key: 'altNumber', width: 20 },
  { header: 'Medical', key: 'medicalCondition', width: 30 },
  { header: 'Date of Joining', key: 'dateOfJoining', width: 15 },
  { header: 'Batch', key: 'preferredBatch', width: 20 },
  { header: 'Classes/Week', key: 'classesPerWeek', width: 20 },
  { header: 'Signature', key: 'signature', width: 30 },
];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received registration data:', data);
    
    if (!data.studentName || !data.contactNumber) {
      return NextResponse.json(
        { error: 'Student Name and Contact Number are required.' },
        { status: 400 }
      );
    }

    // Save to generic database.xlsx in the 'Registrations' sheet
    const filePath = await appendToSheet('Registrations', columns, data);

    // Send email notification
    const subject = `New Registration: ${data.studentName}`;
    const message = `A new registration has been submitted by ${data.studentName} (${data.contactNumber}).\n\nPlease find the updated registrations database attached.`;
    await sendNotificationEmail(subject, message, filePath);

    return NextResponse.json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error('Error handling registration:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing the registration.' },
      { status: 500 }
    );
  }
}
