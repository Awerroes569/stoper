const Button = (props) => {
  return <button onClick={props.action} disabled={props.running}>{props.title}</button>;
};

export default Button;