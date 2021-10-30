import fs from "fs/promises";
import path from "path";
import express, { Request, Response } from "express";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router
    .route("/cells")
    .get(async (req: Request, res: Response) => {
      try {
        const result = await fs.readFile(fullPath, { encoding: "utf-8" });

        res.send(JSON.parse(result));
      } catch (err: any) {
        if (err?.code === "ENOENT") {
          await fs.writeFile(fullPath, "[]", "utf-8");
          res.send([]);
        } else {
          throw err;
        }
      }
    })
    .post(async (req: Request, res: Response) => {
      // take the list of cells from the req object.
      // serialize them
      const { cells }: { cells: Cell[] } = req.body;
      // write the cells into the file
      await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");

      res.send({ status: "ok" });
    });

  return router;
};
