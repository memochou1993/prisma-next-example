import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET() {
  const posts = await prisma.post.findMany()

  const res = {
    data: posts,
  };

  return Response.json(res)
}

export async function POST() {
  const post = await prisma.post.create({
    data: {
      title: 'Test',
      content: 'Hello',
    },
  })

  const res = {
    data: post,
  };

  return Response.json(res)
}
