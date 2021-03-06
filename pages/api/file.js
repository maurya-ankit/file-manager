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
    const { filePath } = req.query;
    try {
      fs.closeSync(fs.openSync(filePath, "w"));
    } catch (err) {
      throw new Error(err);
    }
  })
  .patch(async (req, res) => {
    const { filePath } = req.query;
    let body = req.body;
    try {
      fs.writeFileSync(filePath, body.fileContent);
    } catch (err) {
      throw new Error(err);
    }
  })
  .delete(async (req, res) => {
    const { filePath } = req.query;
    try {
      fs.unlinkSync(filePath);
      res.json({ message: `${filePath} deleted successfully` });
    } catch (err) {
      throw new Error(err);
    }
  });

export default handler;
