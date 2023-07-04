
import _ from "lodash"


export default function nestedObjectCheck (originObject, path) {
    return _.get(originObject, path, false)
}