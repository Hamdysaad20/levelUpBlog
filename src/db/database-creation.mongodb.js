use('blogs-db')
db.createCollection("users",
{
    validator:
    {
        $jsonSchema:
        {
            bsonType: "object",
            required: ["username", "email", "password"],
            properties:
            {
                username:
                {
                    bsonType: "string",
                    description: "Username must be a string and is required"
                },
                email:
                {
                    bsonType: "string",
                    description: "Email must be a string and is required"
                },
                password:
                {
                    bsonType: "string",
                    description: "Password must be a string and is required"
                },
            }
        }
    }
})
db.users.insertOne({
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123"
})

db.createCollection("posts", {
    validator:
    {
        $jsonSchema:
        {
            bsonType: "object",
            required: ["title","image","summary", "content", "author", "createdAt", "keywords"],
            properties:
            {
                title:
                {
                    bsonType: "string",
                    description: "Title must be a string and is required"
                },
                image:
                {
                    bsonType: "string",
                    description: "Image must be a string and is required"
                },
                summary:
                {
                    bsonType: "string",
                    description: "Summary must be a string and is required"
                },
                content:
                {
                    bsonType: "array",
                    items:
                    {
                        bsonType: "object",
                        required: ["type", "data"],
                        properties:
                        {
                            type:
                            {
                                bsonType: "string",
                                description: "Type must be a string and is required"
                            },
                            data:
                            {
                                bsonType: "string",
                                description: "Data must be a string and is required"
                            }
                        }
                    },
                    description: "Content must be an array of objects and is required"
                },
                author:
                {
                    bsonType: "objectId",
                    description: "Author must be a valid ObjectId and is required"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Creation date must be a date and is required"
                },
                keywords:
                {
                    bsonType: "array",
                    items:
                    {
                        bsonType: "string",
                        description: "Keywords must be an array of strings"
                    },
                    description: "Keywords must be an array and is required"
                }
            }
        }
    }
})
db.posts.insertOne({
    title: "Sample Post",
    image: "sample.jpg",
    summary: "This is a sample post",
    content: [
        {
            type: "text",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            type: "image",
            data: "image.jpg"
        }
    ],
    author: ObjectId("60a6e6e8c8e8e8e8e8e8e8e8"),
    createdAt: new Date(),
    keywords: ["sample", "dummy", "data"]
})

db.createCollection("comments",
{
    validator:
    {
        $jsonSchema:
        {
            bsonType: "object",
            required: ["content", "author", "post", "createdAt"],
            properties:
            {
                content:
                {
                    bsonType: "string",
                    description: "Content must be a string and is required"
                },
                author:
                {
                    bsonType: "objectId",
                    description: "Author must be a valid ObjectId and is required"
                },
                post:
                {
                    bsonType: "objectId",
                    description: "Post must be a valid ObjectId and is required"
                },
                createdAt:
                {
                    bsonType: "date",
                    description: "Creation date must be a date and is required"
                },
            }
        }
    }
})
db.comments.insertOne({
    content: "This is a sample comment",
    author: ObjectId("60a6e6e8c8e8e8e8e8e8e8e8"),
    post: ObjectId("60a6e6e8c8e8e8e8e8e8e8e8"),
    createdAt: new Date()
})