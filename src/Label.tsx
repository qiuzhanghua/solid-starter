import { ParentComponent } from "solid-js";

interface Props {
  greeting: string;
}

const Label: ParentComponent<Props> = (props) => (
  <>
    <div>{props.greeting}</div>
    {props.children}
  </>
);

export default Label;
