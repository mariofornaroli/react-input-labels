import * as React from 'react'
import styles from './LabelItem.module.css'

export interface LabelItemProps {
  itemClassName?: string;
  value: string;
  onRemoveClick: (_val: string) => void;
}

const LabelItem = (props: LabelItemProps) => {
  const { itemClassName, value, onRemoveClick } = props;

  return (
    <React.Fragment> 
        <div 
        className={`label-container ${styles['label-item']} ${itemClassName}`}>
          <span>{value}</span>
          <button className="close-btn"
          onClick={() => onRemoveClick(value)}>x</button>
        </div>
      </React.Fragment>
  )
}

export default LabelItem;