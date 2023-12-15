import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";

import { BoardNavbar } from "./_components/board-navbar";

interface BoardLayoutProps {
  children: React.ReactNode;
  params: { boardId: string };
}

export const generateMetadata = async ({
  params,
}: {
  params: { boardId: string };
}) => {
  const { orgId } = auth();

  if (!orgId) {
    return {
      title: "Board",
    };
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
};

const BoardLayout = async ({ children, params }: BoardLayoutProps) => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-organization");
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  if (!board) {
    return notFound();
  }

  return (
    <div
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      className="relative h-full bg-no-repeat bg-cover bg-center"
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardLayout;
