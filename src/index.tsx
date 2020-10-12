import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  placeholder: string
  type: string
  isBorder: boolean
  isFilled: boolean
  isUnderlined: boolean
  shadow: boolean
}

export const InputField = ({
  placeholder,
  type,
  isFilled,
  isBorder,
  isUnderlined,
  shadow
}: Props) => {
  let Input = null
  isBorder
    ? (Input = (
        <label className={styles.inputField}>
          <input
            type={type}
            className={`${styles.inputBordered} ${
              shadow ? styles.shadow : ' '
            }`}
            required
          />
          <span className={styles.placeHolder}>{placeholder}</span>
        </label>
      ))
    : null
  isFilled
    ? (Input = (
        <label className={styles.inputField}>
          <input
            type={type}
            className={`${styles.inputFilled} ${shadow ? styles.shadow : ' '}`}
            required
          />
          <span className={styles.placeHolder}>{placeholder}</span>
        </label>
      ))
    : null
  isUnderlined
    ? (Input = (
        <label className={styles.inputField}>
          <input
            type={type}
            className={`${styles.inputUnderline} ${shadow ? styles.shadow : ' '}`}
            required
          />
          <span className={styles.placeHolder}>{placeholder}</span>
        </label>
      ))
    : null
  return <div>{Input}</div>
}
