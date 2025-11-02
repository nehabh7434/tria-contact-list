import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AddContactModal({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    avatarColor: "#ffd3b6",
  });

  function reset() {
    setForm({ name: "", email: "", phone: "", avatarColor: "#ffd3b6" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return alert("Name is required");
    await onAdd(form);
    reset();
    setOpen(false);
  }

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-xl bg-accent text-white font-semibold shadow hover:brightness-95"
      >
        + Add Contact
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 grid place-items-center"
        >
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <motion.form
            onSubmit={handleSubmit}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="relative z-50 bg-white rounded-2xl p-6 w-full max-w-md card-shadow"
          >
            <h3 className="text-lg font-semibold mb-3">Add a new contact</h3>
            <label className="block mb-2 text-sm text-gray-600">
              Name
              <input
                className="mt-1 w-full p-2 rounded-md border"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block mb-2 text-sm text-gray-600">
              Email
              <input
                type="email"
                className="mt-1 w-full p-2 rounded-md border"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label className="block mb-4 text-sm text-gray-600">
              Phone
              <input
                className="mt-1 w-full p-2 rounded-md border"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setOpen(false);
                }}
                className="px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-white"
              >
                Save
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </div>
  );
}
