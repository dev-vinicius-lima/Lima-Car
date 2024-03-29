import { useEffect, useContext } from "react";
import logoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Container from "../../components/container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../services/firebaseConnect";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .string()
    .email("Insira um email válido!")
    .min(1, "O campo email é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .min(1, "o campo senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const { handleInfoUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }
    handleLogout();
  }, []);

  function onsubmit(data: FormData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.name,
        });
        handleInfoUser({
          name: data.name,
          email: data.email,
          uid: user.user.uid,
        });
        console.log("CADASTRADO !");
        toast.success("Cadastrado com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log("Erro ao cadastrar!");
        console.log(error);
        toast.error("Erro ao cadastrar conta!");
      });
  }

  return (
    <Container>
      {" "}
      <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
        <Link to={"/"} className="mb-6 max-w-sm w-full rounded-lg">
          <img src={logoImg} alt="logo do site" className="w-full" />
        </Link>
        <form
          className="bg-white w-full max-w-xl rounded-lg p-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Digite seu nome completo..."
              name="name"
              error={errors.name?.message}
              register={register}
            />
          </div>
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
            Cadastrar
          </button>
        </form>
        <Link to={"/login"}>Já possui uma conta? Faça o login!</Link>
      </div>
    </Container>
  );
};

export default Register;
