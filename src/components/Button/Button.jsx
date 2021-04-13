import { Children } from 'react';

export default function Button({ cssClass, onClick, disabledBtn, children }) {
  return (
    <button className={cssClass} onClick={onClick} disabled={disabledBtn}>
      {children}
    </button>
  );
}
