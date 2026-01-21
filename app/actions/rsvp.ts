'use server';

import Airtable from 'airtable';

export interface RSVPFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  dietaryRestrictions?: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitRSVP(formData: RSVPFormData): Promise<ActionResponse> {
  try {
    // Validate environment variables
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || 'RSVP';

    if (!apiKey || !baseId) {
      console.error('Missing Airtable configuration');
      return {
        success: false,
        message: 'Server configuration error. Please contact support.',
        error: 'Missing Airtable credentials',
      };
    }

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
        error: 'Missing required fields',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        error: 'Invalid email format',
      };
    }

    // Configure Airtable
    const base = new Airtable({ apiKey }).base(baseId);

    // Submit to Airtable
    await base(tableName).create([
      {
        fields: {
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Company': formData.company || '',
          'Phone': formData.phone || '',
          'Dietary Restrictions': formData.dietaryRestrictions || '',
          'Submitted At': new Date().toISOString(),
        },
      },
    ]);

    return {
      success: true,
      message: 'Thank you for your RSVP! We look forward to seeing you at the event.',
    };
  } catch (error) {
    console.error('Error submitting RSVP:', error);

    return {
      success: false,
      message: 'An error occurred while submitting your RSVP. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
