import { Dispatch, useState } from 'react'
import { Action } from '../lib/types'
import styles from '../styles/DataSelector.module.scss'

export const dataNameGroups = [
  {
    group: 'English',
    values: [
      'Quotes',
      'English 200',
      'English 1K',
      'English 5K',
      'English 10K',
      'Wordle',
      'Commonly Misspelled'
    ]
  },
  {
    group: 'Programming',
    values: [
      'JavaScript',
      'Rust',
      'HTML',
      'CSS',
      'C++',
      'SQL',
      'Git',
      'Bash',
      'Python',
      'Java',
      'C#'
    ]
  }
]

type Props = { dispatch: Dispatch<Action>; handleClose: () => void }

export function DataSelector({ dispatch, handleClose }: Props) {
  const [customInput, setCustomInput] = useState("")

  return (
    <div className={styles.dataSelector}>
      {dataNameGroups.map(dataNameGroup => (
        <div key={dataNameGroup.group} className={styles.optionGroup}>
          <h3 className={styles.groupTitle}> {dataNameGroup.group} </h3>
          <div className={styles.options}>
            {dataNameGroup.values.map(value => (
              <div
                key={value}
                className={styles.option}
                onClick={() => {
                  handleClose()
                  dispatch({ type: 'setDataName', data: value })
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      ))}
        <textarea onChange={e => setCustomInput(e.target.value)} className={styles.textArea} placeholder='Copy and paste text here to make your own custom pactice!'></textarea>
        <div
            className={styles.customButton}
            onClick={() => {
              if (customInput){
                handleClose()
                dispatch({ type: 'setData', dataName: 'Custom', data: customInput.split(/\s+/gi)})
              }
            }}
        >
          Custom
      </div>
    </div>
  )
}
