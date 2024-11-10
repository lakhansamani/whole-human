import { NextRequest, NextResponse } from 'next/server';
import clientPromise, { getDatabase } from '../../../lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const { selectedFeatures, email } = await req.json();

    if (!email || !Array.isArray(selectedFeatures)) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    const db = await getDatabase('whole-human');
    const collection = db.collection('polls');
    const currentDate = new Date();

    // Upsert with email as unique key
    const result = await collection.updateOne(
      { email },
      {
        $set: { email, selectedFeatures, updatedAt: currentDate },
        $setOnInsert: {
          createdAt: currentDate, // set createdAt only on insert
        },
      },
      { upsert: true },
    );

    return NextResponse.json(
      { message: 'Poll saved successfully', data: result },
      { status: 201 },
    );
  } catch (error) {
    console.error('Failed to save poll:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
