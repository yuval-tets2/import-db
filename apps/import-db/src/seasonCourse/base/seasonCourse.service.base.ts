/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SeasonCourse, Course, Season } from "@prisma/client";

export class SeasonCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SeasonCourseCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeasonCourseCountArgs>
  ): Promise<number> {
    return this.prisma.seasonCourse.count(args);
  }

  async findMany<T extends Prisma.SeasonCourseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeasonCourseFindManyArgs>
  ): Promise<SeasonCourse[]> {
    return this.prisma.seasonCourse.findMany(args);
  }
  async findOne<T extends Prisma.SeasonCourseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeasonCourseFindUniqueArgs>
  ): Promise<SeasonCourse | null> {
    return this.prisma.seasonCourse.findUnique(args);
  }
  async create<T extends Prisma.SeasonCourseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeasonCourseCreateArgs>
  ): Promise<SeasonCourse> {
    return this.prisma.seasonCourse.create<T>(args);
  }
  async update<T extends Prisma.SeasonCourseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeasonCourseUpdateArgs>
  ): Promise<SeasonCourse> {
    return this.prisma.seasonCourse.update<T>(args);
  }
  async delete<T extends Prisma.SeasonCourseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeasonCourseDeleteArgs>
  ): Promise<SeasonCourse> {
    return this.prisma.seasonCourse.delete(args);
  }

  async getCourse(parentId: number): Promise<Course | null> {
    return this.prisma.seasonCourse
      .findUnique({
        where: { id: parentId },
      })
      .course();
  }

  async getSeason(parentId: number): Promise<Season | null> {
    return this.prisma.seasonCourse
      .findUnique({
        where: { id: parentId },
      })
      .season();
  }
}