
// Insert dummy data into the "users" collection
db.users.insertOne({
    username: "LevelUP",
    email: "",
    password: ""
})

// Insert dummy data into the "posts" collection
db.posts.insertMany([
    {
        title: "",
        image: "",
        summary: "This is the first post",
        content: [
            { type: "", data: "" },
            { type: "", data: "" }
        ],
        author: ObjectId("60a6a7e4e8a4e7a8b9c0d1e2"),
        createdAt: new Date(),
        keywords: ["", ""],
        enabled: true
    }
])