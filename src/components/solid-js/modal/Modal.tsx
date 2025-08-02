import { Show, type JSX } from 'solid-js';
import { Portal } from 'solid-js/web';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  title?: string;
};

export function Modal(props: ModalProps) {
  const handleBackgroundClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <Show when={props.isOpen}>
      <Portal>
        <div
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-lg font-semibold">{props.title ?? 'Modal'}</h2>
              <button onClick={props.onClose} aria-label="Cerrar modal">
                ✖️
              </button>
            </div>
            <div>{props.children}</div>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
