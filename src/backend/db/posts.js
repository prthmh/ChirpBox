// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 1,
    content: "Learing React is fun.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prxthmxsh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    content: "Today is a good day.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aayushK",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 3,
    content: "Preoccupied with a single leaf, you won't see the tree",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "janesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 4,
    content: "Difficulties strengthen the mind, as labour does the body.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulK",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 5,
    content: "We suffer more often in imaginaiton than in reality.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jaySht",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 6,
    content:
      "Worrying dosen't take away tomorrows troubles, it takes away todays peace.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jaySht",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
