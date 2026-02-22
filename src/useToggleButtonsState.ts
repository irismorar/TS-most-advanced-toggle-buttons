import { useState } from "react";

export function useToggleButtonsState() {
  const [buttonsState, setButtonsState] = useState([false, false, false]);
  const [counterMaxButtonsActive, setCounterMaxButtonsActive] = useState(0);

  const toggleButton = (buttonIndex: number) => {
    const numberOfActiveButtons = buttonsState.filter(
      (buttonState) => buttonState,
    ).length;

    const afterToggleButton = buttonsState.map(
      (currentButton, currentButtonIndex) => {
        if (buttonIndex !== currentButtonIndex) {
          return currentButton;
        }
        if (currentButton) {
          return !currentButton;
        }
        if (numberOfActiveButtons < counterMaxButtonsActive) {
          return !currentButton;
        }
        return currentButton;
      },
    );
    setButtonsState(afterToggleButton);
  };

  return {
    buttonsState,
    counterMaxButtonsActive,
    toggleButton,
  };
}
