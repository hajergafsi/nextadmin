import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import * as dateFn from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();

  const file = formData.get("image");
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads/${dateFn.format(Date.now(), "dd-MM-Y")}`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${file.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.extension(file.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

/*export async function POST(request) {
  const data = await request.formData();
  const file = data.get("image");

  if (!file) {
    console.log("no fileeeee");
    return NextResponse.json({ success: false });
  }

  try {
    upload.single("image")(request, null, async (err) => {
      if (err) {
        console.log("here1");
        console.error(err);
        return NextResponse.json({ success: false, error: "Upload failed" });
      }
      console.log("here2");
      return NextResponse.json({ success: true });
    });
  } catch (e) {
    console.error(e);
    console.log("here1");
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
    });
  }
  console.log("here4");
  return NextResponse.json({ success: true });
  /* const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = join("/", "public", file.name);
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);
 */

/* export default upload.single("image")(async (req, res) => {
  try {
    // You can access the uploaded file info using req.file
    const { filename, path: imagePath } = req.file;

    // Perform any additional processing if needed

    res.status(200).json({ filename, imagePath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}); */
