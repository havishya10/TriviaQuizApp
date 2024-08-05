import { nanoid } from "nanoid";
const ids = Array.from({ length: 10 }, () => nanoid());
console.log(ids);
export default ids;
