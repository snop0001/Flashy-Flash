// import Head from 'next/head'

import { useState } from 'react';
 function Header(props) {
    if (props.title) {
      return <h1>cool {props.title}</h1>
    } else {
      return <h1>NOT COOL BRO 🤬</h1>
    }

  }

  export default function HomePage() {
    const [likes, setLikes] = useState(0);
    const [pics, setPics] = useState(0);
    const myPhotos = [
      {
        title: "random photo 1",
        url: "https://picsum.photos/id/237/200/200",
        alt: "random photo 1"
      },
      {
        title: "random photo 2",
        url: "https://picsum.photos/id/238/200/200",
        alt: "random photo 1"
      },
      {
        title: "random photo 3",
        url: "https://picsum.photos/id/236/200/200",
        alt: "random photo 1"
      }
    ];

    function handleClick() {
      setLikes(likes + 1);
    }

    function handlePics() {

      if (pics < 2) {
        setPics(pics + 1);
      }
      else {
        setPics(0);
      }

      console.log(pics);
    }

    const callAPI = async () => {
      try {
        const res = await fetch(`http://localhost:3010/dutch`);
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div>
        <Header title="Develop. Preview. Ship. 🚀" />
        <img key={myPhotos.title} src={myPhotos[pics].url}></img>
        <button onClick={handlePics}>Give me PICTURES</button>
        <button onClick={handleClick}>👍 Like({likes})</button>

        <div>
        <main>
          <button onClick={callAPI}>Make API call</button>
        </main>
      </div>

      </div>
    );
  }