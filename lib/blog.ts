import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  keywords: string[]
  image: string
  category: string
  readingTime: string
  content: string
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    publishedAt: data.publishedAt ?? '',
    updatedAt: data.updatedAt ?? '',
    keywords: data.keywords ?? [],
    image: data.image ?? '/og/default.jpg',
    category: data.category ?? 'Guide',
    readingTime: data.readingTime ?? '5 min',
    content,
  }
}

export function getAllPosts(): BlogPost[] {
  return getAllSlugs()
    .map(slug => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
