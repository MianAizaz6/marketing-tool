import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name is too short')
    .max(30, 'First name is too long')
    .regex(/^[A-Za-z\s'-]+$/, 'Only letters, spaces, hyphens, and apostrophes allowed'),

  lastName: z
    .string()
    .min(2, 'Last name is too short')
    .max(30, 'Last name is too long')
    .regex(/^[A-Za-z\s'-]+$/, 'Only letters, spaces, hyphens, and apostrophes allowed'),

  email: z.string().email('Invalid email address').trim(),

  phoneNo: z
    .string()
    .min(10, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid international phone number'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),

  website: z.string().max(0, 'Spam detected'), // Honeypot: must always be empty
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
