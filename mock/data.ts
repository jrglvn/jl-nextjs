export type TSidebarNode = {
  label: string;
  location: string;
  nodes?: Array<TSidebarNode>;
};

export const SIDEBAR_NODE_TREE: Array<TSidebarNode> = [
  { label: "Home", location: "/" },
  {
    label: "View",
    location: "/docs/view",
    nodes: [
      { label: "Search", location: "/docs/view/search" },
      {
        label: "Appearance",
        location: "/docs/view/appearance",
        nodes: [
          { label: "Select theme", location: "/docs/view/appearance/themes" },
        ],
      },
    ],
  },
  {
    label: "Robno",
    location: "/docs/robno",
    nodes: [
      { label: "Izdatnice", location: "/docs/robno/izdatnice" },
      { label: "Ponude", location: "/docs/robno/ponude" },
    ],
  },
  {
    label: "Izvještaji",
    location: "/docs/izvjestaji",
    nodes: [
      { label: "Ulazi robe", location: "/docs/izvjestaji/ulaziRobe" },
      { label: "Izlazi robe", location: "/docs/izvjestaji/izlaziRobe" },
    ],
  },
];
