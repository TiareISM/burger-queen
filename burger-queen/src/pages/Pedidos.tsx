import { Button} from "../components/ui/button";

export default function Pedidos() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-100">
        <h1 className="text-4xl font-bold text-green-800 mb-8">¡Bienvenido a Pedidos!</h1>
        <p className="text-xl text-gray-700 mb-6">Aquí puedes gestionar los pedidos.</p>
  
        <div className="space-x-4">
          <Button className="bg-green-500 hover:bg-green-600">Agregar Pedido</Button>
          <Button className="bg-red-500 hover:bg-red-600">Cancelar Pedido</Button>
        </div>
      </div>
    );
  }