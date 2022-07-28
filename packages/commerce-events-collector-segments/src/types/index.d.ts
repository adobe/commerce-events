import { AlloyInstance } from "../aep/types";

declare global {
    interface Window {
        alloy: AlloyInstance;
    }
}
