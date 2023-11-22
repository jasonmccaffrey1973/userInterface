import { useEffect, useState } from "react";

/** ------------------------------------------------------------------------- 
 *  Custom hook to manage localStorage. This hook provides an interface to 
 *  get, save, and remove data from localStorage. The localStorage is
 *  initialized with the value from localStorage or an empty object.
 *
 *  @param {string} LOCALSTORAGE_KEY - The key to use for the localStorage
 *  @returns {object} - An object with the following properties:
 *      - localStorageState: The current state of the localStorage
 *      - getLocalStorage: Function to get a value from the localStorage
 *      - saveLocalStorage: Function to save a value to the localStorage
 *      - removeLocalStorage: Function to remove a key from the localStorage
 * -------------------------------------------------------------------------- */
const useLocalStorage = (LOCALSTORAGE_KEY = 'OF_APP') => {
    // Initialize state with value from localStorage or an empty object
    const [localStorageState , setLocalStorageState] = useState(() => {
        try {
            const item = window.localStorage.getItem(LOCALSTORAGE_KEY);
            return item ? JSON.parse(item) : {};
        } catch (error) {
            console.log(error);
            return {};
        }
    });

/** -------------------------------------------------------------------------
 * Save the state to localStorage when it changes 
 * 
 * @param {object} localStorageState - The current state of the localStorage
 * @param {string} LOCALSTORAGE_KEY - The key to use for the localStorage
 * @returns {void}
 * -------------------------------------------------------------------------- */
    useEffect(() => {
        try {
            window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageState));
        } catch (error) {
            console.log(error);
        }
    }, [localStorageState, LOCALSTORAGE_KEY]);

/** -------------------------------------------------------------------------
 * Function to remove a key from the state
 * 
 * @param {string} key - The key to remove from the state
 * @returns {void}
 * -------------------------------------------------------------------------- */
    const removeLocalStorage = (key) => {
        setLocalStorageState(prevState => {
            const newState = { ...prevState };
            delete newState[key];
            return newState;
        });
    };

/** -------------------------------------------------------------------------
 * Function to get a value from the state
 * 
 * @param {string} key - The key to get from the state
 * @param {boolean} remove - Whether to remove the key from the state
 * @returns {*} - The value of the key from the state
 * -------------------------------------------------------------------------- */
    const getLocalStorage = (key, remove = false) => {
        const value = localStorageState[key];
        if (remove) removeLocalStorage(key);
        return value ?? null;
    }

/** -------------------------------------------------------------------------
 * Function to save a value to the state
 * 
 * @param {string} key - The key to save to the state
 * @param {*} value - The value to save to the state
 * @returns {void}
 * -------------------------------------------------------------------------- */
    const saveLocalStorage = (key, value) => {
        setLocalStorageState(prevState => ({ ...prevState, [key]: value }));
    }

/** -------------------------------------------------------------------------
 * Return the state and functions
 * 
 * @returns {object} - An object with the following properties:
 *   - localStorageState: The current state of the localStorage
 *   - getLocalStorage: Function to get a value from the localStorage
 *   - saveLocalStorage: Function to save a value to the localStorage
 *   - removeLocalStorage: Function to remove a key from the localStorage
 * -------------------------------------------------------------------------- */
    return { localStorageState, getLocalStorage, saveLocalStorage, removeLocalStorage };
}

/** -------------------------------------------------------------------------
 * @typedef {object} useLocalStorage
 * -------------------------------------------------------------------------- */
export default useLocalStorage;
