/**
 * @module Critters
 *
 */
export default interface Interface {
    trace?: (message: string) => void;
    debug?: (message: string) => void;
    info?: (message: string) => void;
    warn?: (message: string) => void;
    error?: (message: string) => void;
}
