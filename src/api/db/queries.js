import supabase from '@/api/db/init'

export async function fetchBlogs() {
  let { data, error } = await supabase
    .from('BLOG_POSTS')
    .select()
    .order('created_at', { ascending: false })
  if (error) {
    console.error('Error fetching blogs:', error)
    return null
  }

  return data
}

export async function fetchPostMetadata(id) {
  let { data, error } = await supabase.from('BLOG_POSTS').select('*').eq('id', id)
  if (error) {
    console.error('Error fetching blogs:', error)
    return null
  }

  return data[0]
}

export async function fetchPost(id) {
  let { data, error } = await supabase.from('POSTS').select('*').eq('id', id)
  if (error) {
    console.error('Error fetching blogs:', error)
    return null
  }

  return data[0]
}
