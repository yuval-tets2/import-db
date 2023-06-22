/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Member, Matchscore, Score, Team } from "@prisma/client";

export class MemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MemberCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberCountArgs>
  ): Promise<number> {
    return this.prisma.member.count(args);
  }

  async findMany<T extends Prisma.MemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberFindManyArgs>
  ): Promise<Member[]> {
    return this.prisma.member.findMany(args);
  }
  async findOne<T extends Prisma.MemberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberFindUniqueArgs>
  ): Promise<Member | null> {
    return this.prisma.member.findUnique(args);
  }
  async create<T extends Prisma.MemberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberCreateArgs>
  ): Promise<Member> {
    return this.prisma.member.create<T>(args);
  }
  async update<T extends Prisma.MemberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberUpdateArgs>
  ): Promise<Member> {
    return this.prisma.member.update<T>(args);
  }
  async delete<T extends Prisma.MemberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MemberDeleteArgs>
  ): Promise<Member> {
    return this.prisma.member.delete(args);
  }

  async findMatchscore(
    parentId: number,
    args: Prisma.MatchscoreFindManyArgs
  ): Promise<Matchscore[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .matchscore(args);
  }

  async findScores(
    parentId: number,
    args: Prisma.ScoreFindManyArgs
  ): Promise<Score[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .scores(args);
  }

  async findTeam(
    parentId: number,
    args: Prisma.TeamFindManyArgs
  ): Promise<Team[]> {
    return this.prisma.member
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .team(args);
  }
}
