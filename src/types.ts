import type { CollectionEntry } from 'astro:content'

// Retain the types for blogs and pages if they're being used elsewhere
export type PostKey = 'blog'
export type CollectionPosts = CollectionEntry<PostKey>

export type Pages = 'pages'
export type CollectionPages = CollectionEntry<Pages>
