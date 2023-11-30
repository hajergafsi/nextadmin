"use server";

import { revalidatePath } from "next/cache";
import { News, Product, Projects, SliderItem, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { redirects } from "@/next.config";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addNews = async (formData) => {
  const { title, desc, slug, image, source } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newItem = new News({
      title,
      desc,
      slug,
      image,
      source,
    });
    await newItem.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create news!");
  }

  revalidatePath("/dashboard/news");
  redirect("/dashboard/news");
};

export const addSliderItem = async (formData) => {
  const { image } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newItem = new SliderItem({
      image,
    });

    await newItem.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create slider!");
  }

  revalidatePath("/dashboard/slider");
  redirect("/dashboard/slider");
};

export const addProject = async (formData) => {
  const { title, desc, slug, image, time } = Object.fromEntries(formData);

  try {
    connectToDB();
    console.log(formData);
    const newItem = new Projects({
      title,
      desc,
      slug,
      image,
      time,
    });
    await newItem.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create project!");
  }

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
};

export const deleteNews = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await News.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete news!");
  }

  revalidatePath("/dashboard/news");
};

export const deleteProject = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Projects.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete project!");
  }

  revalidatePath("/dashboard/projects");
};

export const updateNews = async (formData) => {
  const { id, title, desc, source, slug } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      source,
      slug,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await News.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update news!");
  }

  revalidatePath("/dashboard/news");
  redirect("/dashboard/news");
};

export const updateProject = async (formData) => {
  const { id, title, desc, time, slug, image } = Object.fromEntries(formData);
  console.log(time);
  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      time,
      slug,
      image,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Projects.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update project!");
  }

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  /*  try { */
  await signIn("credentials", {
    username,
    password,
  });
  /* } catch (err) {
    console.log(err);
    return "login failed!";
  } */
};
