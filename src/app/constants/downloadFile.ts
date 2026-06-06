import { APP_NAME } from "./company-name";
import apkUrl from "../../files/apk/app-release.apk?url";

const APK_DOWNLOAD_NAME = `${APP_NAME}.apk`;

export function downloadApkFromLocalFile() {
  const anchor = document.createElement("a");
  anchor.href = apkUrl;
  anchor.download = APK_DOWNLOAD_NAME;
  anchor.rel = "noreferrer noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
