module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Tasks"], 
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskBody",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/": {
            get: {
                tags: ["Tasks"], 
                description: "Get all tasks",
                operationId: "getTasks",
                parameters: [],
                responses: {
                    200: {
                        description: "List of all tasks",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Task",
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/id/{_id}": {
            get: {
                tags: ["Tasks"], 
                description: "Get a task by its ID",
                operationId: "getTaskById",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "The ID of the task to retrieve",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Task retrieved successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
            put: {
                tags: ["Tasks"], 
                description: "Update a task by its ID",
                operationId: "updateTaskById",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "The ID of the task to update"
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskBody",
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Task updated successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
            delete: {
                tags: ["Tasks"], 
                description: "Delete a task by its ID",
                operationId: "deleteTaskById",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "The ID of the task to delete",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Task deleted successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: ["Tasks"], 
                description: "Mark a task as completed",
                operationId: "markTaskAsCompleted",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        description: "The ID of the task to mark as completed",
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Task marked as completed",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
    },
};

