/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CourseTeetype, Course } from "@prisma/client";

export class CourseTeetypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CourseTeetypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseTeetypeCountArgs>
  ): Promise<number> {
    return this.prisma.courseTeetype.count(args);
  }

  async findMany<T extends Prisma.CourseTeetypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseTeetypeFindManyArgs>
  ): Promise<CourseTeetype[]> {
    return this.prisma.courseTeetype.findMany(args);
  }
  async findOne<T extends Prisma.CourseTeetypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseTeetypeFindUniqueArgs>
  ): Promise<CourseTeetype | null> {
    return this.prisma.courseTeetype.findUnique(args);
  }
  async create<T extends Prisma.CourseTeetypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseTeetypeCreateArgs>
  ): Promise<CourseTeetype> {
    return this.prisma.courseTeetype.create<T>(args);
  }
  async update<T extends Prisma.CourseTeetypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseTeetypeUpdateArgs>
  ): Promise<CourseTeetype> {
    return this.prisma.courseTeetype.update<T>(args);
  }
  async delete<T extends Prisma.CourseTeetypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseTeetypeDeleteArgs>
  ): Promise<CourseTeetype> {
    return this.prisma.courseTeetype.delete(args);
  }

  async getCourse(parentId: number): Promise<Course | null> {
    return this.prisma.courseTeetype
      .findUnique({
        where: { id: parentId },
      })
      .course();
  }
}
