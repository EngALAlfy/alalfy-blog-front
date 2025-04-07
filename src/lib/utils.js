/**
 * Format a date string
 * @param {string} dateString - ISO date string
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export function formatDate(dateString, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return new Date(dateString).toLocaleDateString('en-US', mergedOptions);
}

/**
 * Calculate reading time for a piece of content
 * @param {string} content - The content to calculate reading time for
 * @param {number} wordsPerMinute - Average reading speed in words per minute
 * @returns {number} - Estimated reading time in minutes
 */
export function calculateReadingTime(content, wordsPerMinute = 200) {
  if (!content) return 0;
  
  // Strip HTML tags if present
  const text = content.replace(/<\/?[^>]+(>|$)/g, '');
  
  // Count words
  const words = text.trim().split(/\s+/).length;
  
  // Calculate reading time
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  return readingTime;
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 150) {
  if (!text || text.length <= length) return text;
  
  return text.slice(0, length).trim() + '...';
}