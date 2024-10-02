import { Router, Request, Response } from "express"
const router: Router = Router()

import Task from "../../../models/task.model"

router.get("/", async (req: Request, res: Response): Promise<void> => {
    const tasks = await Task.find({
        deleted: "false"
    })

    console.log(tasks)

    res.json(tasks)
})

router.get("/detail/:id", async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id

    const task = await Task.findOne({
        _id: id,
        deleted: "false"
    })

    res.json(task)
})

export const taskRoutes: Router  = router