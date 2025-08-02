import { type ZodSchema } from 'astro/zod';
import { createSignal } from 'solid-js';

type IData<T> = Partial<T>;
type IErrors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends Record<string, unknown>>(
  schema: ZodSchema<T>,
) {
  const [formData, setFormData] = createSignal<IData<T>>({});
  const [errors, setErrors] = createSignal<IErrors<T>>({});

  const handleChange = (name: keyof T, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const result = schema.safeParse(formData());
    const { success } = result;

    if (success) {
      setErrors({});
    } else {
      const newErrors: Partial<Record<keyof T, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof T;
        newErrors[key] = issue.message;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setErrors(newErrors as any);
    }

    return success;
  };

  const handleSubmit = (callback: (data: T) => void) => {
    return (e: Event) => {
      e.preventDefault();
      if (validate()) {
        callback(schema.parse(formData()));
      }
    };
  };

  const clearError = (field: keyof T) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
  };

  return {
    values: formData,
    errors,
    handleChange,
    validate,
    handleSubmit,
    clearError,
  };
}
