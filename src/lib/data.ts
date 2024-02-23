import { Post, Price, Review, User, Vacancy } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

const ITEM_PER_PAGE = 6

export const getPosts = async (page: string) => {
    noStore()
    try {
        connectToDb()
        const count = await Post.find().count();
        const posts = await Post.find().sort({ createdAt: -1 }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (+page - 1));
        return { count, posts }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get posts");
    }
}

export const getPost = async (slug: string) => {
    try {
        connectToDb()
        const post = await Post.findOne({ slug })
        return post
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get post");
    }
}

export const getUser = async (id: string) => {
    noStore()
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get user");
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find().sort({ createdAt: -1 })
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const getJobs = async () => {
    noStore()
    try {
        connectToDb()
        const jobs = await Vacancy.find().sort({ createdAt: -1 })
        return jobs
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get jobs");
    }
}

export const getPrice = async () => {
    noStore()
    try {
        connectToDb()
        const price = await Price.find().sort({ createdAt: -1 })
        return price
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get price");
    }
}

export const getReviews = async () => {
    noStore()
    try {
        connectToDb()
        const reviews = await Review.find().sort({ createdAt: -1 })
        return reviews
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get reviews");
    }
}