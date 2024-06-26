import { useState } from "react";

export function useNotification () {
  const [isVisbileNotification, setIsVisbileNotification] = useState(false)

  const onClickNotification = () => {
    const notification = document.querySelector('#notification')
    const notificationEnabled = notification?.classList.contains('enabled')

    if(notificationEnabled) {
      notification?.classList.add('disabled')
      setTimeout(() => {
        notification?.classList.remove('enabled')
        setIsVisbileNotification(false)
      }, 1000);
    }
    else {
      setIsVisbileNotification(true)
      notification?.classList.remove('disabled')
      notification?.classList.add('enabled')
    }
  }

  return ({
      isVisbileNotification,
      onClickNotification,
  })
}