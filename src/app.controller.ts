import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  // @Get('post/:id')
  // async getPostById(@Param('id') id: string): Promise<PostModel> {
  //   return this.prismaService.post.findUnique({ where: { id: Number(id) } });
  // }

  @Get('portfolios')
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.prismaService.portfolio.findMany({ skip, take: limit }),
      this.prismaService.portfolio.count(),
    ]);

    return {
      data: items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // @Get('users')
  // async getAllUsers(): Promise<UserModel[]> {
  //   return this.prismaService.extendedPrismaClient().user.findMany();
  // }

  // @Get('user/:id/drafts')
  // async getDraftsByUser(@Param('id') id: string): Promise<PostModel[]> {
  //   return this.prismaService.extendedPrismaClient().post.findMany({
  //     where: { authorId: Number(id), published: false },
  //   });
  // }

  // @Post('post')
  // async createDraft(
  //   @Body() postData: { title: string; content?: string; authorEmail: string },
  // ): Promise<PostModel> {
  //   const { title, content, authorEmail } = postData;
  //   return this.prismaService.extendedPrismaClient().post.create({
  //     data: {
  //       title,
  //       content,
  //       author: {
  //         connect: { email: authorEmail },
  //       },
  //     },
  //   });
  // }

  // @Post('signup')
  // async signupUser(
  //   @Body()
  //   userData: {
  //     name?: string;
  //     email: string;
  //     posts?: Prisma.PostCreateInput[];
  //   },
  // ): Promise<UserModel> {
  //   const postData = userData.posts?.map((post) => {
  //     return { title: post?.title, content: post?.content };
  //   });
  //   return this.prismaService.extendedPrismaClient().user.create({
  //     data: {
  //       name: userData?.name,
  //       email: userData.email,
  //       posts: {
  //         create: postData,
  //       },
  //     },
  //   });
  // }

  // @Put('publish/:id')
  // async togglePublishPost(@Param('id') id: string): Promise<PostModel> {
  //   const postData = await this.prismaService
  //     .extendedPrismaClient()
  //     .post.findUnique({
  //       where: { id: Number(id) },
  //       select: {
  //         published: true,
  //       },
  //     });

  //   return this.prismaService.extendedPrismaClient().post.update({
  //     where: { id: Number(id) || undefined },
  //     data: { published: !postData?.published },
  //   });
  // }

  // @Delete('post/:id')
  // async deletePost(@Param('id') id: string): Promise<PostModel> {
  //   return this.prismaService
  //     .extendedPrismaClient()
  //     .post.delete({ where: { id: Number(id) } });
  // }

  // @Put('/post/:id/views')
  // async incrementPostViewCount(@Param('id') id: string): Promise<PostModel> {
  //   return this.prismaService.extendedPrismaClient().post.update({
  //     where: { id: Number(id) },
  //     data: {
  //       viewCount: {
  //         increment: 1,
  //       },
  //     },
  //   });
  // }
}
