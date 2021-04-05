import { useEffect, useState } from "react";

export default function Docs({ tasks }) {
  return (
    <>
      <div>
        {tasks.map((task) => (
          <pre>{JSON.stringify(task, null, 2)}</pre>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let tasks = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((res) => res.json());

  return {
    props: { tasks }, // will be passed to the page component as props
  };
}
