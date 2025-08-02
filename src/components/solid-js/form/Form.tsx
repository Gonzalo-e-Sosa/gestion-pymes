import { splitProps, type JSX, type ParentProps, Show } from 'solid-js';

type InputFieldProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  errorComponent?: JSX.Element;
} & JSX.HTMLAttributes<HTMLInputElement>;

function InputField(props: InputFieldProps) {
  const [local, inputProps] = splitProps(props, [
    'label',
    'name',
    'type',
    'placeholder',
    'errorMessage',
    'errorComponent',
  ]);

  return (
    <div class="relative">
      <Show when={local.label}>
        <label for={local.name}>{local.label}</label>
      </Show>
      <input
        id={local.name}
        name={local.name}
        type={local.type ?? 'text'}
        placeholder={local.placeholder ?? ''}
        aria-invalid={!!local.errorMessage}
        {...inputProps}
      />

      <Show when={local.errorMessage || local.errorComponent}>
        <Show
          when={local.errorComponent}
          fallback={
            <span class="text-sm text-red-500 absolute inset-x-0 top-8">
              {local.errorMessage}
            </span>
          }
        >
          {local.errorComponent}
        </Show>
      </Show>
    </div>
  );
}

type FormProps = ParentProps & JSX.HTMLAttributes<HTMLFormElement>;

function Root({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}

// Namespace export
const Form = {
  Root,
  InputField,
};

export default Form;
