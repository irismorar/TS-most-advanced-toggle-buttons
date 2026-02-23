import { useCallback, useState } from "react";

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

  const addButtonAtTheBeginning = useCallback(() => {
    setButtonsState((prev) => {
      return [false, ...prev];
    });
  }, []);

  const removeButtonFromTheBeginning = useCallback(() => {
    setButtonsState((prev) => {
      return prev.slice(1);
    });
  }, []);

  const addButtonAtTheEnd = useCallback(() => {
    setButtonsState((prev) => {
      return [...prev, false];
    });
  }, []);

  const removeButtonFromTheEnd = useCallback(() => {
    setButtonsState((prev) => {
      return prev.slice(0, -1);
    });
  }, []);

  const increaseCounterMaxActiveButtons = useCallback(() => {
    setCounterMaxButtonsActive((prev) => prev + 1);
  }, []);

  const decreaseCounterMaxActiveButtons = useCallback(() => {
    setCounterMaxButtonsActive((prev) => {
      if (prev >= 1) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  return {
    buttonsState,
    counterMaxButtonsActive,
    toggleButton,
    addButtonAtTheBeginning,
    removeButtonFromTheBeginning,
    addButtonAtTheEnd,
    removeButtonFromTheEnd,
    increaseCounterMaxActiveButtons,
    decreaseCounterMaxActiveButtons,
  };
}
