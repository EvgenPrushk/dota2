import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './slices/cardSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from './store/store';

interface ListItem {
  id: number;
  color: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);

  const handleAddItem = () => {
    const newItem: ListItem = {
      id: Date.now(),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="py-5">
      <div className="flex justify-center space-x-4 mb-5">
        <button onClick={handleAddItem} className="px-4 py-2 bg-blue-500 text-white rounded">
          Добавить
        </button>
        <button onClick={handleRemoveItem} className="px-4 py-2 bg-red-500 text-white rounded">
          Удалить
        </button>
      </div>
      <div className="flex overflow-hidden">
        <AnimatePresence initial={false}>
          {list.map((item) => (
            <motion.div
              key={item.id}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-1/5 h-0 pb-[20%]"
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
