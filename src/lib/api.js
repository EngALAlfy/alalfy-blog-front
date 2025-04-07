/**
 * API service for fetching blog data
 * Currently using dummy data for development
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Dummy data for development
const dummyPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    excerpt: 'Learn how to build modern web applications with Next.js, the React framework for production.',
    content: `
      <p>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js provides a solution to many of the common challenges faced when building React applications:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>Automatic code splitting</li>
        <li>Client-side routing</li>
        <li>Development environment with Fast Refresh</li>
        <li>API routes</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js app, run:</p>
      <pre><code>npx create-next-app@latest</code></pre>
      
      <p>This will create a new Next.js app in a directory with all the necessary dependencies installed.</p>
      
      <h2>Pages and Routing</h2>
      <p>Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory, it's automatically available as a route.</p>
      
      <p>For example, creating a file at <code>pages/about.js</code> will make it accessible at <code>/about</code>.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    publishedAt: '2023-05-15T10:00:00Z',
    author: {
      id: 'author1',
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      bio: 'Frontend Developer & Technical Writer'
    },
    tags: ['Next.js', 'React', 'JavaScript']
  },
  {
    id: '2',
    title: 'Understanding React Hooks',
    slug: 'understanding-react-hooks',
    excerpt: 'Dive deep into React Hooks and learn how they can simplify your components and state management.',
    content: `
      <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
      
      <h2>Why Hooks?</h2>
      <p>Hooks solve a wide variety of seemingly unconnected problems in React that we've encountered over five years of writing and maintaining tens of thousands of components.</p>
      
      <h2>useState Hook</h2>
      <p>The useState hook lets you add React state to function components:</p>
      <pre><code>
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
      
      <h2>useEffect Hook</h2>
      <p>The Effect Hook lets you perform side effects in function components:</p>
      <pre><code>
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    publishedAt: '2023-06-02T14:30:00Z',
    author: {
      id: 'author2',
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Senior React Developer'
    },
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: '3',
    title: 'CSS Grid Layout: A Complete Guide',
    slug: 'css-grid-layout-complete-guide',
    excerpt: 'Master CSS Grid Layout with this comprehensive guide covering all the features and techniques.',
    content: `
      <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.</p>
      
      <h2>Basic Concepts</h2>
      <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
      
      <h2>Creating a Grid Container</h2>
      <p>To create a grid container, you set the display property on an element to grid or inline-grid:</p>
      <pre><code>
.container {
  display: grid;
}
      </code></pre>
      
      <h2>Defining Grid Columns and Rows</h2>
      <p>You can define the columns and rows of your grid with the grid-template-columns and grid-template-rows properties:</p>
      <pre><code>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
}
      </code></pre>
      
      <p>This creates a grid with three columns of equal width and two rows with heights of 100px and 200px respectively.</p>
      
      <h2>The fr Unit</h2>
      <p>The fr unit represents a fraction of the available space in the grid container. It's similar to using percentages, but it's more flexible.</p>
      
      <h2>Grid Gap</h2>
      <p>You can add space between grid items with the grid-gap property:</p>
      <pre><code>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
      </code></pre>
    `,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    publishedAt: '2023-06-20T09:15:00Z',
    author: {
      id: 'author3',
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'CSS Specialist & Web Designer'
    },
    tags: ['CSS', 'Web Design', 'Layout']
  },
  {
    id: '4',
    title: 'Introduction to TypeScript',
    slug: 'introduction-to-typescript',
    excerpt: 'Learn the basics of TypeScript and how it can improve your JavaScript development experience.',
    content: `
      <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.</p>
      
      <h2>TypeScript in 5 minutes</h2>
      <p>Let's get started by building a simple web application with TypeScript.</p>
      
      <h3>Installing TypeScript</h3>
      <p>There are two main ways to get the TypeScript tools:</p>
      <ul>
        <li>Via npm (the Node.js package manager)</li>
        <li>By installing Visual Studio's TypeScript plugin</li>
      </ul>
      
      <p>For npm users:</p>
      <pre><code>npm install -g typescript</code></pre>
      
      <h3>Building your first TypeScript file</h3>
      <p>In your editor, create a new file named <code>greeter.ts</code> and write the following TypeScript code:</p>
      
      <pre><code>
function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";
document.body.textContent = greeter(user);
      </code></pre>
      
      <h3>Compiling your code</h3>
      <p>At the command line, run the TypeScript compiler:</p>
      <pre><code>tsc greeter.ts</code></pre>
      
      <p>The result will be a file <code>greeter.js</code> which contains the same JavaScript that you fed in.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    publishedAt: '2023-07-05T11:45:00Z',
    author: {
      id: 'author2',
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Senior React Developer'
    },
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: '5',
    title: 'Responsive Web Design Principles',
    slug: 'responsive-web-design-principles',
    excerpt: 'Explore the core principles of responsive web design and how to implement them in your projects.',
    content: `
      <p>Responsive web design makes your web page look good on all devices. It uses only HTML and CSS.</p>
      
      <h2>What is Responsive Web Design?</h2>
      <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).</p>
      
      <h2>Setting The Viewport</h2>
      <p>To create a responsive website, add the following <code>&lt;meta&gt;</code> tag to all your web pages:</p>
      
      <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
      
      <p>This gives the browser instructions on how to control the page's dimensions and scaling.</p>
      
      <h2>Responsive Images</h2>
      <p>Responsive images are images that scale nicely to fit any browser size.</p>
      
      <h3>Using the width Property</h3>
      <p>If the width property is set to a percentage and the height is set to "auto", the image will be responsive and scale up and down:</p>
      
      <pre><code>
img {
  width: 100%;
  height: auto;
}
      </code></pre>
      
      <h2>Media Queries</h2>
      <p>Media queries allow you to define completely different styles for different browser sizes.</p>
      
      <pre><code>
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
      </code></pre>
    `,
    coverImage: 'https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
    publishedAt: '2023-07-18T08:30:00Z',
    author: {
      id: 'author3',
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'CSS Specialist & Web Designer'
    },
    tags: ['CSS', 'Responsive Design', 'Web Development']
  },
  {
    id: '6',
    title: 'JavaScript Promises and Async/Await',
    slug: 'javascript-promises-async-await',
    excerpt: 'Master asynchronous JavaScript with Promises and the async/await syntax for cleaner, more maintainable code.',
    content: `
      <p>JavaScript Promises and async/await are powerful features for handling asynchronous operations in a more elegant way.</p>
      
      <h2>Understanding Promises</h2>
      <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation.</p>
      
      <pre><code>
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Operation completed successfully!');
    } else {
      reject('Operation failed!');
    }
  }, 1000);
});

myPromise
  .then(result => {
    console.log(result); // 'Operation completed successfully!'
  })
  .catch(error => {
    console.error(error);
  });
      </code></pre>
      
      <h2>Chaining Promises</h2>
      <p>Promises can be chained to handle sequential asynchronous operations:</p>
      
      <pre><code>
fetchUserData(userId)
  .then(userData => {
    return fetchUserPosts(userData.username);
  })
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });
      </code></pre>
      
      <h2>Async/Await</h2>
      <p>Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code:</p>
      
      <pre><code>
async function getUserData() {
  try {
    const userData = await fetchUserData(userId);
    const posts = await fetchUserPosts(userData.username);
    console.log(posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUserData();
      </code></pre>
      
      <h2>Error Handling</h2>
      <p>With async/await, you can use traditional try/catch blocks for error handling, which can make your code cleaner and more readable.</p>
      
      <h2>Parallel Execution</h2>
      <p>You can execute multiple promises in parallel using Promise.all():</p>
      
      <pre><code>
async function getMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    
    console.log(users, posts, comments);
  } catch (error) {
    console.error('Error:', error);
  }
}
      </code></pre>
    `,
    coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    publishedAt: '2023-08-01T15:20:00Z',
    author: {
      id: 'author1',
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      bio: 'Frontend Developer & Technical Writer'
    },
    tags: ['JavaScript', 'Async', 'Promises']
  }
];

// Mark the first 3 posts as featured
const dummyFeaturedPosts = dummyPosts.slice(0, 3);

/**
 * Fetch all blog posts
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<Array>} - Array of blog posts
 */
export async function getPosts(limit = 10) {
  // Check if we should use the API or dummy data
  if (process.env.NEXT_PUBLIC_USE_DUMMY_DATA === 'true') {
    // Return dummy data with artificial delay to simulate network request
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(dummyPosts.slice(0, limit));
      }, 300);
    });
  }

  // Otherwise use the real API
  try {
    const response = await fetch(`${API_URL}/posts?limit=${limit}`);

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
  // Check if we should use the API or dummy data
  if (process.env.NEXT_PUBLIC_USE_DUMMY_DATA === 'true') {
    // Find the post with matching slug in dummy data
    const post = dummyPosts.find(post => post.slug === slug);

    // Return with artificial delay to simulate network request
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(post || null);
      }, 300);
    });
  }

  // Otherwise use the real API
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
  // Check if we should use the API or dummy data
  if (process.env.NEXT_PUBLIC_USE_DUMMY_DATA === 'true') {
    // Return dummy featured posts with artificial delay
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(dummyFeaturedPosts.slice(0, limit));
      }, 300);
    });
  }

  // Otherwise use the real API
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