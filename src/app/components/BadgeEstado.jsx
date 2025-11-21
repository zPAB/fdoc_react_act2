// app/components/BadgeEstado.jsx
export default function BadgeEstado({ activo = true }) {
  return (
    <span
      className={
        activo
          ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
          : "bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold"
      }
    >
      {activo ? "Activo" : "Inactivo"}
    </span>
  );
}