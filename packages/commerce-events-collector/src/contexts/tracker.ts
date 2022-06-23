import pkg from "../../package.json";
import schemas from "../schemas";
import { TrackerContext } from "../types/contexts";

const createContext = (): TrackerContext => {
    const context: TrackerContext = {
        schema: schemas.MAGENTO_JS_TRACKER_SCHEMA_URL,
        data: {
            magentoJsVersion: pkg.version,
        },
    };

    return context;
};

export default createContext;
