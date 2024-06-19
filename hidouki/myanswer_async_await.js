const getUserUrl = 'https://jsonplaceholder.typicode.com/users/'
const getPostUrl = 'https://jsonplaceholder.typicode.com/posts'

const targetId = '5'
// 問題1. ユーザー情報を取得する非同期関数を作ろう
const getUserById = async (id) => {
  const response = await fetch(getUserUrl + id)
  const userData = await response.json()
  // ここから
  if (userData) {
    return userData
  } else {
    console.log('情報がありません')
  }
  // ここまで
}

// 問題2. ユーザーの投稿情報を取得する非同期関数を作ろう
const getPostByUser = async (user) => {
  const response = await fetch(getPostUrl)
  const postList = await response.json()
  // ここから
  const postByUser = postList.find((post)
    => post.userId === user.id)
  if (postByUser) {
    console.log(postByUser)
  } else {
    console.log('指定されたユーザーの投稿情報がありません')
  }
  // ここまで
}

//問題3. 非同期関数を組み合わせよう
const getUserAndPost = async () => {
  // ここから
  const targetUser = await getUserById(targetId)
  if (!targetUser) return
  getPostByUser(targetUser)
  // ここまで
}

getUserAndPost()
