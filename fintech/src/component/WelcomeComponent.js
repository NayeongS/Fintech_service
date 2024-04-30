import { useState } from "react";
let [username] = useState("김나영");
const Welcome = (props) => {
    console.log(props);
    return(
      <div>
        <p> {props.username} 님 안녕하세요. 올해 {props.age}세 입니다.</p>
      </div>
    )
  }
  export default Welcome;