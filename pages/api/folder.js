import nc from "next-connect";
import fs from "fs";
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .post(async (req, res) => {
    const { dir } = req.query;
    try {
      fs.mkdirSync(dir);
    } catch (err) {
      throw new Error(err);
    }
  })
  .delete(async (req, res) => {
    const { dir } = req.query;
    try {
      fs.rmdirSync(dir, { recursive: true });
      res.json({ message: `${dir} deleted successfully` });
    } catch (err) {
      throw new Error(err);
    }
  });

export default handler;
