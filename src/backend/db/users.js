import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Prathmesh",
    lastName: "Umberkar",
    username: "prxthmxsh",
    password: "prat@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/474/200/200",
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Aayush",
    lastName: "Khatri",
    username: "aayushK",
    password: "ary@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/250/200/200",
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Smith",
    username: "janesmith",
    password: "jane@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/331/200/200",
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Rahul",
    lastName: "Kapoor",
    username: "rahulK",
    password: "rk@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/338/200/200",
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Jay",
    lastName: "Shetty",
    username: "jaySht",
    password: "jay@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePic: "https://picsum.photos/id/342/200/200",
    bookmarks: [],
  },
];
