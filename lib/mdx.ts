import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './utils'

const contentDirectory = path.join(process.cwd(), 'content')

export type ProjectFrontmatter = {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  featured?: boolean
  published?: boolean
}

export type BlogFrontmatter = {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  published?: boolean
}

/**
 * Get all project files
 */
export async function getProjects(): Promise<
  Array<ProjectFrontmatter & { readingTime: string }>
> {
  const projectsDir = path.join(contentDirectory, 'projects')

  // Check if directory exists
  if (!fs.existsSync(projectsDir)) {
    return []
  }

  const files = fs.readdirSync(projectsDir)
  const projects = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(projectsDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const readingTime = calculateReadingTime(content)

      return {
        ...(data as ProjectFrontmatter),
        readingTime,
      }
    })
    .filter((project) => project.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return projects
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string) {
  const projectsDir = path.join(contentDirectory, 'projects')
  const filePath = path.join(projectsDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const readingTime = calculateReadingTime(content)

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
    readingTime,
  }
}

/**
 * Get all blog posts
 */
export async function getBlogPosts(): Promise<Array<BlogFrontmatter & { readingTime: string }>> {
  const blogDir = path.join(contentDirectory, 'blog')

  // Check if directory exists
  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const readingTime = calculateReadingTime(content)

      return {
        ...(data as BlogFrontmatter),
        readingTime,
      }
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const blogDir = path.join(contentDirectory, 'blog')
  const filePath = path.join(blogDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const readingTime = calculateReadingTime(content)

  return {
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime,
  }
}
