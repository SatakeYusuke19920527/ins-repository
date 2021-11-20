import axios from 'axios'
export async function getPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const data = res.data
  return data
}

export async function getPostsID() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const data = res.data
  
  const returnObj = data.map((d: any) => {
    return {
      params: {
        id: d.id
      }
    }
  })
  console.log("🚀 ~ file: getPost.ts ~ line 20 ~ getPostsID ~ JSON.stringify(returnObj)", JSON.stringify(returnObj))
  return JSON.stringify(returnObj)
}

export async function getPostsData(id: string) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = res.data
  return {
    post
  }
}