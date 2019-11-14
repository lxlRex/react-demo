/**
 * @desc get uuid
 * @return <string> uuid
 */
export default function () {
    return Math.random().toString(36).substring(0, 8);
}
