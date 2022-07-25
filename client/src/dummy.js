import { v4 as uuidv4 } from "uuid";
import { img1, img2, img3 } from "./Images";

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

export const testimonials = [
  {
    id: 1,
    userImg: img1,
    username: "Developer@miles",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto, suscipit perspiciatis fugit error ex. Deserunt, nemo, perferendis maxime saepe, pariatur repudiandae fuga vel recusandae harum eos eaque soluta eum?",
  },
  {
    id: 1,
    userImg: img2,
    username: "Coder@miles",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto, suscipit perspiciatis fugit error ex. Deserunt, nemo, perferendis maxime saepe, pariatur repudiandae fuga vel recusandae harum eos eaque soluta eum?",
  },
  {
    id: 1,
    userImg: img3,
    username: "Milestone@miles",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto, suscipit perspiciatis fugit error ex. Deserunt, nemo, perferendis maxime saepe, pariatur repudiandae fuga vel recusandae harum eos eaque soluta eum?",
  },
];
