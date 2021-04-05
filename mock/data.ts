export type TSidebarNode = {
  label: string;
  location: string;
  nodes?: Array<TSidebarNode>;
};

export const SIDEBAR_NODE_TREE: Array<TSidebarNode> = [
  {
    label: "View",
    location: "/view",
    nodes: [
      { label: "Search", location: "/view/search" },
      {
        label: "Appearance",
        location: "/view/appearance",
        nodes: [{ label: "Select theme", location: "/view/appearance/themes" }],
      },
    ],
  },
  {
    label: "Robno",
    location: "/robno",
    nodes: [
      { label: "Izdatnice", location: "/robno/izdatnice" },
      { label: "Ponude", location: "/robno/ponude" },
    ],
  },
  {
    label: "Izvještaji",
    location: "/izvjestaji",
    nodes: [
      { label: "Ulazi robe", location: "/izvjestaji/ulaziRobe" },
      { label: "Izlazi robe", location: "/izvjestaji/izlaziRobe" },
    ],
  },
];
