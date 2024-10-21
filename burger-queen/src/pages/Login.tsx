import hamburguesa from "../image/hamburguesa.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { login } from "../api/auth";

export default function BurgerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 

    try {
      const credentials = { email, password };
      const response = await login(credentials); // Llama a la función login
      console.log("Login exitoso esoo:", response);

    
      localStorage.setItem('token', response.token);
      navigate("/pedidos")// aqui redirige a la pantalla de ordenes
    } catch (error) {
      setError('Email o Contraseña incorectos'); 
      console.error("Error during login:", error);
    } finally {
      setLoading(false); // Restablece el estado de carga
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Lado izquierdo - Imagen y saludo */}
      <div className="w-full md:w-1/2 bg-amber-100 flex flex-col justify-center items-center p-8">
       <img
          src={hamburguesa} 
          alt="Burger Logo"
          width={300}
          height={300}
          className="mb-8"
        /> 
        <h1 className="text-4xl font-bold text-amber-800 mb-4">¡Bienvenido a DeliBurger!</h1>
        <p className="text-xl text-amber-700 text-center">
          Inicia sesión para disfrutar de nuestras deliciosas hamburguesas
        </p>
      </div>

      {/* Lado derecho - Formulario de login */}
      <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                type="email"
                id="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600" disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}

            </Button>
          </form>
          {error && <p className="text-red-500">{error}</p>} {/* Mensaje de error */}
          <p className="mt-4 text-center text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-amber-500 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}