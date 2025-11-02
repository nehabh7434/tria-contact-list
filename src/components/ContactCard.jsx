import React from "react";
import { motion } from "framer-motion";

export default function ContactCard({ contact }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="bg-white rounded-2xl p-4 card-shadow flex gap-4 items-center"
      aria-label={`Contact ${contact.name}`}
    >
      <div
        className="flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center text-white font-semibold"
        style={{ background: contact.avatarColor }}
      >
        {contact.name
          .split(" ")
          .map((s) => s[0])
          .slice(0, 2)
          .join("")}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold leading-tight text-gray-900">
          {contact.name}
        </h3>
        <p className="text-sm text-gray-500 truncate">{contact.email}</p>
        <p className="text-sm text-gray-500">{contact.phone}</p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="text-sm px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 focus:ring-2 focus:ring-primary/30">
          Message
        </button>
        <button className="text-sm px-3 py-1 rounded-full bg-primary text-white shadow-sm hover:scale-[1.02] transform transition">
          Call
        </button>
      </div>
    </motion.article>
  );
}
