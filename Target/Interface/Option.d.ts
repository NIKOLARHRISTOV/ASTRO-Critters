/**
 * @module Option
 *
 */
export default interface Type extends Option {
    [key: string]: any;
    Critters?: boolean | Critters;
}
import type Critters from "../Interface/Critters.js";
import type Option from "files-pipe/Target/Interface/Option.js";
