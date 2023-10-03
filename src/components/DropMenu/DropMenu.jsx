import React, { useState } from 'react';

const DropdownMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleMenu}>
        Menú
      </button>
      {menuVisible && (
        <div className="dropdown-content">
          <span>Opción 1</span>
          <span>Opción 2</span>
          <span>Opción 3</span>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;