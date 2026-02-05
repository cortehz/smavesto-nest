import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaModule } from './prisma.module'
import { PortfolioModule } from './portfolio/portfolio.module'

@Module({
  imports: [PrismaModule, PortfolioModule],
  controllers: [AppController],
})
export class AppModule {}
