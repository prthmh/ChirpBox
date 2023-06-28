import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Prathmesh",
    lastName: "Umberkar",
    username: "prxthmxsh",
    password: "prat@123",
    createdAt: "2023-06-27T17:48:53+05:30",
    updatedAt: "2023-06-27T17:48:53+05:30",
    profilePic: "https://picsum.photos/id/474/200/200",
    bookmarks: [],
    bio_link: "https://prathmeshumberkar.netlify.app/",
    bio: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. -Marcus Aurelius",
    bannerImg:
      "https://i.pinimg.com/originals/2e/59/a4/2e59a45889aa828e0e0da51691971655.jpg",
    followers: [
      {
        _id: uuid(),
        firstName: "Aayush",
        lastName: "Khatri",
        username: "aayushK",
        password: "ary@123",
        createdAt: "2023-05-27T17:48:53+05:30",
        updatedAt: "2023-05-27T17:48:53+05:30",
        profilePic: "https://picsum.photos/id/250/200/200",
      },
      {
        _id: uuid(),
        firstName: "Rahul",
        lastName: "Kapoor",
        username: "rahulK",
        password: "rk@123",
        createdAt: "2023-03-27T17:48:53+05:30",
        updatedAt: "2023-03-27T17:48:53+05:30",
        profilePic: "https://picsum.photos/id/338/200/200",
      },
      {
        _id: uuid(),
        firstName: "Deven",
        lastName: "Patel",
        username: "devP",
        password: "rk@123",
        createdAt: "2023-03-27T17:48:53+05:30",
        updatedAt: "2023-03-27T17:48:53+05:30",
        profilePic:
          "https://cdn.pixabay.com/photo/2023/06/18/00/38/beetle-8070966_1280.jpg",
      },
      {
        _id: uuid(),
        firstName: "Raj",
        lastName: "Malhotra",
        username: "RajM",
        password: "rk@123",
        createdAt: "2023-03-27T17:48:53+05:30",
        updatedAt: "2023-03-27T17:48:53+05:30",
        profilePic:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/srk-ddlj-raj_1200x768.png?size=690:388",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Raj",
        lastName: "Malhotra",
        username: "RajM",
        password: "rk@123",
        createdAt: "2023-03-27T17:48:53+05:30",
        updatedAt: "2023-03-27T17:48:53+05:30",
        profilePic:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/srk-ddlj-raj_1200x768.png?size=690:388",
      },
      {
        _id: uuid(),
        firstName: "Jay",
        lastName: "Shetty",
        username: "jaySht",
        password: "jay@123",
        createdAt: "2023-02-27T17:48:53+05:30",
        updatedAt: "2023-02-27T17:48:53+05:30",
        profilePic: "https://picsum.photos/id/342/200/200",
      },
    ],
  },
  {
    _id: 2,
    firstName: "Aayush",
    lastName: "Khatri",
    username: "aayushK",
    password: "ary@123",
    createdAt: "2023-05-27T17:48:53+05:30",
    updatedAt: "2023-05-27T17:48:53+05:30",
    profilePic: "https://picsum.photos/id/250/200/200",
    bookmarks: [],
    bannerImg:
      "https://i.pinimg.com/564x/fd/d3/91/fdd39171aac8afb88312d5d78d9e46f4.jpg",
  },
  {
    _id: 3,
    firstName: "Jane",
    lastName: "Smith",
    username: "janesmith",
    password: "jane@123",
    createdAt: "2023-04-27T17:48:53+05:30",
    updatedAt: "2023-04-27T17:48:53+05:30",
    profilePic: "https://picsum.photos/id/331/200/200",
    bookmarks: [],
    bannerImg:
      "https://i.pinimg.com/originals/2e/59/a4/2e59a45889aa828e0e0da51691971655.jpg",
  },
  {
    _id: 4,
    firstName: "Rahul",
    lastName: "Kapoor",
    username: "rahulK",
    password: "rk@123",
    createdAt: "2023-03-27T17:48:53+05:30",
    updatedAt: "2023-03-27T17:48:53+05:30",
    profilePic: "https://picsum.photos/id/338/200/200",
    bookmarks: [],
    bannerImg:
      "https://i.pinimg.com/1200x/83/3d/43/833d4399648f74f30f9fed8c86edb960.jpg",
  },
  {
    _id: 5,
    firstName: "Jay",
    lastName: "Shetty",
    username: "jaySht",
    password: "jay@123",
    createdAt: "2023-02-27T17:48:53+05:30",
    updatedAt: "2023-02-27T17:48:53+05:30",
    profilePic: "https://picsum.photos/id/342/200/200",
    bookmarks: [],
    bannerImg:
      "https://i.pinimg.com/originals/2e/59/a4/2e59a45889aa828e0e0da51691971655.jpg",
  },
  {
    _id: 6,
    firstName: "Raj",
    lastName: "Malhotra",
    username: "RajM",
    password: "rk@123",
    createdAt: "2023-03-27T17:48:53+05:30",
    updatedAt: "2023-03-27T17:48:53+05:30",
    profilePic:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/srk-ddlj-raj_1200x768.png?size=690:388",
    bookmarks: [],
    bannerImg:
      "https://i.pinimg.com/originals/2e/59/a4/2e59a45889aa828e0e0da51691971655.jpg",
  },
  {
    _id: 7,
    firstName: "Deven",
    lastName: "Patel",
    username: "devP",
    password: "rk@123",
    createdAt: "2023-03-27T17:48:53+05:30",
    updatedAt: "2023-03-27T17:48:53+05:30",
    profilePic:
      "https://cdn.pixabay.com/photo/2023/06/18/00/38/beetle-8070966_1280.jpg",
    bookmarks: [],
    bannerImg:
      "https://i.pinimg.com/originals/2e/59/a4/2e59a45889aa828e0e0da51691971655.jpg",
  },
];
