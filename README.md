# Easy Personal Blog 😊

This is a personal blog project that I've been working on. It serves as an easy-to-use setup that anyone can refer to when looking to start a blog.

---

## About 📝

This project is built using the **Vue** framework for the frontend. For the backend, I utilized **Supabase** and created an API on top of Supabase's existing functionality to fit the project's needs. To simplify writing, I've chosen **Markdown** as the primary format for blog posts, which will be rendered on the frontend using markdown-it.

## How to Use It 🚀

As of version **0.0.1**, the backend database schema consists of two linked tables by the `id` key:

1. Blog Posts Table

The **BLOG_POSTS** table stores essential metadata for blog posts.

- **id**: `int` (Primary Key)
- **title**: `string`
- **topic**: `string`
- **tags**: `array`
- **data_generated**: `TIMESTAMP`

2. Posts Table

The **POSTS** table contains the actual content of the blog posts. Content should be written and stored in Markdown format.


- **blog_post**: `int` (Foreign Key)
- **content**: `string`

This structure allows you to manage both the metadata and content of your blog posts effectively.

---


## Getting Started Locally 💻

### Prerequisites
- **Node.js**
- **Git**
- **Supabase Account** *(optional)*

After Cloning, in the project directory follow the following steps.

### 1. Install Dependencies
```npm install```

### 2. Create an .env file

In your `.src` folder, create a `.env` file. Locate your **SUPABASE** url and key and assign them to the following variables.
```
VUE_APP_SUPABASE_URL=
VUE_APP_SUPABASE_KEY=
```

## 3. Run Locally
```npm run dev```

## Future Improvements Planned 🔧
- Improved error handling
- Enhanced reactivity during loading
- Blog author interface for the website
