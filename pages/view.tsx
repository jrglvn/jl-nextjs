import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function View(props) {
  let router = useRouter();

  console.log("router: ", router);

  return (
    <Layout>
      <div>VIEW compoenent</div>
    </Layout>
  );
}
