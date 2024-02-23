import mongoose from "mongoose";


// Пользователи
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

},
    { timestamps: true }
)

// Посты
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

// Отзывы
const reviewSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Вакансии
const vacancySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        contactEmail: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Цены
const priceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);


export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Review = mongoose.models?.Review || mongoose.model("Review", reviewSchema);
export const Vacancy = mongoose.models?.Vacancy || mongoose.model("Vacancy", vacancySchema);
export const Price = mongoose.models?.Price || mongoose.model("Price", priceSchema);
