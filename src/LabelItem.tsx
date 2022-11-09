import * as React from 'react'
import styles from './LabelItem.module.css'

export interface LabelItemProps {
  itemClassName?: string;
  value: string;
  onRemoveClick: (_val: string) => void;
  closeItemCmp: React.ReactNode;
}

const LabelItem = (props: LabelItemProps) => {
  const { itemClassName, value, onRemoveClick, closeItemCmp } = props;

  return (
    <React.Fragment> 
        <div 
        className={`label-item ${styles['label-item']} ${itemClassName}`}>
          <span>{value}</span>
          <button
          onClick={() => onRemoveClick(value)}>{closeItemCmp || 'x'}</button>
        </div>
      </React.Fragment>
  )
}

export default LabelItem;