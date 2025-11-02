import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/AddContactModal";
import { getContacts, searchContacts, addContact } from "./utils/api";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Load contacts once
  useEffect(() => {
    const loadContacts = async () => {
      setLoading(true);
      const data = await getContacts();
      setContacts(data);
      setLoading(false);
    };
    loadContacts();
  }, []);

  // ✅ Handle search (no infinite loops, no blinking)
  useEffect(() => {
    const controller = new AbortController();
    const delay = setTimeout(async () => {
      if (query.trim() === "") {
        const data = await getContacts();
        setContacts(data);
      } else {
        const data = await searchContacts(query);
        setContacts(data);
      }
    }, 400);

    return () => {
      controller.abort();
      clearTimeout(delay);
    };
  }, [query]);

  // ✅ Add contact (smooth and safe)
  async function handleAdd(contact) {
    setLoading(true);
    const newContact = await addContact(contact);
    setContacts((prev) => [newContact, ...prev]);
    setLoading(false);
  }

  return (
    <div className="min-h-screen p-6 md:p-10 bg-surface transition-colors duration-300">
      <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Tria Contact List
          </h1>
          <p className="text-sm text-gray-500">
            Smooth, stable and stylish contact manager.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <SearchBar value={query} onChange={setQuery} />
          <AddContactModal onAdd={handleAdd} />
        </div>
      </header>

      <main>
        {loading ? (
          <div className="grid place-items-center py-20 text-lg text-gray-500 animate-pulse">
            Loading...
          </div>
        ) : (
          <ContactList contacts={contacts} />
        )}
      </main>

      <footer className="mt-8 text-sm text-gray-500 text-center">
        Made with 💜 by Neha for Tria Assignment
      </footer>
    </div>
  );
}
