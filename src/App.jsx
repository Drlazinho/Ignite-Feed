import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: strign

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/drlazinho.png",
      name: "Lรกzaro Pimentel",
      role: 'Dev Frontend'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ๐',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐',},
      { type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2022-06-05 18:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ๐',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐',},
      { type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2022-06-05 18:31:40')
  },
]


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              key = {post.id}
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
