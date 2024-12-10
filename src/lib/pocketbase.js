
import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_URL); // 서버 주소
pb.autoCancellation(false); // 요청 자동 취소 비활성화

export default pb;
