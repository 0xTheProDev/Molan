import SecureLS from "secure-ls";
import { NotificationManager } from "react-notifications";

/**
 * Create Encrypted Local Storage
 */
const store = new SecureLS({ encodingType: "rc4" });

/**
 * API Method to Retrieve, Update and Delete store
 */
export function get(key) {
    try {
        return store.get(key);
    } catch(e) {
        NotificationManager.warning("Failed to retrieve local data", "Operation Failed");
        return false;
    }
}

export function getAllKeys() {
    try {
        return store.getAllKeys();
    } catch(e) {
        NotificationManager.warning("Failed to retrieve all local data", "Operation Failed");
        return false;
    }
}

export function set(key, value) {
    try {
        store.set(key, value);
        return true;
    } catch(e) {
        NotificationManager.warning("Failed to update local data", "Operation Failed");
        return false;
    }
}

export function remove(key) {
    try {
        store.remove(key);
        return true;
    } catch(e) {
        NotificationManager.warning("Failed to delete local data", "Operation Failed");
        return false;
    }
}

export function removeAll() {
    try {
        store.removeAll();
        return true;
    } catch(e) {
        NotificationManager.warning("Failed to delete all local data", "Operation Failed");
        return false;
    }
}

export function clear() {
    try {
        store.clear();
        return true;
    } catch(e) {
        NotificationManager.warning("Failed to clear local data", "Operation Failed");
        return false;
    }
}
