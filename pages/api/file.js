import nc from "next-connect";

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
    res.json({ hello: filePath });
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  })
  .delete(async (req, res) => {
    const { filePath } = req.query;
    res.json({ hello: filePath });
  });
