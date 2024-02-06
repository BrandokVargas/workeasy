
import ContainerWork from "@/components/ContainerWork/ContainerWork";

export default function Home() {
  return (
    <main className="flex items-center min-h-screen justify-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20 flex bg-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
     <ContainerWork/>
    </main>
  );
}
