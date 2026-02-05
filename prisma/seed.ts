import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient } from './generated/client';

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter: pool });

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    portfolios: {
      create: [
        {
          name: 'Growth Portfolio',
          riskLevel: 'AGGRESSIVE',
          totalValue: 50000.0,
          holdings: {
            create: [
              { symbol: 'AAPL', shares: 100, avgPrice: 180.5 },
              { symbol: 'TSLA', shares: 50, avgPrice: 240.0 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    portfolios: {
      create: [
        {
          name: 'Balanced Portfolio',
          riskLevel: 'MODERATE',
          totalValue: 30000.0,
          holdings: {
            create: [
              { symbol: 'MSFT', shares: 75, avgPrice: 380.25 },
              { symbol: 'GOOGL', shares: 20, avgPrice: 140.0 },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    portfolios: {
      create: [
        {
          name: 'Conservative Portfolio',
          riskLevel: 'CONSERVATIVE',
          totalValue: 100000.0,
          holdings: {
            create: [
              { symbol: 'JNJ', shares: 200, avgPrice: 155.0 },
              { symbol: 'KO', shares: 300, avgPrice: 58.75 },
            ],
          },
        },
        {
          name: 'Speculative Portfolio',
          riskLevel: 'AGGRESSIVE',
          totalValue: 15000.0,
          holdings: {
            create: [{ symbol: 'NVDA', shares: 30, avgPrice: 500.0 }],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);

  // Clear existing data
  await prisma.holding.deleteMany();
  await prisma.portfolio.deleteMany();
  await prisma.user.deleteMany();

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
