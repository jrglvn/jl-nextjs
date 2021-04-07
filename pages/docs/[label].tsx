import Layout from "../../components/Layout";
import { SIDEBAR_NODE_TREE } from "../../mock/data";

export default function Document({ label }) {
  return <div>{label} component</div>;
}

export async function getStaticPaths() {
  const paths = SIDEBAR_NODE_TREE.map((node) => ({
    params: { label: node.label.toLowerCase(), location: node.location },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { label, location } = params;

  return { props: { label } };
}

Document.Layout = Layout;
