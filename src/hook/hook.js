import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export const useKeyPress = (keys, callback, node = null) => {
    // implement the callback ref pattern
    const callbackRef = useRef(callback);
    useLayoutEffect(() => {
        callbackRef.current = callback;
    });

    // handle what happens on key press
    const handleKeyPress = useCallback(
        (event) => {
            // check if one of the key is part of the ones we want
            if (keys.some((key) => event.key === key)) {
                callbackRef.current(event);
            }
        },
        [keys],
    );

    useEffect(() => {
        // target is either the provided node or the document
        const targetNode = node ?? document;
        // attach the event listener
        targetNode && targetNode.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => targetNode && targetNode.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress, node]);
};

// import { useEffect, useState } from 'react';

// export const useKeyPress = (keyTarget) => {
//     const [isKeyPressed, setIsKeyPressed] = useState(false);
//     const downHandler = ({ key }) => {
//         if (key === keyTarget) setIsKeyPressed(true);
//     };
//     const upHandler = ({ key }) => {
//         if ((key = keyTarget)) setIsKeyPressed(false);
//     };
//     useEffect(() => {
//         window.addEventListener('keydown', downHandler);
//         // window.addEventListener('keyup', downHandler);

//         return () => {
//             window.removeEventListener('keydown', downHandler);
//             // window.removeEventListener('keyup', downHandler);
//         };
//     }, []);
// };
