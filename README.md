# Easy Personal Blog 😊

This is a personal blog project that I've been working on. It's a personal project that I created to replace my previous notion blog and website. I also plan to make it more boilerplate like so that anyone can use it as an easy setup to start blogging!

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
- **image_url** `string`

2. Posts Table

The **POSTS** table contains the actual content of the blog posts. Content should be written and stored in Markdown format.


- **blog_post**: `int` (Foreign Key)
- **preface**: `string`
- **content**: `string`

This structure allows you to manage both the metadata and content of your blog posts effectively.

You'll need to setup this database on Supabase. You'll also need to setup a storage account to store images and generate the corresponding image_urls to store in the **BLOG_POSTS** database

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
