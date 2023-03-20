import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diogo Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cum illum eaque, officiis sapiente iure pariatur molestias dicta aperiam 
            veritatis placeat cumque temporibus voluptate assumenda nihil tempora. 
            Esse totam sit odit."
          />

          <Post
            author="Joyce Alves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cum illum eaque, officiis sapiente iure pariatur molestias dicta aperiam 
            veritatis placeat cumque temporibus voluptate assumenda nihil tempora. 
            Esse totam sit odit."
          />
        </main>
      </div>
    </div>
  );
}
