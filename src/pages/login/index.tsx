import logoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Container from "../../components/container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido!")
    .nonempty("O campo email é obrigatório"),
  password: z.string().nonempty("o campo senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onsubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      {" "}
      <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
        <Link to={"/"} className="mb-6 max-w-sm w-full">
          <img src={logoImg} alt="logo do site" className="w-full" />
        </Link>
        <form
          className="bg-white w-full max-w-xl rounded-lg p-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-900 w-full rounded-lg text-white h-8 font-medium opacity-100 hover:opacity-95 transition-all"
          >
            Acessar
          </button>
        </form>
        <Link to={"/register"}>Ainda não possui uma conta? Cadastre-se</Link>
      </div>
    </Container>
  );
};

export default Login;
