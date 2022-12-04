interface Event {
  id: string;
  name: string;
  description?: string;
}

export const events: Event[] = [
  {
    name: "DevTools Daily",
  },
  {
    name: "DevTools Planning",
  },
  {
    name: "DevTools Retro",
  },
  {
    name: "Saleor Demo",
  },
].map((event, index) => ({
  id: index.toString(),
  ...event,
}));
