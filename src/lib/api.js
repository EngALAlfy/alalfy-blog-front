/**
 * API service for fetching blog data from Laravel backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Fetch latest blog posts
 * @returns {Promise<Array>} - Array of blog posts
 */
export async function getLatestPosts() {
  try {
    const response = await fetch(`${API_URL}/posts/latest`);

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object>} - Blog post data
 */
export async function getPostBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/posts/${slug}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch post with slug: ${slug}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch featured posts
 * @param {number} limit - Number of featured posts to fetch
 * @returns {Promise<Array>} - Array of featured blog posts
 */
export async function getFeaturedPosts(limit = 3) {
  try {
    const response = await fetch(`${API_URL}/posts/featured?limit=${limit}`);

    if (!response.ok) {
      throw new Error('Failed to fetch featured posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

/**
 * Fetch hero post
 * @returns {Promise<Object>} - Hero post data
 */
export async function getHeroPost() {
  try {
    const response = await fetch(`${API_URL}/posts/hero`);

    if (!response.ok) {
      throw new Error('Failed to fetch hero post');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching hero post:', error);
    return null;
  }
}

/**
 * Fetch latest posts
 * @param {number} limit - Number of latest posts to fetch
 * @returns {Promise<Array>} - Array of latest blog posts
 */
export async function getLatestPosts(limit = 5) {
  try {
    const response = await fetch(`${API_URL}/posts/latest?limit=${limit}`);

    if (!response.ok) {
      throw new Error('Failed to fetch latest posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
}

/**
 * Fetch home categories
 * @returns {Promise<Array>} - Array of home categories
 */
export async function getHomeCategories() {
  try {
    const response = await fetch(`${API_URL}/categories/home`);

    if (!response.ok) {
      throw new Error('Failed to fetch home categories');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching home categories:', error);
    return [];
  }
}

/**
 * Fetch footer categories
 * @returns {Promise<Array>} - Array of footer categories
 */
export async function getFooterCategories() {
  try {
    const response = await fetch(`${API_URL}/categories/footer`);

    if (!response.ok) {
      throw new Error('Failed to fetch footer categories');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching footer categories:', error);
    return [];
  }
}

/**
 * Fetch header categories
 * @returns {Promise<Array>} - Array of header categories
 */
export async function getHeaderCategories() {
  try {
    const response = await fetch(`${API_URL}/categories/header`);

    if (!response.ok) {
      throw new Error('Failed to fetch header categories');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching header categories:', error);
    return [];
  }
}

/**
 * Fetch all categories
 * @returns {Promise<Array>} - Array of all categories
 */
export async function getAllCategories() {
  try {
    const response = await fetch(`${API_URL}/categories/all`);

    if (!response.ok) {
      throw new Error('Failed to fetch all categories');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching all categories:', error);
    return [];
  }
}