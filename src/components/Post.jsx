import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/79115354?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Lázaro Pimentel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime="20220-03-06 20:36:00">Publicado a 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto </a>{' '}
          <a href=''>#nlw </a>{' '}
          <a href=''>#rocketseat</a>
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu comentário</strong>
        <textarea
          placeholder='Digite algo..'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
