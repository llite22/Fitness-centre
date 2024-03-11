'use server'
import { signIn, signOut } from "./auth";
import { Post, Price, Review, User, Vacancy } from "./models";
import { connectToDb } from "./utils";
import bcryptjs from 'bcryptjs'
import { revalidatePath } from "next/cache";

export const addPost = async (prevState: any, formData: any) => {
    const { title, desc, slug, userId, img } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const deletePost = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const addUser = async (prevState: any, formData: any) => {
    const { username, email, password, img } = Object.fromEntries(formData);
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    try {
        connectToDb();
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const deleteUser = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const addJob = async (prevState: any, formData: any) => {
    const { userId, title, contactEmail, img, description } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newVacancy = new Vacancy({
            userId,
            title,
            contactEmail,
            img,
            description
        });

        await newVacancy.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const deleteJob = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Vacancy.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const addPrice = async (prevState: any, formData: any) => {
    const { userId, title, description, amount } = Object.fromEntries(formData);
    try {
        connectToDb();
        const newPrice = new Price({
            userId,
            title,
            description,
            amount
        });
        await newPrice.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const deletePrice = async (formData: any) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb();
        await Price.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};

export const addRewiev = async (prevState: any, formData: any) => {
    const { userId, text, rating } = Object.fromEntries(formData);
    const textInput = text !== '' ? text : '  '
    try {
        connectToDb();
        const newReview = new Review({
            userId,
            text: textInput,
            rating
        });
        await newReview.save();
        console.log("saved to db");
        revalidatePath("/feedback");
    } catch (err) {
        console.log(err);
        return { error: "Что-то пошло не так!" };
    }
};



export const handleGithubLogin = async () => {
    await signIn("github");
};

export const handleLogout = async () => {
    await signOut();
};

export const register = async (previousState: any, formData: any) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) {
        return { error: "Пароли не совпадают" };
    }
    try {
        connectToDb()
        const user = await User.findOne({ username })

        if (user) {
            return { error: "Имя пользователя уже существует" };
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,

        })
        await newUser.save()
        return { success: true };
    }
    catch (error) {
        console.log(error);
        return { error: 'Что-то пошло не так!' }

    }
};


export const login = async (prevState: any, formData: any) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error: any) {
        console.log(error);

        if (error.name.includes("CredentialsSignin")) {
            return { error: "Неверное имя пользователя или пароль" };
        }
        throw error;
    }
};