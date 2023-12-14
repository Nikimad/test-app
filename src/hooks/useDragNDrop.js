import { useRef, useCallback } from "react";

const useDragNDrop = ({ swap }) => {
  const dragIndex = useRef();
  const dropIndex = useRef();

  const handleDragStart = useCallback((index) => () => {
    if (dragIndex.current !== index) {
      dragIndex.current = index;
    }
  }, [dragIndex]);

  const handleDragEnter = useCallback((index) => () => {
    if (dropIndex.current !== index) {
      dropIndex.current = index;
    }
  }, [dropIndex]);

  const handleDragEnd = useCallback(() => {
    if (dragIndex.current !== dropIndex.current) {
      swap(dragIndex.current, dropIndex.current);
    }
  }, [swap, dragIndex, dropIndex]);
    
  return { handleDragStart, handleDragEnter, handleDragEnd };
};

export default useDragNDrop;
