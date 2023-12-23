import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Component() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      TestInternationalization
      <select
        defaultValue={localStorage.getItem('i18nextLng')}
        onChange={e => {
          i18n.changeLanguage(e.target.value)
        }}
      >
        <option value="zh">中文</option>
        <option value="en">英文</option>
      </select>
      <div>效果1：{t('test1')}</div>
      <Trans i18nKey="test2">效果2</Trans>
    </div>
  )
}
