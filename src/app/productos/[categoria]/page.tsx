import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ categoria: string }>;
}

export default async function CategoriaRedirectPage({ params }: Props) {
  const { categoria } = await params;
  redirect(`/productos?categoria=${categoria}`);
}
