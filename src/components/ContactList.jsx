import React from "react";
import ContactCard from "./ContactCard";
import { AnimatePresence } from "framer-motion";

export default function ContactList({ contacts }) {
  if (!contacts || contacts.length === 0)
    return (
      <div className="p-12 text-center text-gray-500">
        No contacts found. Try adding a new contact.
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {contacts.map((c) => (
          <ContactCard key={c.id} contact={c} />
        ))}
      </AnimatePresence>
    </div>
  );
}
