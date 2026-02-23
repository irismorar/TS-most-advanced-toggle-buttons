import "./App.css";
import { ToggleButton } from "./ToggleButton";
import { AddRemoveButton } from "./AddRemoveButton";
import { IncreaseDecreaseMax } from "./IncreaseDecreaseMax";
import { useToggleButtonsState } from "./useToggleButtonsState";

export default function App() {
  const {
    buttonsState,
    counterMaxButtonsActive,
    toggleButton,
    addButtonAtTheBeginning,
    removeButtonFromTheBeginning,
    addButtonAtTheEnd,
    removeButtonFromTheEnd,
    increaseCounterMaxActiveButtons,
    decreaseCounterMaxActiveButtons,
  } = useToggleButtonsState();

  return (
    <main>
      <section className="max-active-buttons-container">
        <IncreaseDecreaseMax
          handleClick={decreaseCounterMaxActiveButtons}
          text={"−"}
        />
        {counterMaxButtonsActive}
        <IncreaseDecreaseMax
          handleClick={increaseCounterMaxActiveButtons}
          text={"+"}
        />
      </section>
      <section className="add-remove-buttons-container">
        <span>
          <AddRemoveButton handleClick={addButtonAtTheBeginning} text={"+"} />
          <AddRemoveButton
            handleClick={removeButtonFromTheBeginning}
            text={"−"}
          />
        </span>
        <span className="buttons-container">
          {buttonsState.map((button, index) => {
            return (
              <ToggleButton
                key={index}
                handleClick={() => toggleButton(index)}
                text={button ? "ON" : "OFF"}
                isActive={button}
              />
            );
          })}
        </span>
        <span>
          <AddRemoveButton handleClick={addButtonAtTheEnd} text={"+"} />
          <AddRemoveButton handleClick={removeButtonFromTheEnd} text={"−"} />
        </span>
      </section>
    </main>
  );
}
