import React from 'react';
import python from './../../../../ImageResource/python.svg';
import javascript from './../../../../ImageResource/javascript.svg';
import java from './../../../../ImageResource/java.svg';
import ocaml from './../../../../ImageResource/ocaml.svg';
import groovy from './../../../../ImageResource/groovy.png';
import rust from './../../../../ImageResource/rust.svg';
import lua from './../../../../ImageResource/lua.svg';
import typescript from './../../../../ImageResource/typescript.svg';
import scala from './../../../../ImageResource/scala.svg';

import Fade from "react-reveal";

const CreateCircle = ({ size = "4em", image, alt, imageSize }: any) => {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        borderWidth: 5,

        borderStyle: "solid",
        borderColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
      }}></div>
      <img style={{
        width: imageSize,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }} src={image} alt={alt} />
    </div>
  );
}

const Generate = ({ pname, link, image, imageSize }: any) => {
  return (
    <div>
      {/*<a href="https://icons8.com/icon/13441/python"></a>*/}
      <a target="_blank"
        rel="noreferrer"
        href={link}
        style={{
          textDecoration: "inherit",
          color: "inherit",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
        <Fade>
          <CreateCircle size="3em" image={image} alt={pname} imageSize={imageSize} />
        </Fade>
        <div>{pname}</div>
      </a>
    </div>);
}

const generate = (a: string, b: string, c: string, imageSize = "70%") =>
  <Generate pname={a} link={b} image={c} imageSize={imageSize} />

const regularPlContent = [
  generate("Python", "https://www.python.org/", python),
  generate("JavaScript", "https://www.javascript.com", javascript),
  generate("OCaml", "https://ocaml.org", ocaml),
  generate("Groovy", "https://groovy-lang.org", groovy.src),
  generate("Java", "https://www.java.com/en/", java),
]

const avgPlContent = [
  generate("bash", "https://www.lua.org/", lua),
  generate("Vimscript", "https://www.typescriptlang.org/", typescript),
]

const learningPlContent = [
  generate("Rust", "https://www.rust-lang.org/", rust),
  generate("Lua", "https://www.lua.org/", lua),
  generate("TypeScript", "https://www.typescriptlang.org/", typescript),
  generate("Scala", "https://www.scala-lang.org/", scala),
]



export { regularPlContent, learningPlContent };
