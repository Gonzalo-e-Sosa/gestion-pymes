import { Show } from 'solid-js';

import type { JSX } from 'solid-js/jsx-runtime';

const Root = ({
  title,
  children,
  ...props
}: {
  title?: string;
  children: JSX.Element;
} & JSX.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} class="h-full max-h-full w-full max-w-full bg-white">
    <div class="flex justify-between items-center mb-2">
      <Show when={title}>
        <h3 class="text-sm text-muted-foreground">{title}</h3>
      </Show>
      <button class="text-xs text-indigo-600 border border-indigo-100 px-2 py-1 rounded hover:bg-indigo-50">
        View Report
      </button>
    </div>
    {children}
  </div>
);

const Content = ({
  children,
  ...props
}: { children: JSX.Element } & JSX.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
);

export default { Root, Content };
