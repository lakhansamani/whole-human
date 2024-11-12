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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const db = await getDatabase('whole-human');
    const collection = db.collection('polls');

    // Find one poll associated with the given email
    const poll = await collection.findOne({ email });

    if (!poll) {
      return NextResponse.json({ error: 'Poll not found' }, { status: 404 });
    }

    return NextResponse.json({ poll });
  } catch (error) {
    console.error('Error fetching poll:', error);
    return NextResponse.json(
      { error: 'Failed to fetch poll' },
      { status: 500 },
    );
  }
}
