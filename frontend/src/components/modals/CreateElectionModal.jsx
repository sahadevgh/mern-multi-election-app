import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

function CreateElectionModal({
  newElectionModalOpen,
  setNewElectionModalOpen,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    dueDate: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitting form data:", formData);
    // After submission, you might want to close the modal

    setNewElectionModalOpen(false);
    // And reset the form
    setFormData({ title: "", description: "", startDate: "", dueDate: "", image: null });
  }

  return (
    <Dialog open={newElectionModalOpen} onOpenChange={setNewElectionModalOpen}>
      <DialogContent className="bg-white border border-gray-500/25">
        <DialogHeader className="text-2xl text-blue-900 font-semibold">
          Create New Election
        </DialogHeader>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4">
            <label className="flex flex-col w-full">
              Election Title:
              <input
                type="text"
                name="title"
                className="w-full border border-gray-500/25 px-4 py-2 rounded"
                onChange={handleChange}
                value={formData.title}
              />
            </label>
            <label className="w-full">
              Election Description:
              <textarea
                name="description"
                className="w-full border border-gray-500/25 px-4 py-2 rounded"
                onChange={handleChange}
                value={formData.description}
              ></textarea>
            </label>
            <label className="flex flex-col w-full">
              Start Date:
              <input
                type="date"
                name="startDate"
                className="w-full border border-gray-500/25 px-4 py-2 rounded"
                onChange={handleChange}
                value={formData.startDate}
              />
            </label>
            <label className="flex flex-col w-full">
              Due Date:
              <input
                type="date"
                name="dueDate"
                className="w-full border border-gray-500/25 px-4 py-2 rounded"
                onChange={handleChange}
                value={formData.dueDate}
              />
            </label>
            <label className="flex flex-col w-full">
              Election Banner:
              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full border border-gray-500/25 px-4 py-2 rounded"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, image: e.target.files[0] }))
                }
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-500"
            >
              Create Election
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateElectionModal;
