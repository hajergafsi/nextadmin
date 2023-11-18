// uploadMiddleware.js
import multer, { diskStorage } from "multer";
import { extname } from "path";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../public/");
  },
  filename: (req, file, cb) => {
    const ext = extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

export default upload;
