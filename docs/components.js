module.exports = {
    schemas: {
        TaskBody: {
            type: "object",
            properties: {
                title: {
                    type: "string",
                    description: "Title of the task",
                    example: "Finish Swagger documentation",
                }
            }
        },
        Task: {
            type: "object",
            properties: {
                title: {
                    type: "string",
                    description: "Title of the task",
                    example: "Finish Swagger documentation",
                },
                completed: {
                    type: "boolean",
                    description: "Whether the task is completed",
                    example: false,
                },
                _id: {
                    type: "string",
                    description: "Unique identifier for the task",
                    example: "612e9f17cbbf5a0015e40445",
                },
                createdAt: {
                    type: "string",
                    format: "date-time",
                    description: "Timestamp when the task was created",
                    example: "2021-08-31T12:00:00.000Z",
                },
                updatedAt: {
                    type: "string",
                    format: "date-time",
                    description: "Timestamp when the task was last updated",
                    example: "2021-09-01T12:00:00.000Z",
                },
            },
        },
    },
};
