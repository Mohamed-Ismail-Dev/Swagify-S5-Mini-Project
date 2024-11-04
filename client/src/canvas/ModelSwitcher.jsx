import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const ModelSwitcher = () => {
  const snap = useSnapshot(state);

  return (
    <div className="model-switcher">
      <button
        className={`px-4 py-2 ${snap.selectedModel === 'tshirt' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        onClick={() => (state.selectedModel = 'tshirt')}
      >
        T-Shirt
      </button>
      <button
        className={`px-4 py-2 ${snap.selectedModel === 'hoodie' ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
        onClick={() => (state.selectedModel = 'hoodie')}
      >
        Hoodie
      </button>
    </div>
  );
};

export default ModelSwitcher;
