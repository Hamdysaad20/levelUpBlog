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

db.createCollection("posts", {
    validator:
    {
        $jsonSchema:
        {
            bsonType: "object",
            required: ["title", "image", "summary", "content", "author", "createdAt", "keywords", "enabled"],
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
                },
                enabled:
                {
                    bsonType: "bool",
                    description: "Enabled must be a boolean and is required"
                }
            }
        }
    }
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