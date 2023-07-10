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
    mediaURL:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mediaAlt: "react",
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
    content: "Dream Vacation Mount Fuji-Japan.",
    mediaURL: "https://mcdn.wallpapersafari.com/medium/52/82/LqIjUa.jpg",
    mediaAlt: "react",
    likes: {
      likeCount: 20,
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
    mediaURL: "",
    mediaAlt: "",
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
    mediaURL:
      "https://i.pinimg.com/736x/7a/43/62/7a4362dbfb4eccdfb2b38e1d366a7006.jpg",
    mediaAlt: "manga",
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
    mediaURL: "",
    mediaAlt: "",
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
    mediaURL: "",
    mediaAlt: "",
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
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jaySht",
    createdAt: "2023-02-27T18:48:53+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "",
    mediaURL: "https://i.redd.it/dpiofcduwk491.jpg",
    mediaAlt: "qoute",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "RajM",
    createdAt: "2023-01-27T18:48:53+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. - Henry Ford",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jigP",
    createdAt: "2023-01-27T18:48:53+05:30",
    updatedAt: formatDate(),
  },
];
