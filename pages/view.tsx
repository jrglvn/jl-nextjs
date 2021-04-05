import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function View(props) {
  let router = useRouter();

  console.log("router: ", router);

  return <div>VIEW compoenent</div>;
}

View.Layout = Layout;
