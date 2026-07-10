//App.jsx
const OriginalComponent = (props) => {
  // ここにコードを書いてみよう
  return(
    <div>
      <p>{props.name}</p>
      <p>age: {props.age}</p>
    </div>
  )
}

const App = () => {
// ここにコードを書いてみよう
  return <OriginalComponent name="Haruta" age = "18"/>;
}