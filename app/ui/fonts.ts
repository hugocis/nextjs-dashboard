import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Specify the weight(s) you want for the Inter font
export const inter = Inter({
  weight: ['400', '700'], // You can adjust these values as needed
  subsets: ['latin'],
});

// Specify the weight(s) you want for the Lusitana font
export const lusitana = Lusitana({
  weight: ['400'], // Adjust this as needed
  subsets: ['latin'],
});
