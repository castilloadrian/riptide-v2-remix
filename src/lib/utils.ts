import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sanitizes input text by removing special characters and limiting length
 * @param text Input text to sanitize
 * @param maxLength Maximum allowed length (default: 255)
 * @param allowSpaces Whether to allow spaces (default: true)
 * @returns Sanitized text
 */
export function sanitizeInput(text: string, maxLength: number = 255, allowSpaces: boolean = true): string {
  // Remove special characters but keep letters, numbers, and optionally spaces
  const pattern = allowSpaces ? /[^a-zA-Z0-9 ]/g : /[^a-zA-Z0-9]/g;
  const sanitized = text.replace(pattern, '');
  
  // Limit length
  return sanitized.slice(0, maxLength);
}
