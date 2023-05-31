import { navbar } from "../utils/navbar";

const Root = () =>
  navbar.map(({ id, element }) => <div key={id}>{element}</div>);

export default Root;
