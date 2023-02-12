import React from "react";

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

(function () {
  var cors_api_host = "cors-anywhere.herokuapp.com";
  var cors_api_url = "https://" + cors_api_host + "/";
  var slice = [].slice;
  var origin = window.location.protocol + "//" + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (
      targetOrigin &&
      targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host
    ) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();
