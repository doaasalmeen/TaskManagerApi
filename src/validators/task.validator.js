import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      error: "Title must be a string",
    })
    .trim()
    .min(1, {
      message: "Title is required",
    }),
});

export const replaceTaskSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Title is required",
  }),
  completed: z.boolean({
    error: "Completed must be a boolean",
  }),
});

export const updateTaskSchema = z.object({title: z.string({error: "Title must be a string",}).trim().min(1, {message: "Title cannot be empty", }).optional(),completed: z.boolean({error: "Completed must be a boolean",}).optional(),}).refine((data) => Object.keys(data).length > 0,{message: "At least one field must be provided",});

export const taskIdSchema = z.object({
  id: z.coerce
    .number()
    .int({
      message: "Task ID must be an integer",
    })
    .positive({
      message: "Task ID must be greater than 0",
    }),
});