import { v4 as uuidv4 } from "uuid";

export const columnData = [
  {
    id: uuidv4(),
    title: "To Do",
    cards: [
      {
        id: uuidv4(),
        title: "Card 1",
      },
      {
        id: uuidv4(),
        title: "Card 2",
      },
      {
        id: uuidv4(),
        title: "Card 3",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In Progress",
    cards: [
      {
        id: uuidv4(),
        title: "Card 4",
      },
      {
        id: uuidv4(),
        title: "Card 5",
      },
      {
        id: uuidv4(),
        title: "Card 6",
      },
    ],
  },
  {
    id: uuidv4(),

    title: "Done",
    cards: [
      {
        id: uuidv4(),
        title: "Card 7",
      },

      {
        id: uuidv4(),
        title: "Card 8",
      },

      {
        id: uuidv4(),
        title: "Card 9",
      },
    ],
  },
];
