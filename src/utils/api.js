// Mock API for Contacts
let contacts = [
  {
    id: "1",
    name: "Aisha Kapoor",
    email: "aisha@example.com",
    phone: "+91 98765 43210",
    avatarColor: "#fd79a8",
  },
  {
    id: "2",
    name: "Rohan Mehta",
    email: "rohan@example.com",
    phone: "+91 91234 56789",
    avatarColor: "#74b9ff",
  },
  {
    id: "3",
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "+91 99887 66554",
    avatarColor: "#55efc4",
  },
  {
    id: "4",
    name: "Dev Patel",
    email: "dev@example.com",
    phone: "+91 90123 45678",
    avatarColor: "#ffeaa7",
  },
];

const simulate = (result, ms = 600) =>
  new Promise((resolve) => setTimeout(() => resolve(result), ms));

export async function getContacts() {
  return simulate([...contacts], 700);
}

export async function searchContacts(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return simulate([...contacts], 300);
  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(q)
  );
  return simulate(filtered, 400);
}

export async function addContact(contact) {
  const id = String(Date.now());
  const newContact = { id, ...contact };
  contacts = [newContact, ...contacts];
  return simulate(newContact, 300);
}
