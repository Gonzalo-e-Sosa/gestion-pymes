import { z } from 'astro:schema';
import Form from '../form/Form';
import { useForm } from '../form/useForm';
import type { JSX } from 'solid-js/jsx-runtime';

const fields = z.object({
  search: z.string().min(3, 'Por lo menos 3 caracteres.'),
});

export const Search = () => {
  const form = useForm(fields);

  return (
    <search class="h-8 w-2xl flex flex-row items-center justify-between p-2 rounded-sm bg-[#F6F6FB]">
      <Form.Root
        onSubmit={form.handleSubmit((data) => console.log(data))}
        style={{ width: '100%' }}
      >
        <Form.InputField
          name="search"
          type="search"
          errorMessage={form.errors()?.search}
          onInput={(e) => {
            form.handleChange('search', e.currentTarget.value);
            form.clearError('search');
          }}
          style={{ width: '100%', outline: 'none' }}
          placeholder="Buscar"
        />
      </Form.Root>
      <button type="submit">
        <SearchIcon color="#627B87" />
      </button>
    </search>
  );
};

function SearchIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
      />
    </svg>
  );
}
