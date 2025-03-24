import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const tracks = await prisma.track.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      res.status(200).json(tracks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tracks' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
