import { Product, User, News, Projects, SliderItem } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchNews = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await News.find({ title: { $regex: regex } }).count();
    const news = await News.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, news };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news!");
  }
};

export const fetchSlider = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await SliderItem.find().count();
    const sliders = await SliderItem.find()
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, sliders };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch slider items!");
  }
};

export const fetchProjects = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await Projects.find({ title: { $regex: regex } }).count();
    const projects = await Projects.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, projects };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news!");
  }
};

export const fetchProject = async (id) => {
  try {
    connectToDB();
    const project = await Projects.findById(id);
    return project;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch project!");
  }
};
export const fetchNew = async (id) => {
  try {
    connectToDB();
    const news = await News.findById(id);
    return news;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news!");
  }
};

export const getNewsBySlug = async (slug) => {
  try {
    connectToDB();
    const news = await News.findOne({ slug: slug });

    return news;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news!");
  }
};

export const getProjectBySlug = async (slug) => {
  try {
    connectToDB();
    const project = await Projects.findOne({ slug: slug });

    return project;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch news!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
