import { Request, Response } from "express"
import Task from "../models/task.model"

export const index = async (req: Request, res: Response): Promise<void> => {
    interface Find {
        deleted: boolean,
        status?: string
    }
    const find: Find = {
        deleted: false
    }

    if (req.query.status) {
        find.status = req.query.status.toString() // chỉ cần dùng find["status"] cho ngắn gọn
    }
    const tasks = await Task.find(find)

    res.json(tasks)
}

export const detail = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id

    const task = await Task.findOne({
        _id: id,
        deleted: "false"
    })

    res.json(task)
}