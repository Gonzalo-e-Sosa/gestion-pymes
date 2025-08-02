// components/Select.tsx
import {
  type JSX,
  createSignal,
  For,
  Show,
  onCleanup,
  onMount,
} from 'solid-js';
import { HiSolidChevronDown } from 'solid-icons/hi';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  dataSource: SelectOption[];
  onChange?: (value: string) => void;
};

export default function Select(props: SelectProps): JSX.Element {
  const [selected, setSelected] = createSignal<SelectOption>(
    props.dataSource[0],
  );
  const [open, setOpen] = createSignal(false);

  let dropdownRef: HTMLDivElement | undefined;

  const handleSelect = (option: SelectOption) => {
    setSelected(option);
    props.onChange?.(option.value);
    setOpen(false);
  };

  onMount(() => {
    onClickOutside(dropdownRef!, () => setOpen(false));
  });

  return (
    <div class="relative inline-block w-32" ref={dropdownRef}>
      <div
        class="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open())}
      >
        <span>{selected().label}</span>
        <HiSolidChevronDown class="w-4 h-4 text-slate-500" />
      </div>

      <Show when={open()}>
        <div class="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-md z-10">
          <For each={props.dataSource}>
            {(option) => (
              <div
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

function onClickOutside(el: HTMLElement, callback: () => void) {
  const onClick = (e: MouseEvent) => {
    if (!el.contains(e.target as Node)) {
      callback();
    }
  };
  document.addEventListener('click', onClick);
  onCleanup(() => document.removeEventListener('click', onClick));
}
