import bs58 from "bs58"
import { privateKey} from "./config"

const kp = bs58.decode(privateKey as string)

console.log(kp)