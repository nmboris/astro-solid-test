import { type Component, createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { counterValue } from "@/stores";

type Props = {
    startWith?: number;
    class?: string;
};

const Counter: Component<Props> = (props) => {
    const { class: className } = props;

    const $counterValue = useStore(counterValue);

    if (props.startWith) {
        counterValue.set(props.startWith);
    }

    return (
        <div classList={{ [className!]: className !== null }}>
            <div class="text-xl my-6">{$counterValue()}</div>

            <button
                class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                onClick={() => counterValue.set($counterValue() + 1)}>
                Increment via SolidJS
            </button>
        </div>
    );
};

export default Counter;
