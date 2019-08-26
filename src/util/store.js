// @flow
import SecureLS from 'secure-ls';
import { NotificationManager } from 'react-notifications';

/**
 * Create Encrypted Local Storage
 */
const store = new SecureLS({ encodingType: 'rc4' });

/**
 * API Method to Retrieve data from a particular Key in store
 */
export function get(key: string): ?string {
  try {
    return store.get(key);
  } catch (e) {
    NotificationManager.warning('Failed to retrieve local data', 'Operation Failed');
  }
}

/**
 * API Method to Retrieve all Keys from store
 */
export function getAllKeys(): ?Array<string> {
  try {
    return store.getAllKeys();
  } catch (e) {
    NotificationManager.warning('Failed to retrieve all local data', 'Operation Failed');
  }
}

/**
 * API Method to Set or Update data in store
 */
export function set(key: string, value: string): boolean {
  try {
    store.set(key, value);
    return true;
  } catch (e) {
    NotificationManager.warning('Failed to update local data', 'Operation Failed');
    return false;
  }
}

/**
 * API Method to Remove a particular Key from store
 */
export function remove(key: string): boolean {
  try {
    store.remove(key);
    return true;
  } catch (e) {
    NotificationManager.warning('Failed to delete local data', 'Operation Failed');
    return false;
  }
}

/**
 * API Method to Remove all the Keys from store
 */
export function removeAll(): boolean {
  try {
    store.removeAll();
    return true;
  } catch (e) {
    NotificationManager.warning('Failed to delete all local data', 'Operation Failed');
    return false;
  }
}

/**
 * API Method to Cleanup store
 */
export function clear(): boolean {
  try {
    store.clear();
    return true;
  } catch (e) {
    NotificationManager.warning('Failed to clear local data', 'Operation Failed');
    return false;
  }
}
