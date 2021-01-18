import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

export default function Index({ handleFiles }) {
  console.log(handleFiles, "handle");
  return (
    <div>
      {/* <DropzoneArea
        onChange={handleFiles}
        dropzoneText={"Ngarkoni Foto"}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        onDrop={onDrop}
      /> */}
      <input type="file" name="file" onChange={handleFiles} />
    </div>
  );
}
