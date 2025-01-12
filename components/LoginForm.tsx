'use client'
import { useLogin } from "@/utlis/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const { mutate, status, error } = useLogin();

  const onSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/"); // Redirect to the home page on success
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="input"
        />
      </div>
      <button type="submit" disabled={status === 'pending'} className="btn">
        {status === 'pending' ? "Loading..." : "Login"}
      </button>
      {error && <p className="text-red-500">{(error as any).response.data.message}</p>}
    </form>
  );
};

export default LoginForm;
