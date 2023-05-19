
import {Post} from './components/Post/Post'
import './components/Header/Header';
import { Header } from './components/Header/Header';
import './styles.css';
export default function App() {

  return (
    <>
    <Header />
    <Post
        author="Diego Fernandes"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
      />
      <Post
        author="Reginaldo Oliveira"
        content="Passando as props"
      />
    </>
  )
}


