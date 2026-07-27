import { eq } from 'drizzle-orm';
import {db} from '../db/index.js';
import { tasks } from '../db/schema.js';
async function getTasks(){
    return await db.select().from(tasks);
}
async function getTaskById(id){
    const [task] = await db.select().from(tasks).where(eq(tasks.id,id));
    return task;
}
async function createTask(title){
    const [task] = await db.insert(tasks).values({title}).returning();
    return task;
}
async function replaceTask(id, data){
   const [task] = await db
        .update(tasks)
        .set
            ({
                title : data.title, 
                completed : data.completed
            })
        .where(eq(tasks.id,id))
        .returning();
   return task;
}
function updateTask(id, data){
    const task = tasks.find(task => task.id === id);
    if(!task){
        return null;
    }
    Object.assign(task, data);
    return task;
}
async function deleteTask(id){
    const [task] = await db.delete(tasks).where(eq(tasks.id,id)).returning();
    return task;
}

export default {
    getTasks,
    getTaskById,
    createTask,
    replaceTask,
    updateTask,
    deleteTask,
};