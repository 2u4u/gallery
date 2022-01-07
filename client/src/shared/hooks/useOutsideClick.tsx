import { useEffect } from "react";

export const useOutsideClick = (ref: React.RefObject<HTMLInputElement>, handleCloseSelect: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleCloseSelect();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, handleCloseSelect]);
}