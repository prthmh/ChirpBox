import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Learing React is fun.",
    postPic:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prxthmxsh",
    createdAt: "2023-06-27T17:48:53+05:30",
    updatedAt: "2023-06-27T17:48:53+05:30",
  },
  {
    _id: uuid(),
    content: "Today is a good day.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aayushK",
    createdAt: "2023-05-27T17:48:53+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Preoccupied with a single leaf, you won't see the tree",
    postPic:
      "https://i.pinimg.com/736x/7a/43/62/7a4362dbfb4eccdfb2b38e1d366a7006.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "janesmith",
    createdAt: "2023-04-27T17:48:53+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Difficulties strengthen the mind, as labour does the body.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulK",
    createdAt: "2023-03-27T17:48:53+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "We suffer more often in imaginaiton than in reality.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jaySht",
    createdAt: "2023-02-27T17:48:53+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Worrying dosen't take away tomorrows troubles, it takes away todays peace.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jaySht",
    createdAt: "2023-02-27T18:48:53+05:30",
    updatedAt: formatDate(),
  },
];
