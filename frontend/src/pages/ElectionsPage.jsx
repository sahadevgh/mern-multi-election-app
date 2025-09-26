import React from "react";
import ElectionCard from "../components/ElectionCard";

const mockElections = [
  {
    id: 1,
    title: "Presidential Election 2024",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    candidates: [
      { id: 1, name: "Alice Johnson", party: "Party A" },
      { id: 2, name: "Bob Smith", party: "Party B" },
    ],
    banner: {
      url: "https://sierraloaded.sl/wp-content/uploads/2023/06/Final-Presidential-Election-Result-Sierra-Leone.jpg",
    },
  },
  {
    id: 2,
    title: "City Council Election 2024",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    startDate: "2024-10-15",
    endDate: "2024-10-25",
    candidates: [
      { id: 1, name: "Charlie Brown", party: "Party C" },
      { id: 2, name: "Diana Prince", party: "Party D" },
    ],
    banner: {
      url: "https://cdn.modernghana.com/poll/Vote%20Now.jpg",
    },
  },
];

function ElectionsPage() {
  return (
    <div className="text-black dark:text-white">
      <div className="w-full p-6">
        <div className="max-w-7xl mx-auto flex justify-between mb-8">
          <h2 className="uppercase font-bold">Ongoing Elections</h2>
          <button className="px-4 py-2 bg-yellow-600 rounded shadow hover:bg-amber-600 hover:scale-95 cursor-pointer">
            Create New Election
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {mockElections.map((election) => (
            <ElectionCard key={election.id} election={election} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElectionsPage;
